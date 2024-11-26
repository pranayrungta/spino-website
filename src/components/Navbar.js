import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { navlinks } from "./data";

function social(data){
  if (data.length===0) return <></>
  return (
    <div className="ml-auto row align-items-center">
      <ul className="social-top">
        {data.map((d,index)=> {return (<li key={index}>
          <a href={d.to} target="_blank" rel="noreferrer">
          <i className={d.stype} aria-hidden="true"></i></a>
        </li>)})}
      </ul>
    </div> )
}

export default function NavbarSpino() {
  const data = navlinks()
  const links = data.base ;
  const about = data.about ;
  return (<Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/" className="navbar-brand">
        <img src="/logo.png" alt='spino' id='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href={links[0].to}>{links[0].name}</Nav.Link>
        <NavDropdown title={links[1].name} id="basic-nav-dropdown">
          {about.map((d, index)=>{return (
          <NavDropdown.Item key={index} href={d.to}>
            {d.name}
          </NavDropdown.Item>)})}
        </NavDropdown>
        {links.slice(2).map((d,i)=>{return (
          <Nav.Link href={d.to} key={i}>{d.name}</Nav.Link>
        )})}
        {/* social(data.social) */}
      </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>);
}
