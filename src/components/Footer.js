import React from 'react'
import { Link } from "gatsby";
import './../styles/footer.css'
import { footerlinks, contact_details } from './data'

function links(data){
  return (<ul className="foot-link">
    {data.map((item, index)=>{return (
      <li key={index}><Link to={item.to}>{item.name}</Link></li>
    )})}
  </ul>)
}

function contact_section(){
  const c = contact_details();
  return (<ul className="footer_contact">
    <li>
      <span><i className={"fa "+c.addr1.mark}
               aria-hidden="true"></i></span>
      Spinaroo Commercial Ltd. <br/>
      Jalan Industrial Complex, <br/>
      Main Gate - 1, <br/>
      Right Lane - 3, <br/>
      P.O- Begri, P.S. Domjur, <br/>
      Howrah - 711411
    </li>
    <li>
      <span><i className={"fa "+c.phone.mark}
               aria-hidden="true"></i></span>
      <a href={"tel:"+c.phone.t1}>{c.phone.t1}</a> <br/>
      <a href={"tel:"+c.phone.t2}>{c.phone.t2}</a>
    </li>
    <li>
      <span><i className={"fa "+c.email.mark}
               aria-hidden="true"></i></span>
      <a href={"mailto:"+c.email.val}>{c.email.val}</a>
    </li>
  </ul>)
}

export default function Footer() {
  const data = footerlinks();
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
            {links(data.quickLinks)}
          </div>
          <div className="col-sm-4 cuswidth">
            <h2>Company Info</h2>
            {links(data.coInfo)}
          </div>
          <div className="col-sm-4 cuswidth">
            <h2>Contact Us</h2>
            {contact_section()}
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
