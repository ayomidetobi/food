import React from "react"
import { Link } from "react-router-dom";
import Footer from './components/Footer';

import lady from './assets/image/lady.png'
import lady2 from './assets/image/lady2.png'
import lady3 from './assets/image/lady3.png'
import lady4 from './assets/image/lady4.png'
import lady5 from './assets/image/lady5.png'
import lady6 from './assets/image/lady6.png'
import flag from './assets/image/nigeria.svg'

function name() {
  return (
    <div className="scan">
      <Link to={'/'}><i className="bi bi-chevron-left me-3"></i>Last contact card scans</Link>
      
      <div className='home-card'>
        <img src={lady} alt="" />

        <div className='details'>
          <p><img src={ flag } className='flag' /> Nigeria</p>
          <h5>Abisola Ifewamiri</h5>

          <div className='d-flex'>
            <p className='pe-3'><i className="bi bi-person"></i> Digital Artist</p>
            <p><i className="bi bi-telephone"></i> +2347035897731</p>
          </div>
        </div>
      </div>


      <div className='home-card'>
        <img src={lady2} alt="" />

        <div className='details'>
          <p><img src={ flag } className='flag' /> Nigeria</p>
          <h5>Esther Caleb</h5>

          <div className='d-flex'>
            <p className='pe-3'><i className="bi bi-person"></i> Digital Artist</p>
            <p><i className="bi bi-telephone"></i> +2347035897731</p>
          </div>
        </div>
      </div>


      <div className='home-card'>
        <img src={lady3} alt="" />

        <div className='details'>
          <p><img src={ flag } className='flag' /> Nigeria</p>
          <h5>Bola Banji</h5>

          <div className='d-flex'>
            <p className='pe-3'><i className="bi bi-person"></i> Digital Artist</p>
            <p><i className="bi bi-telephone"></i> +2347035897731</p>
          </div>
        </div>
      </div>


      <div className='home-card'>
        <img src={lady4} alt="" />

        <div className='details'>
          <p><img src={ flag } className='flag' /> Nigeria</p>
          <h5>Sola Olugbenga</h5>

          <div className='d-flex'>
            <p className='pe-3'><i className="bi bi-person"></i> Digital Artist</p>
            <p><i className="bi bi-telephone"></i> +2347035897731</p>
          </div>
        </div>
      </div>


      <div className='home-card'>
        <img src={lady5} alt="" />

        <div className='details'>
          <p><img src={ flag } className='flag' /> Nigeria</p>
          <h5>Bisola Dam</h5>

          <div className='d-flex'>
            <p className='pe-3'><i className="bi bi-person"></i> Digital Artist</p>
            <p><i className="bi bi-telephone"></i> +2347035897731</p>
          </div>
        </div>
      </div>


      <div className='home-card'>
        <img src={lady6} alt="" />

        <div className='details'>
          <p><img src={ flag } className='flag' /> Nigeria</p>
          <h5>Tosin Damilola</h5>

          <div className='d-flex'>
            <p className='pe-3'><i className="bi bi-person"></i> Digital Artist</p>
            <p><i className="bi bi-telephone"></i> +2347035897731</p>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
};

export default name;
