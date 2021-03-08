//to contain hamburger icon
//logo to go home
//search icon to do nothing
//cart icon to lead to cart page

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "@reach/router";

const Navbar = (props) => {

    return(
        <div className="navbar navbar-expand-lg navbar-light bg-light mb-0 sticky-top">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to= {'/'} className = "link-info ms-sm-2">
                        <FontAwesomeIcon icon = { faBars } />
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav m-sm-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to= {'/'} className = "link-info ms-sm-2">
                        <img src="../Images/logo.svg" alt="N8 logo"/>
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-sm-auto mb-2">
                <li className="nav-item">
                    <img src="../Images/search.svg" alt="search"/>
                </li>
                <li className="nav-item">
                    <Link to= {'/checkout'} className = "link-info">
                        <img src="../Images/shopping-cart.svg" alt="Cart"/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;