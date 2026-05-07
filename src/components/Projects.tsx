import { useRef } from 'react';
import './Projects.css';

type Project = {
  name: string;
  description: string;
  language: string;
  repoUrl: string;
  liveUrl?: string;
  icon: string;
  tone: 'primary' | 'tertiary';
};

const pinnedProjects: Project[] = [
  {
    name: 'bot-automacao-cadastro',
    description: 'Bot em Python para testar automacao de cadastro e fluxos repetitivos.',
    language: 'Python',
    repoUrl: 'https://github.com/xzmuh/bot-automacao-cadastro',
    icon: 'smart_toy',
    tone: 'primary',
  },
  {
    name: 'Tecnoglass',
    description: 'Site institucional para a Tecnoglass Brasil, com foco em presenca digital e apresentacao da marca.',
    language: 'HTML',
    repoUrl: 'https://github.com/xzmuh/Tecnoglass',
    liveUrl: 'https://tecnoglassbrasil.com.br',
    icon: 'language',
    tone: 'tertiary',
  },
  {
    name: 'mini-chat-ia',
    description: 'Backend em TypeScript para um mini chat com IA, estruturado para conversas e integracao com servicos.',
    language: 'TypeScript',
    repoUrl: 'https://github.com/xzmuh/mini-chat-ia',
    icon: 'psychology',
    tone: 'primary',
  },
  {
    name: 'mini-chat-ia-front',
    description: 'Interface em TypeScript para o mini chat com IA, conectando experiencia de usuario e conversa em tempo real.',
    language: 'TypeScript',
    repoUrl: 'https://github.com/xzmuh/mini-chat-ia-front',
    icon: 'forum',
    tone: 'tertiary',
  },
  {
    name: 'User-crud-with-Jwt',
    description: 'CRUD de usuarios em PHP com autenticacao JWT e base para controle de acesso.',
    language: 'PHP',
    repoUrl: 'https://github.com/xzmuh/User-crud-with-Jwt',
    icon: 'admin_panel_settings',
    tone: 'primary',
  },
  {
    name: 'character-remove',
    description: 'Utilitario em JavaScript para remover caracteres especificos de textos de forma simples.',
    language: 'JavaScript',
    repoUrl: 'https://github.com/xzmuh/character-remove',
    icon: 'text_fields',
    tone: 'tertiary',
  },
];

const projectLoop = [...pinnedProjects, ...pinnedProjects];

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
        <h2 className="stack-title text-on-surface">Projetos em Destaque</h2>
        <p className="text-on-surface-variant">
          Estudos, testes e projetos em desenvolvimento usados para prática e evolução técnica.
        </p>
        <br />
      </div>

      <div className="projects-carousel-wrapper">
        <button className="carousel-btn btn-left glass-card" onClick={() => scroll('left')} aria-label="Projetos anteriores">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <div className="projects-scroll-container" ref={scrollRef}>
          <div className="projects-grid">
            {projectLoop.map((project, index) => {
              const isPrimary = project.tone === 'primary';
              const accentClass = isPrimary ? 'text-primary bg-primary-10' : 'text-tertiary bg-tertiary-10';
              const linkClass = isPrimary ? 'text-primary' : 'text-tertiary';

              return (
                <article key={`${project.name}-${index}`} className="project-card glass-card group">
                  <div className="project-header">
                    <div className={`project-icon-wrapper ${accentClass}`}>
                      <span className="material-symbols-outlined project-icon">{project.icon}</span>
                    </div>
                    <div className="project-tags">
                      <span className="project-tag">{project.language}</span>
                    </div>
                  </div>
                  <h4 className="project-name text-on-surface">{project.name}</h4>
                  <p className="project-desc text-on-surface-variant">{project.description}</p>
                  <div className="project-actions">
                    {project.liveUrl && (
                      <a className={`project-link ${linkClass} group-hover`} href={project.liveUrl} target="_blank" rel="noreferrer">
                        Ver Site <span className="material-symbols-outlined link-icon">open_in_new</span>
                      </a>
                    )}
                    <a className={`project-link ${linkClass} group-hover`} href={project.repoUrl} target="_blank" rel="noreferrer">
                      GitHub <span className="material-symbols-outlined link-icon">arrow_forward</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <button className="carousel-btn btn-right glass-card" onClick={() => scroll('right')} aria-label="Proximos projetos">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </section>
  );
}
