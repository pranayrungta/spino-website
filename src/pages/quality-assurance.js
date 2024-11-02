import React from 'react'
import Layout from '../components/Layout'

function Banner(){
  return (<div>
    <div className="innerBanner">
      <img src="/banner/why-hire-professional-auditor.png"
           alt="quality-assurance" className="img-responsive" />
    </div>
    <div className="breadcrumb_area">
      <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-6">
        <div className="breadcrumb_top">
        <ul id="breadcrumbs" className="breadcrumbs">
          <li className="item-home">
            <a className="bread-link bread-home"
               href="/" title="Home">Home</a>
          </li>
          <li className="separator separator-home">/</li>
          <li className="item-current item-118">
            <strong className="bread-current bread-118">
              Quality Assurance</strong>
          </li>
        </ul> </div> </div>
        <div className="col-sm-6">
          <div className="breadcrumb_top">
          <h1>Quality Assurance</h1>
          </div>
        </div>
      </div> </div>
    </div>
  </div>)
}

export default function QualityAssurance() {
  return (<Layout>
    <Banner/>
    <div className="home_about inner-about">
      <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-6" data-aos="fade-left" data-aos-duration="3000">
          <div className="abText">
            <h2>Quality Assurance</h2>
            <p>
              Quality is the forte of all organizations that aim at achieving
              greater heights.
            </p>
            <p>
              We recognize the need for quality with economy. We work towards
              sustaining and improving on quality as an ongoing process. Our
              skills are in bringing together a comprehensive range of high
              quality products.
            </p>
            <p>
              Since the establishment of the organization, we have adopted
              strict total quality management policy in each business
              proceeding. Further, our skilled quality controllers keep a
              strict tab at each stage, right from the procurement of the raw
              material till final delivery, so as to ensure the range is in
              compliance with set industry standards.
            </p>
            <p>
              Making use of all installed resources, our quality controllers
              also conduct various checks and tests on the range prior to the
              dispatch, so that the clients receive flawless products.
              Following are some of the well-defined quality parameters based
              on which our entire range of products is checked:
            </p>
            <ul>
              <li>Input Raw material used.</li>
              <li>Designs and finished product.</li>
              <li>Leakage Test with boiling hot water.</li>
              <li>Print quality and visibility.</li>
            </ul>
            <p>
              All internal &amp; external packaging is suitably designed and
              constructed for export worthy shipping. All external packaging
              is made out of 100% recycled paper. Simple readable graphics
              &amp; text matter provide for easy identification of products at
              all points of distribution.
            </p>
          </div>
        </div>
        <div className="col-sm-6" data-aos="fade-right" data-aos-duration="3000">
          <img src="/banner/pexels-photo-669615.jpeg" alt=""/>
        </div>
      </div>
      </div>
    </div>
    <div className="newsletter_area"> </div>
  </Layout>)
}
