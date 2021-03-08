import React from "react";
import { Link } from "@reach/router";

const NavbarCart = (props) => {

    return(
        <div className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to= {'/'} className = "link-info ms-sm-2"> <img src="../Images/back-shopping.svg" alt=""/> </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarCart;