'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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

export default function ScrollCinematic() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(-1);
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

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
    if (!section || !video || reducedMotion) return;

    const update = () => {
      rafRef.current = null;
      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1);
      const nextProgress = clamp(clamp(-rect.top, 0, scrollable) / scrollable, 0, 1);
      setProgress(nextProgress);
      const nextChapter = chapters.findIndex((item) => nextProgress >= item.start && nextProgress < item.end);
      setActiveChapter(nextChapter < 0 ? chapters.length - 1 : nextChapter);

      if (video.readyState >= 1 && Number.isFinite(video.duration) && video.duration > 0) {
        const target = clamp(nextProgress * video.duration, 0, Math.max(video.duration - 0.04, 0));
        if (Math.abs(target - lastTimeRef.current) > 0.035) {
          try {
            video.currentTime = target;
            lastTimeRef.current = target;
          } catch (_) {}
        }
      }
    };

    const requestUpdate = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    video.pause();
    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  const securityProgress = clamp((progress - 0.58) / 0.26, 0, 1);

  return (
    <section ref={sectionRef} className={`cinematic ${reducedMotion ? 'cinematic--reduced' : ''}`} aria-label="TTT vehicle technology experience">
      <div className="cinematic__sticky">
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
          onLoadedMetadata={(event) => { event.currentTarget.pause(); setReady(true); }}
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
