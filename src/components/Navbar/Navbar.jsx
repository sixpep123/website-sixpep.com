import React from "react";
import "./Navbar.css";
import logo from "../../images/sixpep-logo.png";
import { FaFacebook, FaTwitter, FaYoutube, FaSearch } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbarItems">
          <div className="logo">
            <img src={logo} alt="Sixpep Logo" className="logoimg" />
          </div>
          <div className="menu drop-menu">
            <a className="menuitem" href="">
              HOME
            </a>
            <a className="menuitem" href="">
              ABOUT US
            </a>
            <a className="menuitem" href="">
              PORTFOLIO
            </a>
            <a className="menuitem" href="">
              BLOG
            </a>
            <a className="menuitem" href="">
              CONTACT
            </a>
          </div>
          <div className="ls">
            <div className="ls-icons">
              <div>
                <button className="ham" aria-hidden="true">
                  <GiHamburgerMenu size={23} />
                </button>
              </div>
              <div className="socialIcons">
                <i className="socicon">
                  <FaFacebook size={18} />
                </i>
                <i className="socicon">
                  <FaTwitter size={18} />
                </i>
                <i className="socicon">
                  <FaYoutube size={18} />
                </i>
                <i className="socicon">
                  <AiFillInstagram size={18} />
                </i>
                <form action="" method="get">
                  <i className="socicon">
                    <FaSearch size={18} />
                  </i>
                </form>
              </div>
            </div>
            <div className="btn">
              <a href="">
                <button className="orngBtn">GET A QUOTE</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
