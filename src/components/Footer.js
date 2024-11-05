import React from 'react'
import './../styles/footer.css'

export default function Footer() {
  return (<footer>
    <div className="middle_footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <a className="footerlogo" href="/">
              <img src="/logo.png" alt="logo"/>
            </a>
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
                <div className="menu-useful-link-container">
                  <ul id="menu-useful-link" className="foot-link">
                    <li id="menu-item-52" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-52">
                      <a href="/products/">Products</a></li>
                    <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
                      <a href="/eco-green-environment/">Eco Green Environment</a></li>
                    <li id="menu-item-142"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-142"><a
                        href="/quality-assurance/">Quality Assurance</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 cuswidth">
                <h2>Company Info</h2>
                <div className="menu-company-menu-container">
                  <ul id="menu-company-menu" className="foot-link">
                    <li id="menu-item-53" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-53">
                      <a href="/about-us/">About Us</a></li>
                    <li id="menu-item-190"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-190"><a
                        href="/gallery/">Gallery</a></li>
                    <li id="menu-item-77" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77">
                      <a href="/contact-us/">Contact us</a></li>
                    <li id="menu-item-45" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-45">
                      <a href="/investor-relations/">Investor Relations</a></li>
                  </ul>
                </div>
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
                      <span
                        ><i className="fa fa-envelope-o" aria-hidden="true"></i
                      ></span>
                      <a href="mailto:enquiry@spino.co.in">enquiry@spino.co.in</a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bottom_footer">
    <div className="container">
    <div className="row align-items-center">
      <div className="col-sm-12">
        <p>
          Copyright © 2020 Spinaroo Commercial Ltd <span>|</span>
          All rights reserved
        </p>
      </div>
    </div>
    </div>
    </div>
  </footer>)
}
