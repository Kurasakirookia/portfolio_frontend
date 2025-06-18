// // ScrollText.jsx
// import React, { useEffect, useRef } from "react";
// import "../css/horizontal_scroll.css"

// const ScrollText = () => {
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       if (leftRef.current && rightRef.current) {
//         leftRef.current.style.transform = `translateX(${scrollY * 0.6}px)`;
//         rightRef.current.style.transform = `translateX(${-scrollY * 0.6}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="scroll-wrapper">
//       <div className="text-line left-to-right" ref={leftRef}>
//         WONG • BRANDS • 2024
//       </div>
//       <div className="text-line right-to-left" ref={rightRef}>
//         WONG • BRANDS • 2024
//       </div>
//     </div>
//   );
// };

// export default ScrollText;

import React, { useEffect, useRef } from "react";
import "../css/horizontal_scroll.css";

const ScrollText = () => {
  const wrapperRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only run animation when component is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = 1 - rect.top / windowHeight; // 0 to 1
        const moveAmount = progress * 180; // Adjust this value for speed

        if (leftRef.current && rightRef.current) {
          leftRef.current.style.transform = `translateX(${moveAmount-20}px)`;
          rightRef.current.style.transform = `translateX(${-moveAmount}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-wrapper" ref={wrapperRef}>
      <div className="text-line left-to-right" ref={leftRef}>
        TENATICOUS • NERD • 2025
      </div>
      <div className="text-line right-to-left" ref={rightRef}>
        TENATICOUS • NERD • 2025
      </div>
    </div>
  );
};

export default ScrollText;
