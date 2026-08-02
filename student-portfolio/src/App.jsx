import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  // All shared data stays here so the pages remain simple and reusable.
  const portfolioName = "Purvaa";
  const roleText = "Computer Science Engineering Student";
  const learningText = "Learning React & Full Stack Development";
  const introText =
    "I am a Computer Science Engineering student passionate about web development and modern JavaScript technologies. I enjoy building responsive web applications and continuously improving my frontend development skills.";
  const skillList = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "C++"];

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header name={portfolioName} role={roleText} learning={learningText} />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home introText={introText} skills={skillList} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer copyright="© 2026 Purvaa" />
      </div>
    </BrowserRouter>
  );
}

export default App;