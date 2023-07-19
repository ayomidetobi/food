import React from "react"

import icon from '../assets/image/Icon.png'
import safari from '../assets/image/safari.png'

function name() {
  return (
      <div className="card-tag">
          <div className="d-flex align-items-center">
              <img src={icon} alt="" className="icon" />

              <div className="ms-3">
                  <h6>Kedak teck card tag</h6>
                  <p>Open Kedak tech web app in safari</p>
              </div>
          </div>

          <div className="safari">
              <small>now</small> <br />
              <img src={safari} alt="" />
          </div>
      </div>
  )
};

export default name;
