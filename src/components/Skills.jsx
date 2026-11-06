
const skillCategories = [
  {
    title: "Programming & Scripting",
    skills: [
      "Java", "JavaScript", "C#", "Python",
      "Bash", "PowerShell"
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      "HTML", "CSS", "React",
      "Bootstrap", "jQuery"
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js", "REST APIs", "JSON",
      "XML", "API Authentication",
      "HTTP GET/POST"
    ]
  },
  {
    title: "Database Management",
    skills: [
      "MySQL", "Oracle", "phpMyAdmin"
    ]
  },
  {
    title: "DevOps & Development Tools",
    skills: [
      "Git", "GitHub", "CI/CD Pipelines",
      "VS Code", "IntelliJ IDEA",
      "Eclipse", "XAMPP", "JavaFX"
    ]
  },
  {
    title: "Software Engineering & Networking",
    skills: [
      "Agile", "SDLC", "Jira",
      "TCP/IP", "DNS", "DHCP",
      "Network Troubleshooting", "Figma"
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <h2>
          Technical <span>Skills</span>
        </h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div
              className="skill-card"
              key={category.title}
            >
              <h3>{category.title}</h3>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
