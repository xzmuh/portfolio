import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-1 animate-bg"></div>
      <div className="hero-bg-2 animate-bg"></div>
      <div className="hero-content">
        <div className="hero-badge glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Murilo G. Trigo
        </div>
        <div className="hero-title animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Typewriter text="Desenvolvedor" speed={100} className="block" />
          <br />
          <Typewriter text="Full Stack" speed={100} className="block text-primary text-glow" />
        </div>
        <p className="hero-desc animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Transformo ideias em sites e sistemas que ajudam empresas a parecerem mais profissionais, venderem melhor e simplificarem o dia a dia.
        </p>
        <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="stat-card glass-card">
            <span className="material-symbols-outlined text-primary stat-icon">terminal</span>
            <div className="stat-text">
              <p className="stat-label">Experiência</p>
              <p className="stat-value">5+ Anos</p>
            </div>
          </div>
          <div className="stat-card glass-card">
            <span className="material-symbols-outlined text-tertiary stat-icon">account_balance</span>
            <div className="stat-text">
              <p className="stat-label">Foco</p>
              <p className="stat-value">Sistemas Web</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
