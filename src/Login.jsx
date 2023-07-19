import React from "react"
import Tag from './components/Card-tag'
import { Link } from "react-router-dom";

import logo from './assets/image/Kedak-Tech-Logo2.png'
import flag from './assets/image/nigeria.svg'

function tag() {
  return (
    <div className="login">
      <div className="top">
        <Tag />

        <img src={logo} alt="" className="mt-4" />

        <h1 className="mt-3">Log In</h1>

        <p className="fs-6 mt-4">Register to Kedak Tech. Use your contact card to <br /> easily share your social media details.</p>

        <button>I'm new to Kedak, <Link to={'/signup'}>Sign Up</Link></button>
      </div>

      <form>

        <div class="mb-3">
          <label class="form-label">Full Name</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Type name here..." />
        </div>

        <div class="mb-3">
          <label class="form-label">Phone Number</label>
          <div class="input-group">
            <span class="input-group-text"><img src={flag} className='flag' /> +234</span>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div className="btn">
          <button><Link to={"/"}>Resume</Link></button>
        </div>

      </form>
    </div>
  )
};

export default tag;
