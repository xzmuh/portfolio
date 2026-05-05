import { useRef } from 'react';
import './Projects.css';

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="section" id="projects">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="stack-title text-on-surface">Alguns Projetos</h2>
        <p className="text-on-surface-variant">
          Alguns projetos que desenvolvi para praticar ideias e evoluir. Alguns ainda estão incompletos, pois foram criados como experimentos ou estudos.
        </p>
        <br />
      </div>

      <div className="projects-carousel-wrapper">
        <button className="carousel-btn btn-left glass-card" onClick={() => scroll('left')}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <div className="projects-scroll-container" ref={scrollRef}>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card glass-card group">
              <div className="project-header">
                <div className="project-icon-wrapper text-primary bg-primary-10">
                  <span className="material-symbols-outlined project-icon">settings_input_component</span>
                </div>
              </div>
              <h4 className="project-name text-on-surface">Core do Motor de Cálculos</h4>
              <p className="project-desc text-on-surface-variant">
                Microsserviço de alta disponibilidade para orquestração e validação de cálculos estruturais em tempo real.
              </p>
              <a className="project-link text-primary group-hover" href="#">
                Ver Arquitetura <span className="material-symbols-outlined link-icon">arrow_forward</span>
              </a>
            </div>

            {/* Project 2 */}
            <div className="project-card glass-card group">
              <div className="project-header">
                <div className="project-icon-wrapper text-tertiary bg-tertiary-10">
                  <span className="material-symbols-outlined project-icon">grid_view</span>
                </div>
              </div>
              <h4 className="project-name text-on-surface">Matriz de Automação</h4>
              <p className="project-desc text-on-surface-variant">
                Construtor visual de fluxos de trabalho para automação de tarefas de ERP, integrando sistemas legados com APIs modernas.
              </p>
              <a className="project-link text-tertiary group-hover" href="#">
                Visão do Sistema <span className="material-symbols-outlined link-icon">arrow_forward</span>
              </a>
            </div>

            {/* Project 3 - Dummy to show scroll */}
            <div className="project-card glass-card group">
              <div className="project-header">
                <div className="project-icon-wrapper text-primary bg-primary-10">
                  <span className="material-symbols-outlined project-icon">api</span>
                </div>
              </div>
              <h4 className="project-name text-on-surface">API Gateway</h4>
              <p className="project-desc text-on-surface-variant">
                Ponto de entrada unificado para todos os serviços internos com rate limiting, caching e roteamento dinâmico.
              </p>
              <a className="project-link text-primary group-hover" href="#">
                Ver Código <span className="material-symbols-outlined link-icon">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        <button className="carousel-btn btn-right glass-card" onClick={() => scroll('right')}>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </section>
  );
}
