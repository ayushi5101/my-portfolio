
const education = [
  {
    degree: "Software Engineering Technology – Advanced Diploma",
    institution: "Centennial College",
    location: "Toronto, ON",
    date: "Sept 2024 – Apr 2026",
    skills: [
      "Java", "C#", "SQL", "Web Development",
      "Data Structures", "Mobile Development",
      "Software Design", "AWS Fundamentals"
    ]
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Gujarat Technological University",
    location: "Gujarat, India",
    date: "Sept 2019 – June 2023",
    skills: []
  }
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <span className="section-tag">
          ACADEMIC BACKGROUND
        </span>

        <h2>
          My <span>Education</span>
        </h2>

        <div className="education-timeline">
          {education.map((item) => (
            <div className="education-card" key={item.degree}>
              <span className="education-date">
                {item.date}
              </span>

              <h3>{item.degree}</h3>

              <p>
                {item.institution} | {item.location}
              </p>

              {item.skills.length > 0 && (
                <div className="education-skills">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
