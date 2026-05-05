export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-1"></div>
      <div className="hero-bg-2"></div>
      <div className="hero-content">
        <div className="hero-badge glass-card">
          Murilo G. Trigo
        </div>
        <h1 className="hero-title">
          Desenvolvedor<br />
          <span className="text-primary text-glow">Full Stack</span>
        </h1>

        <p className="hero-desc">
          Desenvolvo sistemas web e sites, bem estruturados e com design moderno, focado em resolver problemas reais de negócio.
        </p>
        <div className="hero-stats">
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
