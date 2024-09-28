import React from 'react'
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
