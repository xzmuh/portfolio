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
          <a className="footer-link text-on-surface-variant" href="#">LinkedIn</a>
          <a className="footer-link text-on-surface-variant" href="#">GitHub</a>
          <a className="footer-link text-on-surface-variant" href="#">Currículo</a>
        </div>
      </div>
    </footer>
  );
}
