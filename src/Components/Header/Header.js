import React from "react";
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/fontawesome-free'


const Header = () => {
    return(
        <nav>
            <div className="txt">
                <h1>Movie website</h1>
            </div>
            <div>
                 {/* <FontAwesomeIcon icon="fa-solid fa-film" /> */}
                <h1>Icon</h1>
            </div>
        </nav>
    )
}

export default Header