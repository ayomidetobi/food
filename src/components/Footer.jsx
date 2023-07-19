import React from "react"
import { Link } from "react-router-dom";

function name() {
    return (
        <div className='nav'>
            <Link to={'profile'}>
            <div className="text-center">
                <i class="bi bi-person"></i>
                <p>Me</p>
            </div>
            </Link>

            <div className='vl'></div>

            <Link to={'scan-history'}>
            <div  className="text-center">
                <i class="bi bi-people"></i>
                <p>Scan History</p>
            </div>
            </Link>
        </div>
    )
};

export default name;