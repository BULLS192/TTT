'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { canonicalLogoDataUri } from '../lib/brand/logoData';
import { homepageCinematic } from '../lib/cinematicMedia';

const chapters = [
  { key: 'hero', start: 0, end: 0.16, kicker: 'Thompson Transportation Technologies', title: 'Technology, Integrated.', body: 'Automotive technology designed around the vehicle — not added around it.' },
  { key: 'tint', start: 0.16, end: 0.32, kicker: '01 / Glass', title: 'Precision Tint', body: 'Privacy, heat rejection and a finish that feels native to the vehicle.' },
  { key: 'audio', start: 0.32, end: 0.58, kicker: '02 / Audio', title: 'Premium Audio Integration', body: 'Speakers, DSP, amplification and sub-bass engineered as one cabin system.' },
  { key: 'security', start: 0.58, end: 0.84, kicker: '03 / Security + Tracking', title: 'Track. Protect. Control.', body: 'Discreet hardware, connected intelligence and layered anti-theft integration.' },
  { key: 'ecosystem', start: 0.84, end: 1.01, kicker: '04 / TTT Ecosystem', title: 'Technology for every vehicle.', body: 'Consumer vehicles. Dealerships. Fleets. One integration philosophy.' },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const chapterFor = (value) => {
  const index = chapters.findIndex((item) => value >= item.start && value < item.end);
  return index < 0 ? chapters.length - 1 : index;
};

export default function ScrollCinematic() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const renderedProgressRef = useRef(-1);
  const lastSeekAtRef = useRef(0);
  const spriteImagesRef = useRef([]);

  const [deviceKnown, setDeviceKnown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [desktopReady, setDesktopReady] = useState(false);
  const [mobileReady, setMobileReady] = useState(false);
  const [mediaFailed, setMediaFailed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [motionOverride, setMotionOverride] = useState(false);
  const reducedMotion = prefersReducedMotion && !motionOverride;

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileWidth = window.matchMedia('(max-width: 900px)');
    const coarse = window.matchMedia('(pointer: coarse)');
    const sync = () => {
      setPrefersReducedMotion(motion.matches);
      setIsMobile(mobileWidth.matches || coarse.matches);
      setDeviceKnown(true);
    };
    sync();
    motion.addEventListener?.('change', sync);
    mobileWidth.addEventListener?.('change', sync);
    coarse.addEventListener?.('change', sync);
    return () => {
      motion.removeEventListener?.('change', sync);
      mobileWidth.removeEventListener?.('change', sync);
      coarse.removeEventListener?.('change', sync);
    };
  }, []);

  const drawMobileFrame = useCallback((value) => {
    const canvas = canvasRef.current;
    const images = spriteImagesRef.current;
    const spec = homepageCinematic.mobileScrub;
    if (!canvas || !spec || !images.length) return;

    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const dw = Math.max(1, Math.round(rect.width * dpr));
    const dh = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== dw || canvas.height !== dh) {
      canvas.width = dw;
      canvas.height = dh;
    }

    const frameIndex = clamp(Math.round(value * (spec.frameCount - 1)), 0, spec.frameCount - 1);
    const sheetIndex = Math.floor(frameIndex / spec.framesPerSheet);
    const localIndex = frameIndex % spec.framesPerSheet;
    const image = images[sheetIndex];
    if (!image?.complete) return;

    const col = localIndex % spec.columns;
    const row = Math.floor(localIndex / spec.columns);
    const cellX = col * spec.frameWidth;
    const cellY = row * spec.frameHeight;
    const srcAspect = spec.frameWidth / spec.frameHeight;
    const dstAspect = dw / dh;

    let sx = cellX;
    let sy = cellY;
    let sw = spec.frameWidth;
    let sh = spec.frameHeight;

    if (srcAspect > dstAspect) {
      sw = spec.frameHeight * dstAspect;
      sx = cellX + (spec.frameWidth - sw) / 2;
    } else if (srcAspect < dstAspect) {
      sh = spec.frameWidth / dstAspect;
      sy = cellY + (spec.frameHeight - sh) / 2;
    }

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, dw, dh);
  }, []);

  useEffect(() => {
    if (!deviceKnown || !isMobile || reducedMotion || mediaFailed) return;
    const urls = homepageCinematic.mobileScrub?.sprites || [];
    if (!urls.length) {
      setMediaFailed(true);
      return;
    }

    let cancelled = false;
    setMobileReady(false);
    const images = urls.map(() => new window.Image());

    Promise.all(images.map((image, index) => new Promise((resolve, reject) => {
      image.decoding = 'async';
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = urls[index];
    }))).then(() => {
      if (cancelled) return;
      spriteImagesRef.current = images;
      setMobileReady(true);
      window.requestAnimationFrame(() => drawMobileFrame(smoothProgressRef.current));
    }).catch(() => {
      if (!cancelled) setMediaFailed(true);
    });

    return () => { cancelled = true; };
  }, [deviceKnown, isMobile, reducedMotion, mediaFailed, drawMobileFrame]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !deviceKnown || reducedMotion || mediaFailed) return;

    const tick = (now) => {
      rafRef.current = null;
      const target = targetProgressRef.current;
      let current = smoothProgressRef.current;
      const distance = target - current;
      const easing = isMobile ? 0.24 : 0.18;
      current = Math.abs(distance) < 0.00035 ? target : current + distance * easing;
      smoothProgressRef.current = current;

      if (Math.abs(current - renderedProgressRef.current) > 0.001 || current === target) {
        renderedProgressRef.current = current;
        setProgress(current);
        setActiveChapter(chapterFor(current));
      }

      if (isMobile) {
        if (mobileReady) drawMobileFrame(current);
      } else {
        const video = videoRef.current;
        if (video && desktopReady && video.readyState >= 1 && Number.isFinite(video.duration) && video.duration > 0) {
          const targetTime = clamp(current * video.duration, 0.001, Math.max(video.duration - 0.04, 0.001));
          const delta = Math.abs(targetTime - video.currentTime);
          if (delta > 0.028 && now - lastSeekAtRef.current >= 34 && !video.seeking) {
            try {
              video.currentTime = targetTime;
              lastSeekAtRef.current = now;
            } catch (_) {}
          }
        }
      }

      if (Math.abs(target - current) > 0.00035) rafRef.current = window.requestAnimationFrame(tick);
    };

    const readScrollTarget = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      targetProgressRef.current = clamp(clamp(-rect.top, 0, scrollable) / scrollable, 0, 1);
      if (!rafRef.current) rafRef.current = window.requestAnimationFrame(tick);
    };

    const onResize = () => {
      readScrollTarget();
      if (isMobile && mobileReady) drawMobileFrame(smoothProgressRef.current);
    };

    readScrollTarget();
    window.addEventListener('scroll', readScrollTarget, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    return () => {
      window.removeEventListener('scroll', readScrollTarget);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [deviceKnown, isMobile, reducedMotion, mediaFailed, desktopReady, mobileReady, drawMobileFrame]);

  const securityProgress = clamp((progress - 0.58) / 0.26, 0, 1);
  const showStatic = !deviceKnown || reducedMotion || mediaFailed;

  return (
    <section ref={sectionRef} className={`cinematic ${reducedMotion ? 'cinematic--reduced' : ''}`} aria-label="TTT vehicle technology experience">
      <div className="cinematic__sticky">
        {showStatic ? (
          <img className="cinematic__video cinematic__poster is-ready" src={homepageCinematic.sourcePoster || homepageCinematic.fallback} alt="" aria-hidden="true" decoding="async" />
        ) : isMobile ? (
          <>
            <img className={`cinematic__video cinematic__poster is-ready ${mobileReady ? 'is-hidden' : ''}`} src={homepageCinematic.sourcePoster || homepageCinematic.fallback} alt="" aria-hidden="true" decoding="async" />
            <canvas ref={canvasRef} className={`cinematic__video cinematic__canvas ${mobileReady ? 'is-ready' : ''}`} aria-hidden="true" />
          </>
        ) : (
          <video
            ref={videoRef}
            className={`cinematic__video ${desktopReady ? 'is-ready' : ''}`}
            src={homepageCinematic.video}
            poster={homepageCinematic.sourcePoster || homepageCinematic.poster}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            controls={false}
            aria-hidden="true"
            tabIndex={-1}
            onLoadedMetadata={(event) => { event.currentTarget.pause(); setDesktopReady(true); }}
            onError={() => setMediaFailed(true)}
          />
        )}

        <div className="cinematic__shade cinematic__shade--left" />
        <div className="cinematic__shade cinematic__shade--top" />
        <div className="cinematic__shade cinematic__shade--bottom" />

        <div className="cinematic__content shell">
          {chapters.map((item, index) => (
            <div className={`cinematic__chapter cinematic__chapter--${item.key} ${index === activeChapter ? 'is-active' : ''}`} key={item.key} aria-hidden={index !== activeChapter}>
              {item.key === 'ecosystem' ? <img className="cinematic__logo" src={canonicalLogoDataUri} alt="Thompson Transportation Technologies" width="480" height="228" decoding="async" /> : null}
              <p className="cinematic__kicker">{item.kicker}</p>
              <h1>{item.title}</h1>
              <p className="cinematic__body">{item.body}</p>
              {item.key === 'security' ? <div className="cinematic__callouts" aria-label="Vehicle security capabilities"><span className={securityProgress > 0.08 ? 'is-on' : ''}>GPS Tracking</span><span className={securityProgress > 0.35 ? 'is-on' : ''}>Immobilizer</span><span className={securityProgress > 0.62 ? 'is-on' : ''}>Security Control</span></div> : null}
              {item.key === 'ecosystem' ? <div className="cinematic__actions"><Link className="button" href="/start">Start a project →</Link><Link className="button button--ghost-dark" href="/solutions">Explore solutions</Link></div> : null}
            </div>
          ))}
        </div>

        {prefersReducedMotion && !motionOverride && !mediaFailed ? <button className="cinematic__motion-toggle" type="button" onClick={() => setMotionOverride(true)}>Enable cinematic</button> : null}
        <div className={`cinematic__scroll-hint ${progress > 0.08 ? 'is-hidden' : ''}`}><span>Scroll to explore</span><b>↓</b></div>
        <div className="cinematic__rail" aria-hidden="true">{chapters.map((item, index) => <span key={item.key} className={index === activeChapter ? 'is-active' : ''}>0{index + 1}</span>)}</div>
        <div className="cinematic__progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
      </div>
    </section>
  );
}
