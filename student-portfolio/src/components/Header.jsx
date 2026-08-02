import { NavLink } from "react-router-dom";

function Header({ name, role, learning }) {
  // NavLink helps highlight the active page without extra logic.
  const linkClassName = ({ isActive }) =>
    isActive ? "nav__link nav__link--active" : "nav__link";

  return (
    <header className="site-header">
      {/* Top navigation stays simple and responsive with flexbox. */}
      <div className="site-header__bar">
        <div className="brand">
          <p className="brand__title">Student Portfolio</p>
          <p className="brand__subtitle">React + Vite</p>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <NavLink to="/" className={linkClassName}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClassName}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClassName}>
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Hero section introduces the portfolio owner clearly. */}
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Professional Portfolio</p>
          <h1>{name}</h1>
          <p className="hero__role">{role}</p>
          <p className="hero__learning">{learning}</p>
        </div>
      </section>
    </header>
  );
}

export default Header;
