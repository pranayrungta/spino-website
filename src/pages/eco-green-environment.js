import React from 'react'
import Layout from '../components/Layout'

function Banner(){
  return (<div>
    <div className="innerBanner">
      <img src="/banner/pexels-photo-2886937.jpg"
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
          <li className="item-current item-15">
            <strong className="bread-current bread-15">
              Eco Green Environment</strong>
          </li>
        </ul> </div> </div>
        <div className="col-sm-6">
          <div className="breadcrumb_top">
          <h1>Eco Green Environment</h1>
          </div>
        </div>
      </div> </div>
    </div>
  </div>)
}

export default function QualityAssurance() {
  return (<Layout>
    <Banner/>
    <div className="home_about inner-about inner-eco">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6" data-aos="fade-right" data-aos-duration="3000">
            <img src="/banner/pexels-photo.jpg" alt="" />
          </div>
          <div className="col-sm-6" data-aos="fade-left" data-aos-duration="3000">
            <h2>Eco Green Environment</h2>
            <div className="abText">
              <p>
                We introduce ourselves as a reputed organization that excels in
                the Leading Manufacture &amp; Suppliers Eco Friendly Paper Cups
                Raw Material in India. The company's commitment towards quality
                has always been the driving force behind its success and growth
                since its inspection and it continues to be its guideline into
                the future. Our main aim to maintain quality consistency while
                adding product safety and environmental sustainability.
              </p>
              <p>
                We believe that quality is a comprehensive aspect and should be
                ingrained in every stage from raw materials to processes and
                finally in the final product. So we follow rigid quality control
                procedures, from the raw material stage to the packing stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="newsletter_area"> </div>
  </Layout>)
}
