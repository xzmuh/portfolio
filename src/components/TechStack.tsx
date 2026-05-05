export default function TechStack() {
  const technologies = [
    { name: 'PHP 8.x', icon: 'php', color: 'var(--color-primary)' },
    { name: 'Node.js', icon: 'nest_eco_shell', color: '#339933' },
    { name: 'React', icon: 'rebase_edit', color: '#61DAFB' },
    { name: 'NestJS', icon: 'settings_heart', color: '#E0234E' },
    { name: 'AWS', icon: 'cloud_queue', color: '#FF9900' },
    { name: 'PostgreSQL', icon: 'database', color: '#336791' },
    { name: 'Go', icon: 'terminal', color: '#00ADD8' },
    { name: 'Tailwind', icon: 'palette', color: '#38B2AC' },
    { name: 'TypeScript', icon: 'data_object', color: 'var(--color-primary)' },
    { name: 'Redis', icon: 'rocket_launch', color: 'var(--color-tertiary)' },
  ];

  return (
    <section className="stack-section" id="stack">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="stack-title text-on-surface">Stack</h2>
        <p className="text-on-surface-variant">
          Algumas das tecnologias que uso para desenvolver projetos web.
        </p>
      </div>
      <div className="stack-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="stack-item glass-card">
            <div className="stack-icon-wrapper">
              <span className="material-symbols-outlined" style={{ color: tech.color }}>
                {tech.icon}
              </span>
            </div>
            <span className="stack-label text-on-surface">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
