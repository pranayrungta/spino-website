import React from 'react'
import Layout from "../components/Layout"

function Banner(){
  return (<div>
  <div className="innerBanner">
  <img src="/banner/pexels-photo-145685.jpg" alt="gallery"
       className="img-responsive" />
</div>
<div className="breadcrumb_area">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-sm-6">
        <div className="breadcrumb_top">
          <ul id="breadcrumbs" className="breadcrumbs">
            <li className="item-home">
              <a className="bread-link bread-home" href="/" title="Home"
                >Home</a
              >
            </li>
            <li className="separator separator-home">/</li>
            <li className="item-current item-17">
              <strong className="bread-current bread-17"> Gallery</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="breadcrumb_top">
          <h1>Gallery</h1>
        </div>
      </div>
    </div>
  </div>
</div></div>)
}

export default function Gallery() {
  const files = ['0U5A2695.JPG', '0U5A2747.JPG', '0U5A2794.JPG',
    'IMG-20240910-WA0021.jpg', '0U5A2703.JPG', '0U5A2749.JPG',
    'IMG-20240910-WA0012.jpg', 'IMG-20240910-WA0023.jpg',
    '0U5A2707.JPG', '0U5A2758.JPG', 'IMG-20240910-WA0013.jpg',
    'IMG-20240910-WA0024.jpg', '0U5A2710.JPG', '0U5A2762.JPG',
    'IMG-20240910-WA0015.jpg', 'IMG-20240910-WA0026.jpg',
    '0U5A2716.JPG', '0U5A2771.JPG', 'IMG-20240910-WA0017.jpg',
    'printed-reel.jpg', '0U5A2722.JPG', '0U5A2780.JPG']
  return (<Layout>
    <Banner/>
    <div className="innerbody">
      <div className="container">
        <div className="white_bg">
          <div className="row" id="allimages">
            {files.map((file, index)=>{return (
              <div className="col-sm-4" key={index}>
              <div className="gallery-img">
                <a className="fancybox" rel="ligthbox"
                   href={"/gallery/"+file} title="Image" >
                  <img src={"/gallery/"+file} alt={file}
                       className="img-thumbnail img-responsive" />
                </a>
              </div>
            </div>)})}
          </div>
        </div>
      </div>
    </div>
    <div className="newsletter_area"> </div>
  </Layout>)
}
