function Skills({ skills }) {
  return (
    <section className="section">
      {/* Skills are shown as badges so the layout stays modern and clean. */}
      <div className="card">
        <h2>Skills</h2>
        <div className="skills__list">
          {skills.map((skill) => (
            <span className="skill-badge" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
