import { useState } from "react";
import About from "../components/About";
import Skills from "../components/Skills";

function Home({ introText, skills }) {
  const [showSkills, setShowSkills] = useState(true);

  return (
    <div className="page">
      {/* Home combines the About and Skills sections in one place. */}
      <section className="card page__intro">
        <h2>Welcome</h2>
        <p>This is my student portfolio built with React and Vite.</p>
        <button
          className="section-toggle"
          type="button"
          onClick={() => setShowSkills((currentValue) => !currentValue)}
        >
          {showSkills ? "Hide Skills" : "Show Skills"}
        </button>
      </section>

      <About intro={introText} />

      {showSkills ? <Skills skills={skills} /> : <p className="page__text">Skills are hidden for now.</p>}
    </div>
  );
}

export default Home;