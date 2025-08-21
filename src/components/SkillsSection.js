import { useEffect, useState } from "react";
import API from "../utils/api";
import "../css/HomePage.css";
export default function SkillsSection() {
  
  const API_URL = process.env.REACT_APP_API_URL;
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    API.get("/api/home/skills")
      .then(res => setSkills(res.data))
      .catch(err => console.error("Error fetching skills:", err));
  }, []);

  return (
    <div id="skill_container">
      {skills.map((skill, skillIndex) => (
        <div className="exprience_intro skill_intro" id={skill.skillName.toLowerCase().replace(/\s+/g, "_")} key={skillIndex}>
          <h2 className="texth">{skill.skillName}</h2>
          <div className="experience_container skill_container skill_inner_container">
            {skill.tools.map((tool, toolIndex) => (
              <div className={`company company${toolIndex} skill skill${toolIndex}`} key={toolIndex}>
                <img src={`${API_URL}${tool.logoSrc}`} alt={tool.logoSrc} className="logoicon" />
                <div className="company_details skill_details">
                  <span className="company_name skill_name textm">{tool.name}</span>
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

