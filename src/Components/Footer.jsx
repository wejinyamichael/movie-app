import React from 'react'
import {FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaSnapchat, FaMailBulk, FaLinkedin, FaYoutube, FaStarAndCrescent, FaStar} from 'react-icons/fa'


function Footer() {
  return (
    <div>
        <div class="footer">
  <div className="footer-left">
    <p>
      Copyright &copy; 2023 | All rights reserved | Designed by Wejinya Michael. 
    </p>
  </div>
  <div className="footer-right">
    <a href="https://www.facebook.com/wejinya.michael?mibextid=ZbWKwL"><FaFacebook size={30} color="rgb(37,128,242)" className="icon" /></a>
    <a href="https://instagram.com/wejinyamichael?igshid=ZDdkNTZiNTM="><FaInstagram size={30} color="rgb(240,0,117)" className="icon" /></a>
    <a href="https://twitter.com/WejinyaMichael"><FaTwitter size={30} color="rgb(29,161,242)" className="icon" /></a>
    <a href="https://www.youtube.com/@wejinyamichael3714"><FaYoutube size={30} color="rgb(255,0,0)" className="icon" /></a>
    <a href="https://www.linkedin.com/in/michael-wejinya-6a13a316b"><FaLinkedin size={30} color="rgb(13,102,194)" className="icon" /></a>
  </div> 
</div>  
    </div>
  )
}

export default Footer