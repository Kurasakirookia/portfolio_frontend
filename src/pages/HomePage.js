
import "../css/HomePage.css";
import { motion, useScroll, useTransform } from "framer-motion";
import top_img from "../assests/tejas_top.png";
import bottom_img from "../assests/tejas_bottom.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import homeimg from "../assests/hem.JPG"
import frame_img from "../assests/frame_portfolio.png"

import ScrollTextComponent from "../components/ScrollTextComponent";
import ContactMe from "../components/ContactMe";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import right_skill from "../assests/right_skills.png"
const HomePage = () => {
 
  const { scrollYProgress } = useScroll();


  const moveUp = useTransform(scrollYProgress, [0, 0.5], ["0%", "-110vh"]);
  const moveDown = useTransform(scrollYProgress, [0, 0.5], ["50vh", "160vh"]);

  const opacityEffect = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);

const [showCursor, setShowCursor] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });}
  return (

<div className="body">
    <div className="container">

        <div className="sticky-bg-wrapper">
          <div className="sticky-bg">
            <img src={homeimg} alt="Background" className="background-img" />
          </div>
        </div>
        

          <div className="scroll-section">

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
                    <div className="insta_link soc_link">
                      <a href="https://www.instagram.com/tejasdkumar" className="link text insta">INSTAGRAM</a>
                    </div>

                    <div className="text_container">
                      <p className="text">Tejas—a coding wizard, tech nerd, and designer—who pretends to do it all alone but low-key can't live without his beloved Pixey (ChatGPT). It’s not dependency... it’s true love.</p>
                    </div>

                    <div className="email_link soc_link">
                      <a href="mailto:tejas1soc@gmail.com" className="link text email">EMAIL</a>
                    </div>
                </div>

              </div>

            </motion.div>
          </div>

    
  </div>
    



    <div className="intro_section">
      <div className="tejas_intro_image_container">
        <img src={frame_img} alt="" />
      </div>

      <div className="right_intro  hover-target about_section"
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
      onMouseMove={handleMouseMove}>

        {showCursor && (
        <div
          className="custom-cursor"
          style={{
            left: position.x + 10 + "px",
            top: position.y + 10 + "px",
          }}
        >
          Scroll Next
        </div>
      )}

        <div className="tejas_intro">
          <h2 className="texth">ABOUT ME</h2>
          <p className="textm"> I’m Tejas — a curious, tech-loving Computer Science student who dives headfirst into projects, whether it’s building an H&M clone, crafting a student club website, or playing around with AI like it’s my personal sandbox. I’ve got that mix of “I’ll figure it out” confidence and “I’ll Google it at 2 AM” dedication. I’m always stacking skills, chasing new ideas, and turning “what if” into “I built this.”</p>
        </div>

        <ExperienceSection/>

    </div>

    </div>


    <div className="intro_section skills_section">

      <div className="right_intro skills_intro hover-target"
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
      onMouseMove={handleMouseMove}>

        {showCursor && (
        <div
          className="custom-cursor"
          style={{
            left: position.x + 10 + "px",
            top: position.y + 10 + "px",
          }}
        >
          Scroll Next
        </div>
      )}
      
          <div className="sticky_section_title">
            <h1 className="texth">Skills</h1>
          </div>
          


          <SkillsSection/>
      </div>
      <div className="tejas_intro_image_container skills_icons">
        <img src={right_skill} alt="" />
      </div>
    </div>
                
    <div className="scrolltextcomponent_container">
      <div className="container_2">
        <ScrollTextComponent/>
      </div>
    </div> 

        <div className="black-section">
         <div className="inner_black">
                <div className="card projects">
                    <Link to="/ZoomScrollPage"  className="projects">
                    </Link>
                </div>


                <div className="card graphic">
                   <Link to='Projects' className="graphic">
                    </Link>
                </div>
          </div>   
    </div>

    <div className="contact_me">
      <ContactMe/>

    </div>

    

    
    
   
   
   


</div>


  );
};

export default HomePage;