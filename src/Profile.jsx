import React from "react"
import { Link } from "react-router-dom";

import man from './assets/image/man.png'
import flag from './assets/image/nigeria.svg'

import Footer from './components/Footer';

function profile() {
  return (
    <div className="profile">
      <Link to={'/'}><i class="bi bi-chevron-left back"></i></Link>

      {/* Card */}
      <div className="card">
        <img src={man} alt="" />

        <p className="mt-3"><img src={flag} className='flag' /> Nigeria</p>

        <h5>Moshood Ajibose</h5>

        <div className='d-flex mt-2'>
          <p className='pe-3'><i className="bi bi-person"></i> Digital Artist</p>
          <p><i className="bi bi-telephone"></i> +2347035897731</p>
        </div>

        <button className="mt-2">Edit Profile</button>
      </div>
      {/* End of Card */}


      {/* About */}
      <div className="about">
        <div className="d-flex justify-content-between">
          <h6>About</h6>
          <i class="bi bi-pencil"></i>
        </div>

        <p>Creating beautiful digital art designs to solve problems for brands willing to increase publicity</p>
      </div>
      {/* End of About */}


      {/* Contact */}
      <div className="contact">
        <h6>Contact Handles</h6>

        <button><i class="bi bi-plus me-2"></i> Add social media</button>

        {/* phone */}
        <div className='phone'>
          <div className='d-flex'>
            <i className="bi bi-telephone-fill i1"></i>

            <div className='ms-2'>
              <p>+234 70 3589 7731</p>
              <small>Phone number</small>
            </div>
          </div>

          <i class="bi bi-pencil"></i>
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

          <i class="bi bi-pencil"></i>
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

          <i class="bi bi-pencil"></i>
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

          <i class="bi bi-pencil"></i>
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

          <i class="bi bi-pencil"></i>
        </div>
        {/* end of linkedin */}
      </div>
      {/* End of Contact */}

      <Footer />

    </div>
    
  )
};

export default profile;



{/* <Link to={'/'}><i className="bi bi-arrow-left ps-5 back"></i></Link> */}