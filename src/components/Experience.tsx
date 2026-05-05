import './Experience.css';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="exp-title">
        Jornada Profissional
        <span className="exp-line"></span>
      </h2>
      <div className="exp-timeline">
        {/* Journey Item 1 */}
        <div className="exp-item group">
          <div className="exp-dot dot-primary"></div>
          <div className="exp-card glass-card">
            <span className="exp-date text-primary">2021 — 2026</span>
            <h3 className="exp-role text-on-surface">I-SINC</h3>
            <p className="exp-company text-tertiary">Desenvolvedor Full Stack</p>
            <ul className="exp-tasks">
              <li>
                <span className="material-symbols-outlined text-primary exp-icon">verified</span>
                Desenvolvimento e manutenção de sistemas ERP voltados para processos fiscais, tributários e operacionais.
              </li>
              <li>
                <span className="material-symbols-outlined text-primary exp-icon">verified</span>
                Implementação de rotinas para leitura, processamento e integração de documentos fiscais como NF-e e SPED.
              </li>
              <li>
                <span className="material-symbols-outlined text-primary exp-icon">verified</span>
                Criação de dashboards, relatórios gerenciais e consultas otimizadas para grandes volumes de dados.
              </li>
              <li>
                <span className="material-symbols-outlined text-primary exp-icon">verified</span>
                Desenvolvimento de APIs e processos internos.
              </li>
            </ul>
          </div>
        </div>
        {/* Journey Item 2 */}
        <div className="exp-item group">
          <div className="exp-dot dot-tertiary"></div>
          <div className="exp-card glass-card">
            <span className="exp-date text-tertiary">Atual</span>
            <h3 className="exp-role text-on-surface">Freelancer</h3>
            <p className="exp-company text-primary">Desenvolvedor Web</p>
            <p className="exp-desc text-on-surface-variant">
              Criação de sites responsivos para empresas, com foco em apresentação profissional, boa experiência de navegação e adaptação para diferentes dispositivos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
