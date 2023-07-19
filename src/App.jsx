import { useState } from 'react'
import './App.css'
import { Link } from "react-router-dom";

import logo from './assets/image/Kedak-Tech-Logo.png'
import lady from './assets/image/lady.png'
import flag from './assets/image/nigeria.svg'

import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Header */}
      <div className='head'>
        <img src={logo} alt="" />

        <button className='card-btn'>
          <Link to={"/login"}><i className="bi bi-credit-card"></i> Get Your Card</Link>
        </button>
      </div>
      {/* End of Header */}


      {/* Name */}
      <div className='home-card'>
        <img src={lady} alt="" className='lady' />

        <div className='details'>
          <p><img src={ flag } className='flag' /> Nigeria</p>
          <h5>Abisola Ifewamiri</h5>

          <div className='d-flex'>
            <p className='pe-3'><i className="bi bi-person"></i> Digital Artist</p>
            <p><i className="bi bi-telephone"></i> +2347035897731</p>
          </div>
        </div>
      </div>
      {/* End of Name */}


      <div className='about'>
        <h5>About</h5>

        <p>Creating beautiful digital art designs to solve problems for brands willing to increase publicity</p>
      </div>


      <button className='add-btn'><i class="bi bi-plus-lg me-3"></i> Add Abisola to Contact</button>



      {/* Contact */}
      <div className='contact'>
        <h6>Contact handles</h6>

        {/* phone */}
        <div className='phone'>
          <div className='d-flex'>
            <i className="bi bi-telephone-fill i1"></i>

            <div className='ms-2'>
              <p>+234 70 3589 7731</p>
              <small>Phone number</small>
            </div>
          </div>

          <i className="bi bi-box-arrow-up-right"></i>
        </div>
        {/* end of phone */}


        {/* mail */}
        <div className='mail'>
          <div className='d-flex'>
            <i className="bi bi-envelope i1"></i>

            <div className='ms-2'>
              <p>catherinegracy007@gmail.com</p>
              <small>Email address</small>
            </div>
          </div>

          <i class="bi bi-box-arrow-up-right"></i>
        </div>
        {/* end of mail */}


        {/* twitter */}
        <div className='twitter'>
          <div className='d-flex'>
            <i className="bi bi-twitter i1"></i>

            <div className='ms-2'>
              <p>Catherine Neddleston</p>
              <small>Twitter</small>
            </div>
          </div>

          <i className="bi bi-box-arrow-up-right"></i>
        </div>
        {/* end of twitter */}


        {/* instagram */}
        <div className='insta'>
          <div className='d-flex'>
            <i className="bi bi-instagram i1"></i>

            <div className='ms-2'>
              <p>Cathy_Gracy</p>
              <small>Instagram</small>
            </div>
          </div>

          <i className="bi bi-box-arrow-up-right"></i>
        </div>
        {/* end of instagram */}


        {/* linkedin */}
        <div className='linkedin'>
          <div className='d-flex'>
            <i className="bi bi-linkedin i1"></i>

            <div className='ms-2'>
              <p>Catherine Gracelyn Neddleston</p>
              <small>Linkedin</small>
            </div>
          </div>

          <i className="bi bi-box-arrow-up-right"></i>
        </div>
        {/* end of linkedin */}

      </div>
      {/* End of Contact */}


      <Footer />
    </>
  )
}

export default App
