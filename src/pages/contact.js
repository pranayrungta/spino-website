import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import {contact_details} from '../components/data'

export default function Contact() {
  const c = contact_details();
  return (<Layout>
    <Banner page='cntct'/>
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
            <p style={{"textAlign": "left"}}>
              Jalan Industrial Complex  <br/>
              Gate-1, Right Lane-6,  <br/>
              P.O.Jangalpur, Begri GramPanchayat,  <br/>
              Kolkata, Howrah - 711411
            </p>
            <br/>
            <h4>Unit II</h4>
            <p style={{"textAlign": "left"}}>
              Jalan Industrial Complex  <br/>
              Gate-1, Right Lane- 3,  <br/>
              P.O.Jangalpur, Begri Gram Panchayat,  <br/>
              Kolkata, Howrah - 711411
            </p>
            <br/>
            <ul className='footer_contact'>
                <li><span><i className={"fa "+c.phone.mark}
                         aria-hidden="true"></i></span>
                <a href={"tel:"+c.phone.t1}>{c.phone.t1}</a></li>
                <li><span><i className={"fa "+c.phone.mark}
                         aria-hidden="true"></i></span>
                <a href={"tel:"+c.phone.t2}>{c.phone.t2}</a></li>
                <li><span><i className={"fa "+c.email.mark}
                         aria-hidden="true"></i></span>
                <a href={"mailto:"+c.email.val}>{c.email.val}</a></li>
            </ul>
            <br/>
        </div>
        <div className="col-sm-6 contact_right">
          <h3>We are here</h3>
          <div className="contactMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14733.415637865288!2d88.20864386987897!3d22.60325562225662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027f6899505e87%3A0x436195ccfde2566!2sJalan%20Industrial%20Complex!5e0!3m2!1sen!2sin!4v1583333013583!5m2!1sen!2sin"
              width="600" height="450" title='we_are_here'
              style={{"border": "0"}} allowFullScreen=""> </iframe>
          </div>
        </div>
      </div></div></div></div>
    </div>
    <div className="newsletter_area">
    </div>
  </Layout>)
}
