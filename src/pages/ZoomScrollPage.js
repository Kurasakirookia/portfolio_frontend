
import React, { useEffect, useState } from "react";
import "../css/ZoomScrollPage.css";
import graphic from "../assests/gprahics_0.png";

// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import axios from "axios";



const ZoomScrollPage = () => {
 
 const [scale, setScale] = useState(1.5);
  const [graphics, setGraphics] = useState([]);
  const navigate = useNavigate();

  // Fetch graphics from backend
  useEffect(() => {
    const fetchGraphics = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home/graphics");
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
                <img src={graphic} alt="Tejas" className="zoom-image" />
                
            </section>
            
            </div>
            
    
            <div className="gallery-container">
        {graphics.slice(0).map((item, idx) => (
          <img
            key={idx}
            src={`http://localhost:5000${item.imageSrc}`}
            alt={item.name}
            className="gallery-img"
            onClick={() => handleClick(`http://localhost:5000${item.imageSrc}`, idx)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
            {/* </Link> */}
    </div>
    
  );
};

export default ZoomScrollPage;
