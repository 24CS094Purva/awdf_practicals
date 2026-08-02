function Header({ name, role, learning }) {
  return (
    <header className="hero">
      {/* Hero content introduces the portfolio owner clearly. */}
      <div className="hero__content">
        <p className="hero__eyebrow">Student Portfolio</p>
        <h1>{name}</h1>
        <p className="hero__role">{role}</p>
        <p className="hero__learning">{learning}</p>
      </div>
    </header>
  );
}

export default Header;
