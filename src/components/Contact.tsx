import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card glass-card">
        <div className="contact-bg-1"></div>
        <div className="contact-bg-2"></div>

        <h2 className="contact-title text-on-surface">Entre em Contato</h2>
        <p className="contact-desc text-on-surface-variant">
          Vamos conversar sobre como podemos trabalhar juntos no seu projeto.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <span className="material-symbols-outlined text-primary contact-icon">mail</span>
            <a className="contact-link text-on-surface" href="mailto:murilo_agudos@hotmail.com">
              murilo_agudos@hotmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="material-symbols-outlined text-tertiary contact-icon">call</span>
            <p className="contact-link text-on-surface">(14) 98164-7336</p>
          </div>
        </div>

        <div className="contact-socials">
          <a className="social-btn glass-card" href="#">
            <span className="material-symbols-outlined">share</span>
          </a>
          <a className="social-btn glass-card" href="#">
            <span className="material-symbols-outlined">code</span>
          </a>
        </div>

        <div className="contact-actions">
          <button className="btn-send bg-primary text-on-primary">
            Enviar Mensagem
          </button>
        </div>
      </div>
    </section>
  );
}
