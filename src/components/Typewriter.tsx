import React, { useState, useEffect, useRef } from 'react';

// Base64‑encoded short click sound (you can replace with your own file)
const CLICK_SOUND_DATA_URI =
  'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=';

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, className }) => {
  const [displayed, setDisplayed] = useState('');
  const indexRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // create audio element once
    audioRef.current = new Audio(CLICK_SOUND_DATA_URI);
    audioRef.current.volume = 0.5;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        const nextChar = text.charAt(indexRef.current);
        setDisplayed((prev) => prev + nextChar);
        // play click for visible characters (skip spaces for a cleaner sound)
        if (nextChar !== ' ' && audioRef.current) {
          // clone to allow overlapping clicks
          const sound = audioRef.current.cloneNode() as HTMLAudioElement;
          sound.play();
        }
        indexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className} aria-label={text}>
      {displayed}
      <span className="typewriter-cursor" />
    </span>
  );
};

export default Typewriter;
