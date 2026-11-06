
const projects = [
  {
    id: 1,
    title: "GoLocal",
    subtitle: "Local Event Finder Platform",
    description:
      "A software engineering capstone project focused on helping users discover local events.",
    technologies: ["Capstone", "Web Application"],
    icon: "📍",
    // github: "",
    // demo: ""
  },
  {
    id: 2,
    title: "Student-Course Management System",
    subtitle: "Full-Stack Web Application",
    description:
      "A student enrollment management system featuring JWT authentication, CRUD operations, and GraphQL APIs.",
    technologies: [
      "React", "Node.js", "GraphQL",
      "MongoDB", "JWT"
    ],
    icon: "🎓",
    // github: "",
    // demo: ""
  },
  {
  id: 3,
  title: "Shopping Cart Web Application",
  subtitle: "Java-Based E-Commerce Website",
  description:
    "Developed a dynamic e-commerce web application that allows users to browse products, add items to a shopping cart, update quantities, remove products, and place orders. Implemented shopping cart functionality using Java and JSP with MySQL database integration.",
  technologies: [
    "Java",
    "JSP",
    "MySQL",
    "phpMyAdmin",
    "HTML/CSS"
  ],
  icon: "🛒",
//   github: "",
//   demo: ""
 }

];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p className="projects-intro">
          A selection of projects I've worked on.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-icon">
                <span aria-hidden="true">{project.icon}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {(project.github || project.demo) && (
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
