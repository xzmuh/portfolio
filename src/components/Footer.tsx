import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-surface-container-lowest border-t">
      <div className="footer-container max-w-6xl mx-auto">
        <div className="footer-brand font-display font-bold text-primary">MGT.</div>
        <div className="footer-copy font-body text-on-surface-variant">
          © 2026 Murilo Gonzales Trigo
        </div>
        <div className="footer-links">
          <a className="footer-link text-on-surface-variant" href="https://www.linkedin.com/in/murilo-trigo-6205b3190/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="footer-link text-on-surface-variant" href="https://github.com/xzmuh" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
