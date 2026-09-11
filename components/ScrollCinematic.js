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
  const rafRef = useRef(null);
  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const renderedProgressRef = useRef(0);
  const lastSeekAtRef = useRef(0);
  const unlockedRef = useRef(false);
  const unlockingRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [ready, setReady] = useState(false);
  const [decoderReady, setDecoderReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener?.('change', sync);
    return () => media.removeEventListener?.('change', sync);
  }, []);

  const unlockVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video || unlockedRef.current || unlockingRef.current || reducedMotion || video.readyState < 2) return;
    unlockingRef.current = true;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    try {
      const playback = video.play();
      if (playback?.then) await playback;

      await new Promise((resolve) => {
        let finished = false;
        const done = () => {
          if (finished) return;
          finished = true;
          resolve();
        };
        if (typeof video.requestVideoFrameCallback === 'function') video.requestVideoFrameCallback(done);
        window.setTimeout(done, 120);
      });

      video.pause();
      if (video.currentTime > 0.12 || video.currentTime === 0) {
        try { video.currentTime = 0.001; } catch (_) {}
      }
      unlockedRef.current = true;
      setDecoderReady(true);
    } catch (_) {
      // Safari may require the first touch gesture. The gesture listeners below retry this path.
    } finally {
      unlockingRef.current = false;
    }
  }, [reducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    const onLoadedData = () => { unlockVideo(); };
    const onFirstGesture = () => { unlockVideo(); };

    video.addEventListener('loadeddata', onLoadedData);
    window.addEventListener('touchstart', onFirstGesture, { passive: true });
    window.addEventListener('pointerdown', onFirstGesture, { passive: true });
    window.addEventListener('click', onFirstGesture, { passive: true });

    if (video.readyState >= 2) unlockVideo();

    return () => {
      video.removeEventListener('loadeddata', onLoadedData);
      window.removeEventListener('touchstart', onFirstGesture);
      window.removeEventListener('pointerdown', onFirstGesture);
      window.removeEventListener('click', onFirstGesture);
    };
  }, [reducedMotion, unlockVideo]);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video || reducedMotion) return;

    const readScrollTarget = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      targetProgressRef.current = clamp(clamp(-rect.top, 0, scrollable) / scrollable, 0, 1);
      if (!unlockedRef.current && video.readyState >= 2) unlockVideo();
      if (!rafRef.current) rafRef.current = window.requestAnimationFrame(tick);
    };

    const tick = (now) => {
      rafRef.current = null;
      const target = targetProgressRef.current;
      let current = smoothProgressRef.current;
      const distance = target - current;

      current = Math.abs(distance) < 0.00035 ? target : current + distance * 0.18;
      smoothProgressRef.current = current;

      if (Math.abs(current - renderedProgressRef.current) > 0.001 || current === target) {
        renderedProgressRef.current = current;
        setProgress(current);
        setActiveChapter(chapterFor(current));
      }

      if (unlockedRef.current && video.readyState >= 2 && Number.isFinite(video.duration) && video.duration > 0) {
        const targetTime = clamp(current * video.duration, 0.001, Math.max(video.duration - 0.04, 0.001));
        const delta = Math.abs(targetTime - video.currentTime);
        const enoughTimePassed = now - lastSeekAtRef.current >= 34;

        if (delta > 0.028 && enoughTimePassed && !video.seeking) {
          try {
            video.currentTime = targetTime;
            lastSeekAtRef.current = now;
          } catch (_) {}
        }
      }

      if (Math.abs(target - current) > 0.00035) rafRef.current = window.requestAnimationFrame(tick);
    };

    video.pause();
    readScrollTarget();
    window.addEventListener('scroll', readScrollTarget, { passive: true });
    window.addEventListener('resize', readScrollTarget);
    window.addEventListener('orientationchange', readScrollTarget);

    return () => {
      window.removeEventListener('scroll', readScrollTarget);
      window.removeEventListener('resize', readScrollTarget);
      window.removeEventListener('orientationchange', readScrollTarget);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion, unlockVideo]);

  const securityProgress = clamp((progress - 0.58) / 0.26, 0, 1);

  return (
    <section ref={sectionRef} className={`cinematic ${reducedMotion ? 'cinematic--reduced' : ''}`} aria-label="TTT vehicle technology experience">
      <div className="cinematic__sticky">
        <video
          ref={videoRef}
          className={`cinematic__video ${ready ? 'is-ready' : ''} ${decoderReady ? 'is-unlocked' : ''}`}
          src={homepageCinematic.video}
          poster={homepageCinematic.poster}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          aria-hidden="true"
          tabIndex={-1}
          onLoadedMetadata={(event) => { event.currentTarget.pause(); setReady(true); }}
          onCanPlay={() => unlockVideo()}
        />
        <div className="cinematic__shade cinematic__shade--left" />
        <div className="cinematic__shade cinematic__shade--top" />
        <div className="cinematic__shade cinematic__shade--bottom" />

        <div className="cinematic__content shell">
          {chapters.map((item, index) => (
            <div className={`cinematic__chapter cinematic__chapter--${item.key} ${index === activeChapter ? 'is-active' : ''}`} key={item.key} aria-hidden={index !== activeChapter}>
              {item.key === 'ecosystem' ? <img className="cinematic__logo" src={canonicalLogoDataUri} alt="Thompson Transportation Technologies" width="480" height="228" /> : null}
              <p className="cinematic__kicker">{item.kicker}</p>
              <h1>{item.title}</h1>
              <p className="cinematic__body">{item.body}</p>
              {item.key === 'security' ? <div className="cinematic__callouts" aria-label="Vehicle security capabilities"><span className={securityProgress > 0.08 ? 'is-on' : ''}>GPS Tracking</span><span className={securityProgress > 0.35 ? 'is-on' : ''}>Immobilizer</span><span className={securityProgress > 0.62 ? 'is-on' : ''}>Security Control</span></div> : null}
              {item.key === 'ecosystem' ? <div className="cinematic__actions"><Link className="button" href="/start">Start a project →</Link><Link className="button button--ghost-dark" href="/solutions">Explore solutions</Link></div> : null}
            </div>
          ))}
        </div>

        <div className={`cinematic__scroll-hint ${progress > 0.08 ? 'is-hidden' : ''}`}><span>Scroll to explore</span><b>↓</b></div>
        <div className="cinematic__rail" aria-hidden="true">{chapters.map((item, index) => <span key={item.key} className={index === activeChapter ? 'is-active' : ''}>0{index + 1}</span>)}</div>
        <div className="cinematic__progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
      </div>
    </section>
  );
}
