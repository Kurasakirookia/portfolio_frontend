import { useEffect, useState } from "react";
import axios from "axios";
import "../css/HomePage.css";
export default function SkillsSection() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/home/skills")
      .then(res => setSkills(res.data))
      .catch(err => console.error("Error fetching skills:", err));
  }, []);

  return (
    <div id="skill_container">
      {skills.map((skill, skillIndex) => (
        <div className="exprience_intro" id={skill.skillName.toLowerCase().replace(/\s+/g, "_")} key={skillIndex}>
          <h2 className="texth">{skill.skillName}</h2>
          <div className="experience_container">
            {skill.tools.map((tool, toolIndex) => (
              <div className={`company company${toolIndex}`} key={toolIndex}>
                <img src={`http://localhost:5000${tool.logoSrc}`} alt={tool.logoSrc} className="logoicon" />
                <div className="company_details">
                  <span className="company_name textm">{tool.name}</span>
                  <p className="texts tenur texts">
                    {tool.role && <b>{tool.role}</b>} &emsp;
                    {tool.level && <b>{tool.level}</b>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

