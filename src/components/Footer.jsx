
import { Link } from "react-router-dom";

function name() {
    return (
        <div className='nav mx-auto'>
            <Link to={'profile'}>
            <div className="text-center">
                <i className="bi bi-person"></i>
                <p>Me</p>
            </div>
            </Link>

            <div className='vl'></div>

            <Link to={'scan-history'}>
            <div  className="text-center">
                <i className="bi bi-people"></i>
                <p>Search Profile</p>
            </div>
            </Link>
        </div>
    )
}

export default name;