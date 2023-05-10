import React from 'react'
import './Login_form.css'
import { Link } from 'react-router-dom'
import Header_login from './Header_login'



function Login_form() {
  return (
    <>
      <Header_login />
      <div className='login'>
        <div className='login1'>
          <div className='login2'>
            <h1>Sign In</h1>
            <div className='box'>
              <div className='box1'>

              </div>
              <div className='box2'>

              </div>
              <div className='box3'>
                <form action="">
                  <input className='input' type="text" placeholder = 'Email or Phone Number' />
                  <input className='input' type="password" placeholder = 'Password'/>
                  <Link to='/subscribed'><input className='input' id='input_button' type="submit" value = "Sign In"/></Link>
                  <div>
                    <div className='help'>
                      <a href='/help_form'>need help?</a>
                    </div>
                    <div className='check'>
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </div>
                  </div>
                  {/* <button type="submit">Submit</button> */}
                </form>

                <div className='signup'>
                  <span>New to Arkflix?</span>
                  <span><a href="/signup_form">Sign Up</a></span>
                </div>
                <div className='description'>
                  <span>This page is protected by Google reCAPTCHA to ensure you're not a robot.</span>
                  <span><a href="">Learn more.</a></span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login_form