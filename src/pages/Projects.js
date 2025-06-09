import React, { useState } from 'react';
import "../css/Project.css";
import projects from "../data/projects.json";
import card from "../assests/Group 1 (2).svg"
import { Link } from 'react-router-dom';
import arrow from "../assests/arrow.png"

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects_container2">
        <div className='project_container'>
          <div className="search_container">
            <input
              type="textpp"
              placeholder="Search projects by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search_input"
            />
          </div>

          <div className="projects">
            <div className="cards_container">
                {filteredProjects.map((project, index) => (
                  <div key={index} className="project_card"  style={{backgroundImage: `url(${card})`}}>
                                    <div className="card_0">
                                        <div className="title_n_arrow">
                                            <h3 className="textp title">{project.title}</h3>

                                            <Link to="/projects" id='arrow_link'>
                                                <div className="arrow_container">
                                                    <img src={arrow} alt="a" className='arrow_img'/>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        <p className="textp desciption">{project.description}</p>
                                        <img src={project.img} alt={`${project.title} img`} id='project_img'/>
                                        
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
