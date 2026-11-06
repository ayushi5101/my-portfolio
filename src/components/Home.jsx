import developerImage from "../assets/developer.png";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* <span className="home-tag">
          SOFTWARE DEVELOPER
        </span> */}

        <h1>
          Hi, I'm <br />
          <span>Ayushi Parmar.</span>
        </h1>

        <p>
          I build responsive, user-friendly
          web applications and enjoy turning
          ideas into real-world solutions.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="home-image">
        <img
            src={developerImage}
            alt="Illustration of a female developer working on a laptop"
        />

        <span className="tech-badge react-badge">
            React
        </span>

        <span className="tech-badge java-badge">
            Java
        </span>

        <span className="tech-badge python-badge">
            Python
        </span>
      </div>

    </section>
  );
}

export default Home;
