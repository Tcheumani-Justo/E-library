import React from 'react'
import logo from '../E-library_logo.png'
import { FaEnvelope,FaLock } from "react-icons/fa"
import './login.css'

function Login() {

return (
  
    <div>
      
      <div className='content'>
        <div class="container1">
          <div className="login-box">
            <div className="image-container">
              <img src={logo} alt="" />
            </div>
            <div class="form-container">
            <h1>Login Here</h1>
            <form>
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

            <button type="submit">Login</button>
                <a href="http://#" className="forgot-password">Forgot password?</a>
                <p>Don't have an account?</p>
                <a href="#" >SignUp</a>
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

export default Login