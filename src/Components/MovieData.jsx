import React from 'react'
import {FaLinkedin, FaYoutube, FaStarAndCrescent, FaStar, FaPlay} from 'react-icons/fa'
import {Link} from "react-router-dom"
import "./../App.css"

function MovieData(props) {
  return (
    <>
        <div class="images1">
                <img src={props.image} alt='' />
                <div className="title">
                {/* <span>Title:</span> {item.original_title ? item.original_title : item.original_name} <br /> */}
                <span>Title:</span> {props.title} <br />
                  <span>Language:</span> {props.language} <br /> 
                  <span>Released Date:</span> {props.date} <br /> 
                  {props.rating >= 7 ?
                  <span>
                    <FaStar size={10} color="white" className="icon" /> 
                    <FaStar size={10} color="white" className="icon" /> 
                    <FaStar size={10} color="white" className="icon" />
                    <FaStar size={10} color="white" className="icon" />
                    <FaStar size={10} color="white" className="icon" />
                  </span>
                  :
                  <span>
                    <FaStar size={10} color="white" className="icon" /> 
                    <FaStar size={10} color="white" className="icon" /> 
                    <FaStar size={10} color="white" className="icon" /> 
                  </span>                  
                  } 
                  
                  <br /> 
                  <Link to='/login_form'><FaPlay size={20} color="red" className="icon play" /></Link>
                </div>
              </div>
    </>
  )
}

export default MovieData