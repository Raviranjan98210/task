import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AppsIcon from "@material-ui/icons/Apps";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__logo">
        <img
          src="https://realestatehut.com/wp-content/uploads/2019/11/new_logo-3.png"
          alt=""
          height="62px"
        />
      </Link>

      <ul className="navbar__menu">
        <li className="navbar__menu__item">
          <Link className="navbar__menu__links">Home</Link>
        </li>
        <li className="navbar__menu__item">
          <Link className="navbar__menu__links">Find Property</Link>
        </li>
        <li className="navbar__menu__item">
          <Link className="navbar__menu__links">List Property</Link>
        </li>
        <li className="navbar__menu__item">
          <Link className="navbar__menu__links">Preconstruction</Link>
        </li>
        <li className="navbar__menu__item">
          <Link className="navbar__menu__links">Contact</Link>
        </li>
      </ul>

      <div className="navbar__action">
        <button className="navbar__action__button">sign in/sign up</button>
        <button className="navbar__action__button">
          <i class="fas fa-shopping-cart"></i>
        </button>
        <p style={{ color: "white", fontSize: "10px" }}>
          <span style={{ marginRight: "2px" }}> CAD </span>
          <i className="fas fa-angle-down"></i>
          <span style={{ marginRight: "4px", fontSize: "20px" }}> | </span> 🇬🇧
          <span style={{ marginRight: "2px" }}> EN </span>
          <i class="fas fa-angle-down"></i>
        </p>
        <AppsIcon style={{ color: "white" }} />
      </div>
    </nav>
  );
};

export default Navbar;
