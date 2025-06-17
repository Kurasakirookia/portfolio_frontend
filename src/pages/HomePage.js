
import "../css/HomePage.css";
import { motion, useScroll, useTransform } from "framer-motion";
import top_img from "../assests/tejas_top.png";
import bottom_img from "../assests/tejas_bottom.png";
import tejas from "../assests/IMG-20250221-WA0017-removebg-preview.png"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import homeimg from "../assests/hem.JPG"
import frame_img from "../assests/frame_portfolio.png"
import experience from "../data/experience";
import skills from "../data/skills"
import ScrollText from "../components/ScrollText";
import {useRef } from "react";


const HomePage = () => {
 
  const { scrollYProgress } = useScroll();

  // Move boxes away
  const moveUp = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100vh"]);
  const moveDown = useTransform(scrollYProgress, [0, 0.5], ["50vh", "160vh"]);
  
  // Gradually disappear
  const opacityEffect = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  // const { scrollYProgress } = useScroll();
  // const fixedImageOpacity = useTransform(scrollYProgress, [0, 0.5, 0.55], [1, 1, 0]); 

  //  const leftRef = useRef(null);
  //   const rightRef = useRef(null);
  
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const scrollY = window.scrollY;
  //       if (leftRef.current && rightRef.current) {
  //         leftRef.current.style.transform = `translateX(${scrollY * 1}px)`;
  //         rightRef.current.style.transform = `translateX(${-scrollY * 1}px)`;
  //       }
  //     };
  
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);
  //   console.log("ScrollText mounted");
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

    <div className="intro_section">
      <div className="tejas_intro_image_container">
        <img src={frame_img} alt="" />
      </div>

      <div className="right_intro">

        <div className="tejas_intro">
          <h2 className="texts">ABOUT ME</h2>
          <p className="textp"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, unde. qui asperiores ea hic facilis eum magnam porro! Velit <br />exercitationem perspiciatis, odio accusantium aliquam omnis <br /> aut quo, ab distinctio quidem, delectus fuga voluptatem! Iusto!</p>
        </div>

        {/* <p className="texts texts_frame">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni similique expedita nemo veniam maxime. Dolor sed id adipisci inventore necessitatibus?</p> */}

        <div className="exprience_intro">
          <h2 className="texts">Experience</h2>
          <div className="experience_container">
            { experience.map((company,index)=>(
              // <div className="row row1_exp">
                  <div className={`company company${index}`}>
                    <img src={company.logoSrc} alt={`${company.companyName}`} className="logoicon" />
                    <div className="company_details">
                      <Link className="company_name textp" to='scroll'>{company.companyName}</Link>
                      <p className="texts tenur textp"><b>{company.tenure}</b></p>
                    </div>
                  </div>
                  
              // </div>
              ))} 
            </div>
        </div>

      </div>

    </div>
    <div className="intro_section skills_section">

      <div className="right_intro skills_intro">
          <div className="sticky_section_title">
            <h1 className="texts">Skills</h1>
          </div>
          
          <div className="exprience_intro" id="programming_languages">
            <h2 className="texts">Programming Languages</h2>
            
              <div className="experience_container">
              { skills.programming_languages.map((language,index)=>(
                // <div className="row row1_exp">
                    <div className={`company company${index}`}>
                      <img src={language.logoSrc} alt={`${language.name}`} className="logoicon" />
                      <div className="company_details">
                        <Link className="company_name textp">{language.name}</Link>
                        <p className="texts tenur textp"><b>{language.level}</b></p>
                      </div>
                    </div>
                    
                // </div>
                ))} 
              </div>

          </div>

          <div className="exprience_intro" id="Web_Development">
            <h2 className="texts">Web Development</h2>
            
              <div className="experience_container">
              { skills.web_development.map((language,index)=>(
                // <div className="row row1_exp">
                    <div className={`company company${index}`}>
                      <img src={language.logoSrc} alt={`${language.name}`} className="logoicon" />
                      <div className="company_details">
                        <Link className="company_name textp">{language.name}</Link>
                        <p className="texts tenur textp"><b>{language.role}</b></p>
                      </div>
                    </div>
                    
                // </div>
                ))} 
              </div>
              
          </div>

          <div className="exprience_intro" id="design_tools">
            <h2 className="texts">Design Tools</h2>
            
              <div className="experience_container">
              { skills.design_tools.map((language,index)=>(
                // <div className="row row1_exp">
                    <div className={`company company${index}`}>
                      <img src={language.logoSrc} alt={`${language.name}`} className="logoicon" />
                      <div className="company_details">
                        <Link className="company_name textp">{language.name}</Link>
                        <p className="texts tenur textp"><b>{language.type}</b>&emsp;<b>{language.level}</b></p>
                      </div>
                    </div>
                    
                // </div>
                ))} 
              </div>
              
          </div>

          <div className="exprience_intro" id="data_visualization">
            <h2 className="texts">Data Visualization</h2>
            
              <div className="experience_container">
              { skills.data_visualization.map((language,index)=>(
                // <div className="row row1_exp">
                    <div className={`company company${index}`}>
                      <img src={language.logoSrc} alt={`${language.name}`} className="logoicon" />
                      <div className="company_details">
                        <Link className="company_name textp">{language.name}</Link>
                        <p className="texts tenur textp"><b>{language.type}</b>&emsp;<b>{language.level}</b></p>
                      </div>
                    </div>
                    
                // </div>
                ))} 
              </div>
              
          </div>

          <div className="exprience_intro" id="documentation">
            <h2 className="texts">Documentation</h2>
            
              <div className="experience_container">
              { skills.documentation.map((language,index)=>(
                // <div className="row row1_exp">
                    <div className={`company company${index}`}>
                      <img src={language.logoSrc} alt={`${language.name}`} className="logoicon" />
                      <div className="company_details">
                        <Link className="company_name textp">{language.name}</Link>
                        <p className="texts tenur textp"><b>{language.type}</b>&emsp;<b>{language.level}</b></p>
                      </div>
                    </div>
                    
                // </div>
                ))} 
              </div>
              
          </div>

          <div className="exprience_intro" id="development_tools">
            <h2 className="texts">Development Tools</h2>
            
              <div className="experience_container">
              { skills.development_tools.map((language,index)=>(
                // <div className="row row1_exp">
                    <div className={`company company${index}`}>
                      <img src={language.logoSrc} alt={`${language.name}`} className="logoicon" />
                      <div className="company_details">
                        <Link className="company_name textp">{language.name}</Link>
                        <p className="texts tenur textp"><b>{language.type}</b>&emsp;<b>{language.level}</b></p>
                      </div>
                    </div>
                    
                // </div>
                ))} 
              </div>
              
          </div>
      </div>
      <div className="tejas_intro_image_container skills_icons">
      </div>
    </div>
    
    
   
   
   


</div>

  );
};

export default HomePage;
