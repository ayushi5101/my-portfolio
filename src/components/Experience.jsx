
import { useState } from "react";

const experienceData = {
  technical: [
    {
      role: "Computer Instructor",
      company: "LogicFusion Limited",
      location: "Markham, ON",
      date: "Aug 2026 – Present",
      points: [
        "Delivered interactive programming and STEM lessons.",
        "Taught variables, loops, functions, and object-oriented programming.",
        "Helped students troubleshoot coding projects."
      ]
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Enlightened Infosystems",
      location: "India",
      date: "Jan 2023 – May 2023",
      points: [
        "Developed and tested features for Java-based web applications.",
        "Debugged software issues and improved application stability.",
        "Designed SQL queries using MySQL and phpMyAdmin.",
        "Collaborated with developers on application enhancements."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Adept Digitals Private Limited",
      location: "India",
      date: "Jun 2022 – Jul 2022",
      points: [
        "Built responsive websites using HTML, CSS, JavaScript, and Bootstrap.",
        "Troubleshot UI issues and improved user experience.",
        "Translated design requirements into user-friendly interfaces."
      ]
    }
  ],

  professional: [
    {
      role: "Peer Mentor",
      company: "Centennial College",
      location: "Toronto, ON",
      date: "Jan 2026 – Apr 2026",
      points: [
        "Provided one-on-one mentorship to students.",
        "Supported student engagement and career readiness initiatives.",
        "Developed communication, teamwork, and leadership skills."
      ]
    },
    {
      role: "Peer Supporter",
      company: "Centennial College",
      location: "Toronto, ON",
      date: "Jan 2025 – Dec 2025",
      points: [
        "Organized student wellness and accessibility workshops.",
        "Provided peer support and campus resource referrals."
      ]
    },
    {
      role: "Customer Service Associate",
      company: "Subway Restaurants",
      location: "Scarborough, ON",
      date: "Jun 2025 – Oct 2026",
      points: [
        "Delivered customer service in a fast-paced environment.",
        "Resolved customer concerns and supported daily operations.",
        "Monitored inventory and maintained product organization."
      ]
    }
  ],

  leadership: [
    {
      role: "Open House Volunteer",
      company: "Centennial College",
      location: "Toronto, ON",
      date: "Jan 2025 – Jan 2026",
      points: [
        "Welcomed prospective students and families.",
        "Provided directions and information about campus resources."
      ]
    },
    {
      role: "Program Volunteer",
      company: "Community of Law Society",
      location: "Toronto, ON",
      date: "Dec 2024 – Feb 2025",
      points: [
        "Assisted with visitor management and ticket checking.",
        "Supported food distribution activities."
      ]
    },
    {
      role: "Hackathon Competitor",
      company: "Centennial College",
      location: "Toronto, ON",
      date: "Oct 2024",
      points: [
        "Developed an application idea and user interface mockup.",
        "Presented the solution to judges under tight deadlines."
      ]
    },
  ]
};

function Experience() {
  const [activeTab, setActiveTab] = useState("technical");

  const tabs = [
    { id: "technical", label: "Technical Experience" },
    { id: "professional", label: "Professional Experience" },
    { id: "leadership", label: "Leadership & Activities" }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        <p className="experience-label">MY CAREER JOURNEY</p>

        <h2 className="experience-heading">
          Professional <span>Experience</span>
        </h2>

        <div className="experience-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`experience-tab ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="experience-timeline">
          {experienceData[activeTab].map((job, index) => (
            <article className="experience-card" key={index}>
              <p className="experience-date">{job.date}</p>

              <h3>{job.role}</h3>

              <p className="experience-company">
                {job.company} | {job.location}
              </p>

              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
