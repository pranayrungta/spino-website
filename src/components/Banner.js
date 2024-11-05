import React from 'react'

function breadcrumb(title, link, n=0){
  return [
  <li key={n}>
    <a href={link} title={title}> {title} </a>
  </li>,
  <li key={n+1}>/</li>]
}

function line_items(lastItem, isProduct){
  let litems = breadcrumb('Home', '/', 0);
  if (isProduct)
    litems.push( ...breadcrumb('Products', '/products/', 2));
  litems.push(<li key={4}><strong>{lastItem}</strong></li>);
  return litems
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
  const isOneProd = (page==='oneProd');
  if (isOneProd){ data.text = name; }
  const items = line_items(data.text, isOneProd)

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
