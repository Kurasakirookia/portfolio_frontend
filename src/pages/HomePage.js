


// // export default ScrollingEffect;
// import "./css/HomePage.css";
// import { motion, useScroll, useTransform } from "framer-motion";
// import top_img from "./assests/tejas_top.png";
// import bottom_img from "./assests/tejas_bottom.png";

// const ScrollingEffect = () => {
//   const { scrollYProgress } = useScroll(); // Tracks scroll progress

//   // Move one div UP, the other DOWN
//   const moveUp = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100vh"]);
//   const moveDown = useTransform(scrollYProgress, [0, 0.5], ["50vh", "150vh"]);

//   // Opacity Effect (gradually disappear)
//   const opacityEffect = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

//   return (
//     <div className="container">
//       <div className="scroll-section">
//         {/* First div moves UP */}
//         <motion.div
//           style={{ y: moveUp, opacity: opacityEffect }}
//           className="box box1"
//         >
//           <div className="section section1">
//             <img className="name top" src={top_img} alt="top" />
//           </div>
//         </motion.div>

//         {/* Second div moves DOWN */}
//         <motion.div
//           style={{ y: moveDown, opacity: opacityEffect }}
//           className="box box2"
//         >
//           <div className="section section2">
//             <img className="name bottom" src={bottom_img} alt="bottom" />
//           </div>
//         </motion.div>
//       </div>

//       {/* Next Section Appears After Scroll Completes */}
//       <div className="next-section">
//         <h1>Welcome to the Next Section</h1>
//       </div>
//     </div>
//   );
// };

// export default ScrollingEffect;

import "../css/HomePage.css";
import { motion, useScroll, useTransform } from "framer-motion";
import top_img from "../assests/tejas_top.png";
import bottom_img from "../assests/tejas_bottom.png";

const ScrollingEffect = () => {
  const { scrollYProgress } = useScroll();

  // Move boxes away
  const moveUp = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100vh"]);
  const moveDown = useTransform(scrollYProgress, [0, 0.5], ["50vh", "150vh"]);
  
  // Gradually disappear
  const opacityEffect = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  return (
<div className="body">
    <div className="container">
      <div className="scroll-section">
        {/* First div moves UP */}
        <motion.div
          style={{ y: moveUp, opacity: opacityEffect }}
          className="box box1"
        >
          <div className="section section1">
            <img className="name top" src={top_img} alt="top" />
          </div>
        </motion.div>

        {/* Second div moves DOWN */}
        <motion.div
          style={{ y: moveDown, opacity: opacityEffect }}
          className="box box2"
        > 
          <div className="sec_2_container">
            <div className="section section2">
              <img className="name bottom" src={bottom_img} alt="bottom" />
            </div>

            <div className="bottom_text_container">
                <div className="insta_link">
                  <a href="https://www.instagram.com/tejasdkumar" className="link text insta">INSTAGRAM</a>
                </div>

                <div className="text_container">
                  <p className="text">Tejas—a coding wizard, tech nerd, and designer—who pretends to do it all alone but low-key can't live without his beloved Pixey (ChatGPT). It’s not dependency... it’s true love.</p>
                </div>

                <div className="email_link">
                  <a href="mailto:tejas1soc@gmail.com" className="link text email">EMAIL</a>
                </div>
            </div>

          </div>

        </motion.div>
      </div>

    <div className="inner_container">
        <img src="" alt="" className="sign" />
        
        <img src="" alt="" className="me_img" />
        <div className="text_container">
            
        </div>
    </div>
    
    </div>
    

    <div className="black-section">
    <h1 style={{ color: "white" }}>Black Section</h1>
    </div>
</div>

  );
};

export default ScrollingEffect;
