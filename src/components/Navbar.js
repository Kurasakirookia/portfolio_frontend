  import React from "react";
  import "../css/Navbar.css"
  import nav_logo from "../assests/tejas_logo_red.png"
  import sign from "../assests/sign_tejas.png";

  const Navbar = () => {
    return (
      <div className='Nav'>
        <ul className="nav_list">
          <li className="nav_item" ><img className="nav_logo" src={nav_logo} alt="" /></li>
          <li className="nav_item"></li>
          {/* <li className="nav_item">Clubs</li>
          <li className="nav_item">Teams</li>
          <li className="nav_item">Events</li> */}
        </ul>
        <img src={sign} alt="logo" className="logo" />
        {/* <p className="gallery">Gallery</p> */}
      </div>
    );
  };

  export default Navbar;
