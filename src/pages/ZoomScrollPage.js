
import React, { useEffect, useState } from "react";
import "../css/ZoomScrollPage.css";
import graphic from "../assests/gprahics_0.png";
import graphicMobile from "../assests/graphicMobile.png"
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import API from "../utils/api";



const ZoomScrollPage = () => {
 const API_URL = process.env.REACT_APP_API_URL;
 const [scale, setScale] = useState(1.5);
  const [graphics, setGraphics] = useState([]);
  const navigate = useNavigate();

  // Fetch graphics from backend
  useEffect(() => {
    const fetchGraphics = async () => {
      try {
        const res = await API.get("/api/home/graphics");
        setGraphics(res.data); // Assuming res.data is an array of { name, imageSrc }
      } catch (err) {
        console.error("Error fetching graphics:", err);
      }
    };
    fetchGraphics();
  }, []);

  const handleClick = (src, index) => {
    navigate("/GraphicDetails", {
      state: { src, index },
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300;
      const newScale = Math.max(1, 1.5 - scrollTop / maxScroll);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (

    <div className="page_container">
            <div className="zoom-page">
            <section
                className="zoom-section"
                style={{ transform: `scale(${scale})` }}
            >
                <picture>
                  {/* Mobile first (max-width: 768px) */}
                  <source media="(max-width: 768px)" srcSet={graphicMobile} className="zoom-image" />
                  
                  {/* Default / Desktop */}
                  <img src={graphic} alt='Tejas' className="zoom-image" />
                </picture>
                
            </section>
            
            </div>
            
    
            <div className="gallery-container">
        {graphics.slice(0).map((item, idx) => (
          <img
            key={idx}
            src={`${API_URL}${item.imageSrc}`}
            alt={item.name}
            className="gallery-img"
            onClick={() => handleClick(`${API_URL}${item.imageSrc}`, idx)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
            {/* </Link> */}
    </div>
    
  );
};

export default ZoomScrollPage;
