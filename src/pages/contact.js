import React from 'react'
import Layout from '../components/Layout'

function Banner(){
  return (<div><div className="innerBanner">
    <img src="/banner/hands-coffee-smartphone-technology.jpg"
        alt="about-us" className="img-responsive" />
    </div>
    <div className="breadcrumb_area">
    <div className="container">
    <div className="row align-items-center">
      <div className="col-sm-6">
        <div className="breadcrumb_top">
          <ul id="breadcrumbs" className="breadcrumbs">
            <li className="item-home">
              <a className="bread-link bread-home"
                 href="/" title="Home"> Home </a>
            </li>
            <li className="separator separator-home">/</li>
            <li className="item-current item-61">
              <strong className="bread-current bread-61"> Contact us</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="breadcrumb_top">
          <h1>Contact us</h1>
        </div>
      </div>
    </div></div></div>
  </div>)
}

export default function Contact() {
  return (<Layout>
    <Banner/>
    <div className="innerbody">
      <div className="contact-us">
      <div className="container">
      <div className="contact-form">
      <div className="row">
        <div className="col-sm-6 contact_left">
          <p> With our strategic location in the Jalan Industrial Complex,
            we are well-positioned to serve our clients
            efficiently and effectively.
          </p>
          <h4>Unit I</h4>
            <p style={{"text-align": "left"}}>
              Jalan Industrial Complex  <br/>
              Gate-1, Right Lane-6,  <br/>
              P.O.Jangalpur, Begri GramPanchayat,  <br/>
              Kolkata, Howrah - 711411
            </p>
            <br/>
            <h4>Unit II</h4>
            <p style={{"text-align": "left"}}>
              Jalan Industrial Complex  <br/>
              Gate-1, Right Lane- 3,  <br/>
              P.O.Jangalpur, Begri Gram Panchayat,  <br/>
              Kolkata, Howrah - 711411
            </p>
            <br/>
            <p>
                <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                <a href="tel:(+91)7890975602">(+91) 7890975602</a> <br/>
                <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                <a href="tel:(+91)9674703249">(+91) 9674703249</a> <br/>
                <span><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                <a href="mailto:enquiry@spino.co.in">enquiry@spino.co.in</a>
            </p>
            <br/>
        </div>
        <div className="col-sm-6 contact_right">
          <h3>We are here</h3>
          <div className="contactMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14733.415637865288!2d88.20864386987897!3d22.60325562225662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027f6899505e87%3A0x436195ccfde2566!2sJalan%20Industrial%20Complex!5e0!3m2!1sen!2sin!4v1583333013583!5m2!1sen!2sin"
              width="600" height="450" frameborder="0" title='we_are_here'
              style={{"border": "0"}} allowfullscreen=""> </iframe>
          </div>
        </div>
      </div></div></div></div>
    </div>
    <div className="newsletter_area">
    </div>
  </Layout>)
}
