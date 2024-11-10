import * as React from "react"
import Carousel from 'react-bootstrap/Carousel';

import Layout from "../components/Layout"
import "./../styles/homebanner.css"
import {ProductCarousel, ResponsiveSlider} from './../templates/prod-data'

function HomeBanner() {
  let files = ['Paper-Cup-1.png', 'Paper-Plate.png', 'Coated-Paper-1.png',
  'Aluminium-Foil-Container.png', 'Paper-Straws.png', 'Machinery.png' ]
  return (<div className="carousel slide home_banner">
    <Carousel>
      {files.map((file, i)=>{return (
      <Carousel.Item key={i}>
        <img src={"/banner/" + file}
            className="d-block w-100" alt="..."/>
      </Carousel.Item>
      )})}
    </Carousel>
  </div>);
}

function Story() {
  return (<div className="home_about">
    <div className="container">
    <div className="row align-items-center">
      <div className="col-sm-6" data-aos="fade-right" data-aos-duration="3000">
        <img src="/banner/about-1.jpg" alt="" />
      </div>
      <div className="col-sm-6" data-aos="fade-left" data-aos-duration="3000">
        <h2>About Us</h2>
        <div className="abText">
        <p>
          Established in 2012, We are based out of Kolkata and are one of
          the leading Manufacturers of Aluminum Foil Container, Aluminum
          Home Foil, Paper Cup, Raw Material for Paper Cups viz. paper
          coating, printing, blanking etc. We also deal in wide range of
          Paper Cup related Machinery like &#8211; High-Speed Paper Cup
          Making Machine, Flexo Printing Machine, Automatic Roll Die
          Cutting Machine etc. with full end to end support.
        </p>
        <p>
          Offered products are made from superior quality raw materials
          supplied by our highly reliable vendors end under the direction
          of experienced professionals. Owing to their excellent
          performance, low maintenance, and superior quality, these
          products are highly acclaimed among our precious patrons.
        </p>
        <p>
          We procure our offered paper making machine from highly popular
          and trusted vendors of the industry. Our vendors offer us only
          superb quality products. These authentic and certified vendors
          are the use of ultra-modern machines and tools to manufacture
          the offered range of products. These vendors are well known
          about our client&#8217;s specific needs. Thus, they are
          producing the products as per our client&#8217;s demands. Apart
          from this, we are offering these products at budget-friendly
          prices within the requested frame of time as per the
          client&#8217;s detailed demands.
        </p>
        </div>
        <a href="/about-us/" className="btnmore">Read More</a>
      </div>
    </div></div>
    </div>)
}

export default function Home() {
  return (<Layout>
    <HomeBanner/>
    <Story/>
    <ProductCarousel/>
    <ResponsiveSlider/>
    <div className="newsletter_area">
    </div>
  </Layout>)
}
