
function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        &lt;/&gt; Ayushi Parmar
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        href="/Ayushi_Parmar_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
        >
        Resume
      </a>
    </header>
  );
}

export default Navbar;
