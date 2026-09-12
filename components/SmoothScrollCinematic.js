'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { brandAssets } from '../lib/assets';
import { homepageCinematic } from '../lib/cinematicMedia';

const chapters = [
  { key: 'hero', start: 0, end: 0.16, kicker: 'Thompson Transportation Technologies', title: 'Technology, Integrated.', body: 'Automotive technology designed around the vehicle — not added around it.' },
  { key: 'tint', start: 0.16, end: 0.32, kicker: '01 / Glass', title: 'Precision Tint', body: 'Privacy, heat rejection and a finish that feels native to the vehicle.' },
  { key: 'audio', start: 0.32, end: 0.58, kicker: '02 / Audio', title: 'Premium Audio Integration', body: 'Speakers, DSP, amplification and sub-bass engineered as one cabin system.' },
  { key: 'security', start: 0.58, end: 0.84, kicker: '03 / Security + Tracking', title: 'Track. Protect. Control.', body: 'Discreet hardware, connected intelligence and layered vehicle protection.' },
  { key: 'ecosystem', start: 0.84, end: 1.01, kicker: '04 / TTT Ecosystem', title: 'Technology for every vehicle.', body: 'Consumer vehicles. Dealerships. Fleets. One integration philosophy.' },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function SmoothScrollCinematic() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const rafRef = useRef(null);
  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const lastFrameRef = useRef(0);
  const lastSeekRef = useRef(0);
  const initializedRef = useRef(false);
  const activeChapterRef = useRef(0);
  const calloutStageRef = useRef(0);
  const scrolledRef = useRef(false);

  const [activeChapter, setActiveChapter] = useState(0);
  const [calloutStage, setCalloutStage] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mediaFailed, setMediaFailed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener?.('change', sync);
    return () => media.removeEventListener?.('change', sync);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video || reducedMotion || mediaFailed) return;

    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const response = coarsePointer ? 9 : 12;
    const minSeekInterval = coarsePointer ? 48 : 36;

    const updateUi = (value) => {
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${value.toFixed(4)})`;
      }

      const found = chapters.findIndex((item) => value >= item.start && value < item.end);
      const chapter = found < 0 ? chapters.length - 1 : found;
      if (chapter !== activeChapterRef.current) {
        activeChapterRef.current = chapter;
        setActiveChapter(chapter);
      }

      const securityProgress = clamp((value - 0.58) / 0.26, 0, 1);
      const stage = securityProgress > 0.62 ? 3 : securityProgress > 0.35 ? 2 : securityProgress > 0.08 ? 1 : 0;
      if (stage !== calloutStageRef.current) {
        calloutStageRef.current = stage;
        setCalloutStage(stage);
      }

      const hasScrolled = value > 0.08;
      if (hasScrolled !== scrolledRef.current) {
        scrolledRef.current = hasScrolled;
        setScrolled(hasScrolled);
      }
    };

    const seek = (value, now, force = false) => {
      if (video.readyState < 1 || !Number.isFinite(video.duration) || video.duration <= 0) return;
      const time = clamp(value * video.duration, 0, Math.max(video.duration - 0.04, 0));
      if (!force && now - lastSeekRef.current < minSeekInterval) return;
      if (!force && Math.abs(video.currentTime - time) < 0.02) return;
      try {
        video.currentTime = time;
        lastSeekRef.current = now;
      } catch (_) {}
    };

    const tick = (now) => {
      const previous = lastFrameRef.current || now;
      const dt = Math.min(Math.max((now - previous) / 1000, 0), 0.05);
      lastFrameRef.current = now;

      const target = targetProgressRef.current;
      let current = smoothProgressRef.current;
      const alpha = 1 - Math.exp(-response * dt);
      current += (target - current) * alpha;
      if (Math.abs(target - current) < 0.0002) current = target;
      smoothProgressRef.current = current;

      updateUi(current);
      seek(current, now);

      if (Math.abs(target - current) >= 0.0002) {
        rafRef.current = window.requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
        seek(current, now, true);
      }
    };

    const startTick = () => {
      if (rafRef.current) return;
      lastFrameRef.current = performance.now();
      rafRef.current = window.requestAnimationFrame(tick);
    };

    const measure = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const next = clamp(clamp(-rect.top, 0, scrollable) / scrollable, 0, 1);
      targetProgressRef.current = next;

      if (!initializedRef.current) {
        initializedRef.current = true;
        smoothProgressRef.current = next;
        updateUi(next);
        seek(next, performance.now(), true);
      } else {
        startTick();
      }
    };

    video.pause();
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure, { passive: true });

    return () => {
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      initializedRef.current = false;
    };
  }, [reducedMotion, ready, mediaFailed]);

  const showStaticFallback = reducedMotion || mediaFailed;

  return (
    <section ref={sectionRef} className={`cinematic ${reducedMotion ? 'cinematic--reduced' : ''}`} aria-label="TTT vehicle technology experience">
      <div className="cinematic__sticky">
        {showStaticFallback ? (
          <img
            className="cinematic__video is-ready"
            src={homepageCinematic.fallback}
            alt=""
            aria-hidden="true"
            decoding="async"
          />
        ) : (
          <video
            ref={videoRef}
            className={`cinematic__video ${ready ? 'is-ready' : ''}`}
            src={homepageCinematic.video}
            poster={homepageCinematic.poster}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
            style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
            onLoadedMetadata={(event) => {
              event.currentTarget.pause();
              const value = smoothProgressRef.current;
              if (Number.isFinite(event.currentTarget.duration) && event.currentTarget.duration > 0) {
                try {
                  event.currentTarget.currentTime = clamp(value * event.currentTarget.duration, 0, Math.max(event.currentTarget.duration - 0.04, 0));
                } catch (_) {}
              }
              setReady(true);
            }}
            onError={() => {
              setMediaFailed(true);
              setReady(true);
            }}
          />
        )}
        <div className="cinematic__shade cinematic__shade--left" />
        <div className="cinematic__shade cinematic__shade--top" />
        <div className="cinematic__shade cinematic__shade--bottom" />

        <div className="cinematic__content shell">
          {chapters.map((item, index) => (
            <div className={`cinematic__chapter cinematic__chapter--${item.key} ${index === activeChapter ? 'is-active' : ''}`} key={item.key} aria-hidden={index !== activeChapter}>
              {item.key === 'ecosystem' ? <img className="cinematic__logo" src={brandAssets.logo} alt="Thompson Transportation Technologies" width="480" height="228" decoding="async" /> : null}
              <p className="cinematic__kicker">{item.kicker}</p>
              <h1>{item.title}</h1>
              <p className="cinematic__body">{item.body}</p>
              {item.key === 'security' ? <div className="cinematic__callouts" aria-label="Vehicle security capabilities"><span className={calloutStage >= 1 ? 'is-on' : ''}>GPS Tracking</span><span className={calloutStage >= 2 ? 'is-on' : ''}>Layered Protection</span><span className={calloutStage >= 3 ? 'is-on' : ''}>Security Control</span></div> : null}
              {item.key === 'ecosystem' ? <div className="cinematic__actions"><Link className="button" href="/start">Start a project →</Link><Link className="button button--ghost-dark" href="/solutions">Explore solutions</Link></div> : null}
            </div>
          ))}
        </div>

        <div className={`cinematic__scroll-hint ${scrolled ? 'is-hidden' : ''}`}><span>Scroll to explore</span><b>↓</b></div>
        <div className="cinematic__rail" aria-hidden="true">{chapters.map((item, index) => <span key={item.key} className={index === activeChapter ? 'is-active' : ''}>0{index + 1}</span>)}</div>
        <div className="cinematic__progress" aria-hidden="true"><span ref={progressBarRef} /></div>
      </div>
    </section>
  );
}
