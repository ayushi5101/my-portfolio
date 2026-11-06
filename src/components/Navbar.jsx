
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

      <a href="#contact" className="resume-btn">
        Resume
      </a>
    </header>
  );
}

export default Navbar;
