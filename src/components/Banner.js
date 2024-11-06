import React from 'react'
import { Link } from 'gatsby';
import { bannerdata } from './data';

function breadcrumb(d, n=0){
  return [
  <li key={n}><Link to={d.to} title={d.name}> {d.name} </Link></li>,
  <li key={n+1}>/</li>]
}

export default function Banner({page, name=null}) {
  const data = bannerdata(page, name);

  let brcItems = breadcrumb(data.home, 0);
  if (page==='onprd')
    brcItems.push( ...breadcrumb(data.prod, 2));
  brcItems.push(<li key={4}><strong>{data.curr.name}</strong></li>);

  return (<div>
    <div className="innerBanner">
      <img src={"/banner/"+data.curr.img} alt={data.curr.name}
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
          <h1>{data.curr.name}</h1>
        </div>
      </div>
    </div> </div> </div>
  </div>)
}
