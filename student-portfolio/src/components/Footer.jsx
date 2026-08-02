function Footer({ copyright }) {
  return (
    <footer className="footer">
      {/* Footer keeps the closing note simple and readable. */}
      <p>{copyright}</p>
      <p>Built using React + Vite</p>
    </footer>
  );
}

export default Footer;
