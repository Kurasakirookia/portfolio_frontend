  import React from "react";
  import { Link } from 'react-router-dom';
  import "../css/Navbar.css"
  import nav_logo from "../assests/tejas_logo_red.png"


  const Navbar = () => {
    return (
      <div className='Nav'>
         <li className="nav_item" ><Link to='/'><img className="nav_logo" src={nav_logo} alt="" /></Link></li>
        
        <ul className="nav_list">
          <li className="nav_item"><Link to='/Projects' className="Link_item">Projects</Link></li>
          <li className="nav_item"><Link to='/ZoomScrollPage' className="Link_item">Graphics</Link></li>
        
        </ul>
        {/* <img src={sign} alt="logo" className="logo" /> */}
        {/* <p className="gallery">Gallery</p> */}
      </div>
    );
  };

  export default Navbar;
