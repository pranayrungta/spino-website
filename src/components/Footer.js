import React from 'react'
import { Link } from "gatsby";
import './../styles/footer.css'
import { footerlinks } from './data'

function links(data){
  return (<ul className="foot-link">
    {data.map((item, index)=>{return (
      <li><Link to={item.to}>{item.name}</Link></li>
    )})}
  </ul>)
}

export default function Footer() {
  const data = footerlinks()
  const quickLinks = data.quickLinks;
  const coInfo = data.coInfo;

  return (<footer>
    <div className="middle_footer">
      <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <Link className="footerlogo" to="/">
            <img src="/logo.png" alt="logo"/>
          </Link>
          <div className="footer_text">
            Our company believes that quality standards of products &amp;
            services can be raised through teamwork,
            training &amp; motivation. <p> an <b>ISO 9001:2015</b> company </p>
          </div>
        </div>
        <div className="col-lg-9">
        <div className="row">
          <div className="col-sm-4 cuswidth">
            <h2>Quick Links</h2>
            {links(quickLinks)}
          </div>
          <div className="col-sm-4 cuswidth">
            <h2>Company Info</h2>
            {links(coInfo)}
          </div>
          <div className="col-sm-4 cuswidth">
            <h2>Contact Us</h2>
            <ul className="footer_contact">
              <li>
                  <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                  Spinaroo Commercial Ltd.<br />
                  Jalan Industrial Complex,<br />
                  Main Gate - 1,<br />
                  Right Lane - 3,<br />
                  P.O- Begri, P.S. Domjur,<br />
                  Howrah - 711411
                </li>
                <li>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <a href="tel:(+91)7890975602">(+91) 7890975602</a> <br/>
                  <a href="tel:(+91)9674703249">(+91) 9674703249</a>
                </li>
                <li>
                  <span><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                  <a href="mailto:enquiry@spino.co.in">enquiry@spino.co.in</a>
                </li>
            </ul>
          </div>
        </div> </div>
      </div> </div>
    </div>
    <div className="bottom_footer">
      <div className="container">
      <div className="row align-items-center">
      <div className="col-sm-12">
      <p>
        Copyright © 2020 Spinaroo Commercial Ltd <span>|</span>
        All rights reserved
      </p>
      </div></div> </div>
    </div>
  </footer>)
}
