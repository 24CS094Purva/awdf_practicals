function About({ intro }) {
  return (
    <section className="section">
      {/* The About section keeps the introduction in one readable card. */}
      <div className="card">
        <h2>About Me</h2>
        <p>{intro}</p>
      </div>
    </section>
  );
}

export default About;
