import React, { useState, useEffect } from 'react';
import "../css/Project.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home/projects");
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);
  
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="projects_container2">
      <div className="project_container">
        <div className="search_container">
          <input
            type="text"
            placeholder="Search projects by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search_input"
          />
        </div>
        <div className="projects">
          <div className="cards_container">
            {filteredProjects.map((project, index) => (
              <div key={index} className="project_card">
                <Link
                  className="project_image"
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`http://localhost:5000${project.img}`}
                    alt="project img"
                  />
                </Link>
                <div className="card_0">
                  <div className="title_n_arrow">
                    <h3 className="textp title">{project.title}</h3>
                  </div>
                  <p className="textp description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;