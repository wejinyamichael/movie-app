import React from 'react'
import {Link} from "react-router-dom"
import {FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaSnapchat, FaMailBulk, FaLinkedin, FaYoutube, FaArrowLeft} from 'react-icons/fa'




function Header_signup() {
  return (
    <>
    <div className="menu">
      <Link to='/login_form'>
      <p><FaArrowLeft size={25} color="#fff" className="icon" /></p>
     {/* <p>←</p> */}
     </Link>
  </div>
  <div className="container3">
      <div className="image">
          <img src="../arkflixlogo.png" alt="" />
      </div>
      <div className="name">
          <h1>Watch unlimited <span className="h1">movies</span></h1>
          <h1 className="h1">and more...</h1>
      </div>
  </div>
</>
    )
}

export default Header_signup