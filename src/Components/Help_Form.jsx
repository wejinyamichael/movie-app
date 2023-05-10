import React from 'react'
import Header_signup from './Header_signup'
import { Link } from 'react-router-dom'


function Help_Form() {
  return (
    <>
      <Header_signup />
      <div className='login'>
        <div className='login1'>
          <div className='login2'>
            <h1>Need help?</h1>
            <div className='box'>
              <div className='box1'>

              </div>
              <div className='box2'>

              </div>
              <div className='box3'>
                <form action="">
                  <input className='input' type="text" placeholder = 'First Name' />
                  <input className='input' type="text" placeholder = 'Last Name' />
                  <input className='input' type="text" placeholder = 'Email or Phone Number' />
                  <input className='input' type="password" placeholder = 'Password'/>
                  <textarea className='input textarea' name="" id="" placeholder='How can we help?' cols="50" rows="10"></textarea>
                  <Link to='/home'><input className='input' id='input_button' type="submit" value = "Sign Up"/></Link>
                  <div>
                    {/* <div className='help'>
                      <a href=''>need help?</a>
                    </div> */}
                    <div className='check'>
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </div>
                  </div>
                  {/* <button type="submit">Submit</button> */}
                </form>

                {/* <div className='signup'>
                  <span>Already have an account?</span>
                  <span><Link to='/login_form'>Sign In</Link></span>
                </div> */}
                <div className='description'>
                  <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
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

export default Help_Form