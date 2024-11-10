import React from 'react'
import "font-awesome/css/font-awesome.css"
import './../styles/global.css'
import "./../styles/responsive.css"
import "./../styles/style.css"
import NavbarSpino from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (<div id='fullpage'>
    <NavbarSpino/>
    <div id='content'>
        {children}
    </div>
    <Footer/>
  </div>)
}
