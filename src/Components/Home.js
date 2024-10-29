import React from 'react'
import './BasicStyle.css'
import logo from '../E-library_logo.png'
import { FaStar } from 'react-icons/fa'

function Home() {
  return (
    <div>
    <div className='container'>
        <div className='bar'>
        <div>
         <ul className='navbar'>
          <img src={logo}  alt='' className='lib' />
                <li><input type='search'></input></li>
                <li><a href="navbar"className='active'>Home</a></li>
                <li>
                  <label>
                    Categories
                    <select>
                      <option value={'Business'}><a href='navbar'>Business</a></option>
                      <option value={'Tech'}><a href='navbar'>Technologies</a></option>
                      <option value={'Litterature'}><a href='navbar'>Litterature</a></option>
                      <option value={'Science'}><a href='navbar'>Science</a></option>
                    </select>
                  </label>
                </li>
                <li><a href="navbar">Register</a></li>
                <li><a href="navbar" >Books</a></li>
             </ul>
         </div>
        </div>
        <div className='NewBanner'>
        <div className='books'>
              <label>Book1</label><FaStar></FaStar>
            </div>
        </div>
        <div className='Homepage'>
          <div className='Advert'>
            <div className='books'>
              <label>Book1</label><FaStar></FaStar>
            </div>

          </div>
        </div>
        
    </div>
</div>
  )
}

 export default Home


