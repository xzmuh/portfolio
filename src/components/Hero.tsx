import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const HERO_STREAM_URL = 'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HERO_STREAM_URL;
      return;
    }

    if (!Hls.isSupported()) return;

    const hls = new Hls({ enableWorker: false });
    hls.loadSource(HERO_STREAM_URL);
    hls.attachMedia(video);

    return () => hls.destroy();
  }, []);

  return (
    <section className="hero" id="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-video-wash" aria-hidden="true" />
      <div className="hero-side-gradient" aria-hidden="true" />
      <div className="hero-bottom-gradient" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <svg className="hero-glow" viewBox="0 0 920 220" aria-hidden="true">
        <defs>
          <filter id="heroGlowBlur" x="-10%" y="-60%" width="120%" height="220%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>
        <ellipse cx="460" cy="92" rx="360" ry="42" fill="rgba(94, 210, 156, 0.35)" filter="url(#heroGlowBlur)" />
        <ellipse cx="460" cy="102" rx="270" ry="24" fill="rgba(12, 75, 59, 0.62)" filter="url(#heroGlowBlur)" />
      </svg>

      <div className="hero-content">
        <p className="hero-eyebrow animate-fade-in" style={{ animationDelay: '0.22s' }}>
          Full Stack Developer
        </p>
        <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.34s' }}>
          DA IDEIA AO
          PRODUTO DIGITAL<span>.</span>
        </h1>
        <p className="hero-desc animate-fade-in" style={{ animationDelay: '0.46s' }}>
          Desenvolvimento de sites e sistemas eficientes, bem estruturados e preparados para crescer junto com o negócio.
        </p>
      </div>
    </section>
  );
}
