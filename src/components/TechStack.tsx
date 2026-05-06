export default function TechStack() {
  const technologies = [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  ];

  return (
    <section className="stack-section" id="stack">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="stack-title text-on-surface">Stack Atual</h2>
        <p className="text-on-surface-variant">
          Algumas das tecnologias que uso em meus projetos.
        </p>
      </div>
      <div className="stack-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="stack-item glass-card">
            <div className="stack-icon-wrapper">
              <img className="stack-logo" src={tech.logo} alt={`${tech.name} logo`} loading="lazy" />
            </div>
            <span className="stack-label text-on-surface">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
