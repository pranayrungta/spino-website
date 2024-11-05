import React from 'react'

function breadcrumb(title, link, n=0){
  return [
  <li key={n}>
    <a href={link} title={title}> {title} </a>
  </li>,
  <li key={n+1}>/</li>]
}

export default function Banner({page, name=null}) {
  const ad = {
    oneProd : {img:'pexels-photo-1108572.jpg', text: null },
    about   : {img:'pexels-photo-247599.jpg',  text: 'About us'},
    green   : {img:'pexels-photo-2886937.jpg', text: 'Eco Green Environment'},
    gallery : {img:'pexels-photo-145685.jpg',  text: 'Gallery'},
    invest  : {img:'pexels-photo-392018.jpg',  text: 'Investor Relations'},
    product : {img:'pexels-photo-1108572.jpg', text: 'Products'},
    qa      : {img:'why-hire-professional-auditor.png', text: 'Quality Assurance'},
    contact : {img:'hands-coffee-smartphone-technology.jpg', text: 'Contact us'},
  };

  let data = ad[page];
  if (page==='oneProd'){
    data.text = name;}

  let items = breadcrumb('Home', '/', 0);
  if (page==='oneProd')
    items.push( ...breadcrumb('Products', '/products/', 2));
  items.push(<li key={4}><strong>{data.text}</strong></li>);

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
          {items}
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
