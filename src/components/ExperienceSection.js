import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ExperienceSection = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/home/experiences")
      .then((res) => {
        setExperience(res.data); // assuming backend sends an array of experiences
      })
      .catch((err) => {
        console.error("Error fetching experiences:", err);
      });
  }, []);

  return (
    <div className="exprience_intro">
      <h2 className="texth">Experience</h2>
      <div className="experience_container">
        {experience.map((company, index) => (
          <div className={`company company${index}`} key={company._id || index}>
            <img
              src={`http://localhost:5000${company.logoSrc}`}
              alt={company.logoSrc}
              className="logoicon"
            />
            <div className="company_details">
              <Link
                className="company_name textm"
                to="scrollComponent"
              >
                {company.companyName}
              </Link>
              <p className="texts tenur ">
                <b>{company.role}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
