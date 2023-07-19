import React from "react"
import Tag from './components/Card-tag'
import { Link } from "react-router-dom";

import logo from './assets/image/Kedak-Tech-Logo2.png'
import flag from './assets/image/nigeria.svg'

function signup() {
  return (
    <div className="login">
      <div className="top">
        <Tag />

        <img src={logo} alt="" className="mt-4" />

        <h1 className="mt-3">Sign Up</h1>

        <p className="fs-6 mt-4">Register to Kedak Tech. Use your contact card to <br /> easily share your social media details.</p>

        <button>I already have an account <Link to={'/login'}> Log In</Link></button>
      </div>

      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type name here..." />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <div className="input-group">
            <span className="input-group-text"><img src={flag} className='flag' /> +234</span>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type name here..." />
        </div>

        <div className="mb-3">
          <label className="form-label">Instagram Profile Link</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type name here..." />
        </div>

        <div className="mb-3">
          <label className="form-label">Twitter Profile Link</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type name here..." />
        </div>

        <div className="mb-3">
          <label className="form-label">LinkedIn Profile Link</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type name here..." />
        </div>

        <div className="btn">
          <p>You can add other social media links later and register</p>
          <button>Register</button>
        </div>

      </form>
    </div>
  )
};

export default signup;
