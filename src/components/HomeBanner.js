import React from 'react'
import './../styles/style.css'
import './../styles/responsive.css'

export default function HomeBanner() {
  return (
    <section className="home_banner">
      <div id="homeslider" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#homeslider" data-slide-to="0" className="active"></li>
          <li data-target="#homeslider" data-slide-to="1" className=""></li>
          <li data-target="#homeslider" data-slide-to="2" className=""></li>
          <li data-target="#homeslider" data-slide-to="3" className=""></li>
          <li data-target="#homeslider" data-slide-to="4" className=""></li>
          <li data-target="#homeslider" data-slide-to="5" className=""></li>
        </ul>
         {/* The slideshow  */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="/contact-us/">
              <img src="/home/Paper-Cup-1.png" alt="" /></a>
          </div>
          <div className="carousel-item">
            <a href="/contact-us/">
              <img src="/home/Paper-Plate.png" alt="" /></a>
          </div>
          <div className="carousel-item">
            <a href="/contact-us/">
              <img src="/home/Coated-Paper-1.png" alt="" /></a>
          </div>
          <div className="carousel-item">
            <a href="/contact-us/">
              <img src="/home/Aluminium-Foil-Container.png" alt="" /></a>
          </div>
          <div className="carousel-item">
            <a href="/contact-us/">
              <img src="/home/Paper-Straws.png" alt="" /></a>
          </div>
          <div className="carousel-item">
            <a href="/contact-us/">
              <img src="/home/Machinery.png" alt="" /></a>
          </div>
        </div>
        {/*  Left and right controls */}
        <a className="carousel-control-prev" href="#homeslider" data-slide="prev">
          <img src="/home/left.png" alt="" />
        </a>
        <a className="carousel-control-next" href="#homeslider" data-slide="next">
          <img src="/home/right.png" alt="" />
        </a>
      </div>
    </section>)
}
