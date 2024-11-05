import React from "react";
import "jquery/dist/jquery.slim.min.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "gatsby";
import { navlinks } from "./data";

export default function Navbar() {
  const data = navlinks()
  const links = data.base ;
  const about = data.about ;
  let social = [];
  return (<header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src="/logo.png" alt='logo' id='logo'/>
      </Link>
      <button className="navbar-toggler" type="button"
        data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent"
        aria-expanded="false"      aria-controls="navbarSupportedContent"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='mainmenu'>
          <li className="nav-item">
            <Link className='nav-link active' to={links[0].to}>
              {links[0].name}
            </Link>
          </li>
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle"
                 data-bs-toggle="dropdown" aria-expanded="false">
              {links[1].name}
            </button>
            <ul className="dropdown-menu">
              {about.map((d, index)=>{return (<li key={index}>
                <Link className="dropdown-item" to={d.to}>
                {d.name}
                </Link>
              </li>)})}
            </ul>
          </li>
          {links.slice(2).map((d, index)=>{return (
            <li className="nav-item" key={index}>
            <Link className="nav-link" to={d.to}>
              {d.name}
            </Link>
            </li>
          )})}
        </ul>
        {(social.length > 0)? (
        <div className="ml-auto row align-items-center">
          <ul className="social-top">
            {social.map((d,index)=> {return (<li key={index}>
              <a href={d.to} target="_blank" rel="noreferrer">
              <i className={d.stype} aria-hidden="true"></i></a>
            </li>)})}
          </ul>
        </div> ):(<div></div>)}
      </div>
    </div>
    </nav>
  </header>);
}
