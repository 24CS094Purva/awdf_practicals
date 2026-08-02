import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  // All page data is stored here so the components stay simple and reusable.
  const portfolioName = "Purvaa";
  const roleText = "Computer Science Engineering Student";
  const learningText = "Learning React & Full Stack Development";
  const introText =
    "I am a Computer Science Engineering student passionate about web development and modern JavaScript technologies. I enjoy building responsive web applications and continuously improving my frontend development skills.";
  const skillList = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "C++"];
  const copyrightText = "© 2026 Purvaa";

  return (
    <main>
      <Header
        name={portfolioName}
        role={roleText}
        learning={learningText}
      />
      <About intro={introText} />
      <Skills skills={skillList} />
      <Footer copyright={copyrightText} />
    </main>
  );
}

export default App;