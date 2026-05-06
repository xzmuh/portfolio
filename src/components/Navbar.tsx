import type { MouseEvent } from 'react';

export default function Navbar() {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetRect = targetElement.getBoundingClientRect();
      const targetTop = targetRect.top + window.scrollY;
      const centeredPosition = targetTop - (window.innerHeight - targetRect.height) / 2;
      const targetPosition = Math.max(centeredPosition, 0);
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 600; // not too slow, not too fast
      let start: number | null = null;

      const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <nav className="navbar glass-card">
      <div className="nav-brand">MGT.</div>
      <div className="nav-links">
        <a className="nav-link" href="#about" onClick={(e) => handleScroll(e, 'about')}>Sobre</a>
        <a className="nav-link" href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Jornada</a>
        <a className="nav-link" href="#stack" onClick={(e) => handleScroll(e, 'stack')}>Tecnologias</a>
        <a className="nav-link" href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projetos</a>
      </div>
      <a className="btn-primary" href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contato</a>
    </nav>
  );
}
