import AboutSection from "../components/About";

function About({ introText }) {
  return (
    <div className="page">
      {/* The About page reuses the same About component and text. */}
      <AboutSection intro={introText} />
    </div>
  );
}

export default About;