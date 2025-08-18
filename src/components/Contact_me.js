import React from 'react'
import "../css/contact_me.css"
import { Link } from "react-router-dom";
import insta from "../assests/connect_insta.png";
import Linkedin from "../assests/connect_linkedin.png"
import github from "../assests/connect_github.png"

const contact_me = () => {
  const recipientEmail = "tejaskumardamodar@gmail.com";
  const mailtoLink = `mailto:${recipientEmail}`;
  return (
    <div className='contact_container'>

        <div className="contact_info_container">

            <h1 className='contact_text' id='contact_text_1'>LET'S </h1>
            <h1 className='contact_text' id='contact_text_2'>CONNECT</h1>
        
        </div>
        <div className="contact_options"> 
              <a className="contact contact1" href='https://www.instagram.com/tejasdkumar/?hl=en' target="_blank" rel="noopener noreferrer" >INSTAGRAM</a>
               <a className="contact contact2" href='https://www.linkedin.com/in/tejaskumard/'target="_blank" rel="noopener noreferrer">LINKEDIN</a>
               <a className="contact contact3" href='https://github.com/Kurasakirookia' target="_blank" rel="noopener noreferrer">GITHUB</a>

        </div>
      
    </div>
  )
}

export default contact_me

{/* <img className='contact_icon' alt="email" src={insta} /> */}
{/* <img className='contact_icon' alt="linkendin" src={Linkedin} /> */}
{/* <img className='contact_icon' alt="linkendin" src={Linkedin} /> */}
            // <div className="email_container">
            //   <p id='email_tag'> <a href={mailtoLink} id='email'> tejaskumardamodar@gmail.com</a></p>
               

            // </div>
           


// <div className="contact_options">
//               <a className="contact contact1" href='https://www.instagram.com/tejasdkumar/?hl=en' target="_blank" rel="noopener noreferrer" ><img className='contact_icon' alt="email" src={insta} /></a>
//               <a className="contact contact2" href='https://www.linkedin.com/in/tejaskumard/'target="_blank" rel="noopener noreferrer"><img className='contact_icon' alt="linkendin" src={Linkedin} /></a>
//               <a className="contact contact3" href='https://github.com/Kurasakirookia' target="_blank" rel="noopener noreferrer"><img className='contact_icon' alt="insta" src={github} /></a>
              
//             </div>