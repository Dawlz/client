import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "@reach/router";

const NavbarSingle = (props) => {

    return(
        <div className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to= {'/'} className = "link-info ms-sm-2">
                        <FontAwesomeIcon icon = { faChevronLeft } />
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav m-sm-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to= {'/'} className = "link-info ms-sm-2"> <img src="../Images/logo.svg" alt="N8 logo"/> </Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to= {'/checkout'} className = "link-info ms-sm-2"> <img src="../Images/shopping-cart.svg" alt="Cart"/> </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarSingle;