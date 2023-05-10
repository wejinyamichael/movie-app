import React from 'react'
import './Login_form.css'
import { Link } from 'react-router-dom'
import Header_signup from './Header_signup'


function Signup_form() {
  return (
    <>
      <Header_signup />
      <div className='login'>
        <div className='login1'>
          <div className='login2'>
            <h1>Sign Up</h1>
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
                  <Link to='/login_form'><input className='input' id='input_button' type="submit" value = "Sign Up"/></Link>
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
                  <span>Already have an account?</span>
                  <span><Link to='/login_form'>Sign In</Link></span>
                </div>
                <div className='description'>
                  <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                  <span><a href="">Learn more.</a></span>
                </div>

{/* <form className="container" ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="First Name" name="user_firstname" required className="container1" /><br /><br />
                        <input type="text" placeholder="Last Name" name="user_lastname" required className="container2" /><br /><br />

                        <input type="text" placeholder="Phone Number" name="user_phonenumber" required className="container3" /><br /><br />
                        <input type="text" placeholder="Email" name="user_email" required className="container4" /><br /><br /> 

                        <input type="text" placeholder="Address" name="user_address" required className="container5" /><br /><br />
                        <input type="text" name="user_service" value="Catering Services" className="custom_container" /><br /><br />
                        
                        <textarea placeholder="Your message" name="user_message" id="" cols="30" rows="10" required className="container7"></textarea>
                        <button type="submit">Submit</button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup_form