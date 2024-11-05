import React from 'react'
import { Link } from 'gatsby';
import { bannerdata } from './data';

function breadcrumb(title, link, n=0){
  return [
  <li key={n}><Link to={link} title={title}> {title} </Link></li>,
  <li key={n+1}>/</li>]
}

export default function Banner({page, name=null}) {
  let data = bannerdata(page);
  if (page==='oneProd'){
    data.name = name;}

  let brcItems = breadcrumb('Home', '/', 0);
  if (page==='oneProd')
    brcItems.push( ...breadcrumb('Products', '/products/', 2));
  brcItems.push(<li key={4}><strong>{data.name}</strong></li>);

  return (<div>
    <div className="innerBanner">
      <img src={"/banner/"+data.img} alt={data.name}
           className="img-responsive" />
    </div>
    <div className="breadcrumb_area">
    <div className="container">
    <div className="row align-items-center">
      <div className="col-sm-6">
        <div className="breadcrumb_top">
        <ul id="breadcrumbs" className="breadcrumbs">
          {brcItems}
        </ul></div>
      </div>
      <div className="col-sm-6">
        <div className="breadcrumb_top">
          <h1>{data.name}</h1>
        </div>
      </div>
    </div> </div> </div>
  </div>)
}
