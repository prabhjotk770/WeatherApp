import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    

    return (
        <nav
      class="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "rgba(30, 25, 25, 0.5)"}}
    >
      <Link exact to="/" class="navbar-brand" style={{ color: "white"}}>
        Home
      </Link>

      <Link  to="/about" class="navbar-brand" style={{ color: "white"}}>
        About
      </Link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      
    </nav>

    )
}

export default Navbar;