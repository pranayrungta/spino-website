import { Link } from "gatsby";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.css"
import './../styles/global.css'

export default function Navbar() {
  return (<header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src="/logo.png" alt='logo' id='logo'/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='mainmenu'>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"
                    to="/"> Home </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Company Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Quality Assurance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Eco Green Environment
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Link Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
          <div class="ml-auto row align-items-center">
            <ul class="social-top">
              <li><a href="https://www.instagram.com/spino_paper" target="_blank">
                <i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="https://www.facebook.com/spinopapers" target="_blank">
                <i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="https://www.youtube.com/" target="_blank">
                <i class="fa fa-youtube"  aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>);
}
