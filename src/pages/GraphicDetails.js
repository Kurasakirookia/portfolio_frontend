import React from 'react'
import { useLocation } from 'react-router-dom';
import "../css/GraphicDetails.css"
import heart_red from "../assests/heart_red.png"
import heart_white from "../assests/heart_white.png"
import download from "../assests/download_fav.png"
import { useEffect } from 'react';


const GraphicDetails = () => {
   
      
    const location = useLocation();
    const { src, index } = location.state || {};
    const getImageName = (src) => {
        if (!src) return ""; // prevent crash
        return src.split("/").pop().split(".")[0]; // e.g., "graphic_3"
      };

      const changefav = (e) => {
        const currentSrc = e.target.src;
        if (currentSrc.includes("heart_white")) {
          e.target.src = heart_red;
        } else {
          e.target.src = heart_white;
        }
      };


      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
      
      const downloadImage = () => {
        const link = document.createElement("a");
        link.href = src; // `src` is your image source from location.state
        link.download = `${getImageName(src)}.png`; // name it cleanly
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
   
      
  return (
    
    <div className="detailsContainer">
         
        <div className="details">
        
           
            <div className="imgContainer">
                
                <img src={src} alt={`${src}_Image_${index}`} className='img' />
            </div>
            <div className="infoContainer">
                <h2 className='imgName'>{`${getImageName(src)}`}</h2>
                <div className="fav">
                    <p className="fav_text">Add to Favorite </p>
                    <img src={heart_white} alt="heart" className="fav_icon" 
                    onClick={changefav} style={{ cursor: "pointer"}}/>

                </div>
                <div className="fav">
                    <p className="fav_text">Download </p>
                    <img src={download} alt="download" className="fav_icon" 
                     onClick={downloadImage} style={{ cursor: "pointer"}}/>

                </div>

        
            </div>
        </div>
      
    </div>
  )
}

export default GraphicDetails
