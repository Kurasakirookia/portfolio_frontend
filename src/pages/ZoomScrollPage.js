// import React, { useRef, useState, useEffect } from "react";
// import "../css/ZoomScrollPage.css";
// import TejasImage from "../assests/Tejas.png"; // adjust path

// const ZoomScrollPage = () => {
//   const zoomRef = useRef(null);
//   const [scale, setScale] = useState(1.5);
//   const [isZoomDone, setIsZoomDone] = useState(false);
  

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "auto" });
//     const handleScroll = (e) => {
//       const scrollTop = window.scrollY;
//       const maxScroll = 250;

//       // Restrict scale between 1 and 1.5
//       const newScale = Math.max(1, 1.5 - scrollTop / maxScroll);
//       setScale(newScale);

//       // If zoom completed
//       if (newScale === 1) {
//         setIsZoomDone(true);
//       } else {
//         setIsZoomDone(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="page-wrapper">
//       <section
//         ref={zoomRef}
//         className="zoom-section"
//         style={{ transform: `scale(${scale})` }}
//       >
//         <img src={TejasImage} alt="Tejas" className="zoom-image" />
//         {/* <div className="zoom-content">
//           <h1>Hi, I'm Tejas</h1>
//           <p>Scroll to zoom out</p>
//         </div> */}
//       </section>

//       {/* Section 2 only enters when zoom is done */}
//       <section
//         className="second-section"
//         style={{
//           pointerEvents: isZoomDone ? "auto" : "none",
//           opacity: isZoomDone ? 1 : 0,
//         }}
//       >
//         <h2>Section 2</h2>
//         <p>This is unlocked after zoom is done.</p>
//       </section>
//     </div>
//   );
// };

// export default ZoomScrollPage;
import React, { useEffect, useState } from "react";
import "../css/ZoomScrollPage.css";
import graphic from "../assests/gprahics_0.png";
import graphic2 from "../assests/graphic_2.png";
import graphic3 from "../assests/graphic_3.png";
import graphic4 from "../assests/graphic_4.png";
import graphic5 from "../assests/graphic_5.png";
import graphic6 from "../assests/graphic_6.png";
import graphic7 from "../assests/graphic_7.png";
import graphic1 from "../assests/graphic_1.png";




const ZoomScrollPage = () => {
  const [scale, setScale] = useState(1.5);

  const images=[
      graphic1,
      graphic2,
      graphic3,
      graphic4,
      graphic5,
      graphic6,
      graphic7,

  ]

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
                {/* <div className="zoom-text">
                <h1>Hi, I'm Tejas</h1>
                <p>Scroll up to zoom out</p>
                </div> */}
            </section>
            
            </div>
            
            <div className="gallery-container">
              {images.map((src,idx) => (
                <img key={idx} src={src} alt={`Design ${idx}`} className="gallery-img" />
              ))}
            </div>
    </div>
    
  );
};

export default ZoomScrollPage;
