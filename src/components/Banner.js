import React from 'react'

function product(name){
  return (<div>
    <div className="innerBanner">
      <img src="/banner/pexels-photo-1108572.jpg"
        alt="" className="img-responsive"/>
    </div>
    <div className="breadcrumb_area">
    <div className="container">
    <div className="row align-items-center">
      <div className="col-sm-6">
      <div className="breadcrumb_top">
        <ul id="breadcrumbs" className="breadcrumbs">
          <li className="item-home">
          <a className="bread-link bread-home" href="/" title="Home">
            Home </a> </li>
          <li className="separator separator-home">/</li>
          <li className="item-home">
          <a className="bread-link bread-home" href="/products/"
            title="Products">
            Products </a> </li>
          <li className="separator separator-home">/</li>
          <li className="item-current item-15">
            <strong className="bread-current">
              {name} </strong>
          </li>
        </ul>
      </div>
      </div>
      <div className="col-sm-6">
        <div className="breadcrumb_top"><h1>{name}</h1></div>
      </div>
    </div>
    </div>
  </div>
  </div>)
}


export default function Banner({page, name=null}) {
  if (page=='product-detail')
    return product(name)
  const ad = {
    about   : {img:'pexels-photo-247599.jpg', text: 'About us'},
    contact : {img:'hands-coffee-smartphone-technology.jpg', text: 'Contact us'},
    green   : {img:'pexels-photo-2886937.jpg', text: 'Eco Green Environment'},
    gallery : {img:'pexels-photo-145685.jpg', text: 'Gallery'},
    invest  : {img:'pexels-photo-392018.jpg', text: 'Investor Relations'},
    product : {img:'pexels-photo-1108572.jpg', text: 'Products'},
    qa      : {img:'why-hire-professional-auditor.png', text: 'Quality Assurance'},
  };
  const data = ad[page];

  return (<div>
    <div className="innerBanner">
      <img src={"/banner/"+data.img} alt={data.text}
           className="img-responsive" />
    </div>
    <div className="breadcrumb_area">
    <div className="container">
    <div className="row align-items-center">
      <div className="col-sm-6">
        <div className="breadcrumb_top">
        <ul id="breadcrumbs" className="breadcrumbs">
          <li className="item-home">
            <a className="bread-link bread-home" href="/"
               title="Home"> Home </a> </li>
          <li className="separator separator-home">/</li>
          <li className="item-current">
            <strong className="bread-current"> {data.text}</strong> </li>
        </ul>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="breadcrumb_top">
          <h1>{data.text}</h1>
        </div>
      </div>
    </div> </div> </div>
  </div>)
}
