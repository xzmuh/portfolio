import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card glass-card">
        <div className="contact-copy">
          <span className="contact-kicker text-primary">Contato</span>
          <h2 className="contact-title text-on-surface">Vamos conversar?</h2>
          <p className="contact-desc text-on-surface-variant">
            Se voce tem um projeto, uma oportunidade ou uma ideia que precisa sair do papel, me chame por aqui.
          </p>
        </div>

        <div className="contact-panel">
          <div className="contact-info">
            <a className="contact-item" href="mailto:murilo_agudos@hotmail.com">
              <span className="material-symbols-outlined contact-icon">mail</span>
              <span>
                <small>Email</small>
                <strong>murilo_agudos@hotmail.com</strong>
              </span>
            </a>
            <a className="contact-item" href="tel:+5514981647336">
              <span className="material-symbols-outlined contact-icon">call</span>
              <span>
                <small>Telefone</small>
                <strong>(14) 98164-7336</strong>
              </span>
            </a>
          </div>

          <div className="contact-actions">
            <a className="btn-send bg-primary text-on-primary" href="mailto:murilo_agudos@hotmail.com">
              Enviar email
              <span className="material-symbols-outlined link-icon">arrow_forward</span>
            </a>
            <a className="contact-muted-link" href="https://github.com/xzmuh" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="contact-muted-link" href="https://www.linkedin.com/in/murilo-trigo-6205b3190/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
