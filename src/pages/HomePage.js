
import "../css/HomePage.css";
import { motion, useScroll, useTransform } from "framer-motion";
import top_img from "../assests/tejas_top.png";
import bottom_img from "../assests/tejas_bottom.png";
import tejas from "../assests/IMG-20250221-WA0017-removebg-preview.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import homeimg from "../assests/hem.JPG"


const HomePage = () => {
 
  const { scrollYProgress } = useScroll();

  // Move boxes away
  const moveUp = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100vh"]);
  const moveDown = useTransform(scrollYProgress, [0, 0.5], ["50vh", "150vh"]);
  
  // Gradually disappear
  const opacityEffect = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  // const { scrollYProgress } = useScroll();
  // const fixedImageOpacity = useTransform(scrollYProgress, [0, 0.5, 0.55], [1, 1, 0]); 

  return (
<div className="body">
    <div className="container">

       {/* Sticky background wrapper */}
        <div className="sticky-bg-wrapper">
          <div className="sticky-bg">
            <img src={homeimg} alt="Background" className="background-img" />
          </div>
        </div>
       

       {/* <div className="scroll-wrapper"> */}
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
      {/* </div> */}
      

   {/* <div className="image-wrapper">
     <img src={homeimg} alt="Tejas" className="pinned-image" />
  </div> */}

    
  </div>
    

    <div className="black-section">
         <div className="inner_black">
                <div className="education_container">
                    <Link to="/ZoomScrollPage"  className="education_display">
                    </Link>
                </div>


                <div className="travelplans">
                   <Link to='Projects' className="travel_display">
                    </Link>
                </div>
          </div>   
    </div>

   


</div>

  );
};

export default HomePage;
