import React from "react";
import Logo from "../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
  const [showDropdown, toggleDropdown] = React.useState(false);
  return (
    <div
      className="caldata-header-wrapper"
      style={{ backgroundColor: "white" }}
    >
      <Link to="/">
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" className="logo" />
        </div>
      </Link>
      <nav
        className={showDropdown ? "navbar-wrapper show" : "navbar-wrapper hide"}
      >
        <Link to="/about">
          <div className="navbar-item">
            <h1>about</h1>
          </div>
        </Link>
        <Link to="/contact">
          <div className="navbar-item">
            <h1>get in touch</h1>
          </div>
        </Link>
        <div className="navbar-item"></div>
      </nav>
      <FiMenu
        className="navbar-toggle"
        role="button"
        color={"black"}
        onClick={() => toggleDropdown(!showDropdown)}
      />
    </div>
  );
}
