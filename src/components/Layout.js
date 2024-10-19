import React from 'react'
import "font-awesome/css/font-awesome.css"
import './../styles/global.css'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (<div id='fullpage'>
    <Navbar/>
    <div id='content'>
        {children}
    </div>
    <Footer/>
  </div>)
}
