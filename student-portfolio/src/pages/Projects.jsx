function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive student portfolio built with React and Vite.",
    },
    {
      title: "GitHub Repository Viewer",
      description: "A future project that will display repositories from GitHub.",
    },
  ];

  return (
    <div className="page">
      <section className="card">
        <h2>Projects</h2>
        <p className="page__text">
          This page is ready for the next practical where GitHub repositories can be fetched.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;