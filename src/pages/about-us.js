import React from 'react'
import Layout from '../components/Layout'

function Banner() {
  return (<div>
    <div className="innerBanner">
      <img src="/banner/pexels-photo-247599.jpg"
           alt="about-us" className="img-responsive" />
    </div>
    <div className="breadcrumb_area">
    <div className="container">
    <div className="row align-items-center">
      <div className="col-sm-6">
        <div className="breadcrumb_top">
        <ul id="breadcrumbs" className="breadcrumbs">
          <li className="item-home">
            <a className="bread-link bread-home" href="/"
               title="Home"> Home </a>
          </li>
          <li className="separator separator-home">/</li>
          <li className="item-current item-9">
            <strong className="bread-current bread-9"> About Us</strong>
          </li>
        </ul>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="breadcrumb_top">
          <h1>About Us</h1>
        </div>
      </div>
    </div> </div> </div>
  </div>)
}

export default function About_us() {
  return (<Layout>
    <Banner/>
    <div className="home_about inner-about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6" data-aos="fade-right" data-aos-duration="3000">
            <img src="/story/about-1.jpg" alt="" />
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
          </div>
        </div>
        <p className="d-none">&nbsp;</p>
        <hr />
        <p className="d-none">&nbsp;</p>
        <div className="row align-items-center">
          <div className="col-sm-6" data-aos="fade-left" data-aos-duration="3000">
            <h2>Vision & Mission</h2>
            <div className="abText">
              <p>
                It is our mission to serve our customer’s need by offering
                quality products and services. Being dedicated for giving best
                to our customers, we believe in the concept of continuous
                improvement of the product. Today we are one name in this
                industry, which have made our presence felt among our customers
                by setting high standards of our products and standing by
                principles in customer satisfaction.
              </p>
              <p>
                Our company believes that quality standards of products and
                services can be raised through teamwork, training and
                motivation. Our main focus is on offering outstanding products
                to our customers and sticking to timely delivery schedules. We
                also have the expertise and capability to execute bulk order and
                customized orders as per the buyer’s demand. Our quality
                products have helped us to establish long lasting relationships
                with our clients.
              </p>
            </div>
          </div>
          <div className="col-sm-6" data-aos="fade-right" data-aos-duration="3000">
            <img
              src="/banner/pexels-photo-2651248.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="newsletter_area">
    </div>
  </Layout>)
}
