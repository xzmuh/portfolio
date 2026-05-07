export default function About() {
  const profileImage = `${import.meta.env.BASE_URL}img/me.jpeg`;

  return (
    <section className="section" id="about">
      <div className="about-grid">
        <div className="about-image-wrapper glass-card">
          <div className="about-image-inner">
            <img
              alt="Murilo Gonzales Trigo"
              className="about-image"
              src={profileImage}
            />
          </div>
        </div>
        <div>
          <h2 className="about-title">
            Sobre Mim
            <span className="title-line"></span>
          </h2>
          <div className="about-text">
            <p style={{ marginBottom: '1rem' }}>
              Sou o Murilo, Desenvolvedor Full Stack com 5 anos de experiência, focado em desenvolver sistemas web eficientes, bem estruturados e preparados para crescer junto com o negócio.
            </p>
            <p>
              Ao longo da minha trajetória profissional, trabalhei principalmente com soluções para a área tributária e sistemas ERP. Mesmo atuando com foco em tecnologia e engenharia de software, essa vivência me ajudou a lidar com regras de negócio complexas e a transformar essas regras em sistemas seguros, eficientes e usados por clientes de grande porte.
            </p>
          </div>
          <div className="about-stats">
            <div className="about-stat-card glass-card">
              <h4 className="about-stat-value text-primary">5+</h4>
              <p className="about-stat-label text-on-surface-variant">Anos desenvolvendo sistemas</p>
            </div>

            <div className="about-stat-card glass-card">
              <h4 className="about-stat-value text-tertiary">Web</h4>
              <p className="about-stat-label text-on-surface-variant">Sites e sistemas responsivos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
