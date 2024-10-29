import React from 'react'
import logo from '../E-library_logo.png'
import { FaEnvelope,FaLock,FaUser,FaPhone } from "react-icons/fa"
import './Regis.css'

function Registration() {
  return (
    <div>
      
    <div className='content'>
      <div class="container1">
        <div className="login-box">
          <div className="image-container">
            <img src={logo} alt="" className='lib' />
          </div>
          <div class="form-container">
          <h1>Register Here</h1>
          <form>
          <div className="input-group">
              <label for="name">Name</label><FaUser/>
              <input type="name" id='name' name='name' required />
            </div>
            <div className="input-group">
              <label for="name">Phone Number</label><FaPhone/>
              <input type="number" id='tel' name='tel' required />
            </div>
            <div className="input-group">
              <label for="email">Email address</label><FaEnvelope/>
              <input type="email" id='email' name='useremail' required />
            </div>
            <div className="input-group">
              <label for="password">Password</label><FaLock/>
              <input type="password" id='password' name='password'
      required />
              {/* <input type="password" id="password" name="password" required> */}
          </div>
          <div className="input-group">
              <label for="password">Confirm Password</label><FaLock/>
              <input type="password" id='Cpassword' name='Cpassword'
      required />
              
          </div>

          <button type="submit">Register</button>
              
              <p className='forgot'>Already have an account?<a href="#" >Login</a></p>
              <div className="terms">
              </div>
          </form>
          

          </div>




      </div>
      </div>
    </div>
  </div>
  )
}

export default Registration