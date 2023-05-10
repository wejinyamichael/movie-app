import React from 'react'
import {Link} from "react-router-dom"


function Header() {
  return (
    <>
        <div className="menu">
          <Link to='/login_form'>
         <p>Login</p>
         </Link>
      </div>
        <div className="search">
            <input placeholder='search movies...' className="search"></input>
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

export default Header