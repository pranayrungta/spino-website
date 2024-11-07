import React from 'react'
import Layout from "../components/Layout"
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.slim.min.js"
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from '../components/Banner';
import { data } from '../templates/prod-data';
import { Link } from 'gatsby';

function dataRow(key){
  const items = data[key];
  return (<div className="row">
  {Object.keys(items).map((slug, index)=> {return (
    <div className="col-sm-4" key={index}>
    <div className="pro-con">
      <div className="prod-img">
        <Link to={'/'+key+'/'+slug}>
        <img src={items[slug].imgsrc} alt={items[slug].name}/>
        </Link>
      </div>
      <div className="pro-sec">
        <h3> <Link to={'/'+key+'/'+slug}>{items[slug].name}</Link> </h3>
      </div>
    </div> </div>
  )})}
  </div>)
}

export default function Products() {
  return (<Layout>
    <Banner page='prod'/>
    <div className="innerbody featured_products">
    <div className="container">
    <div className="white_bg">
    <section id="tabs" className="project-tab">
    <div className="row">
    <div className="col-md-12">
      <nav>
      <div className="nav nav-tabs nav-fill" id="myTab" role="tablist">
          <button className="nav-item nav-link active" id="prod-tab"
              data-bs-toggle="tab" data-bs-target="#prod-pane"
              type="button" role="tab" aria-controls="prod-pane"
              aria-selected="true">
                Products
          </button>
          <button className="nav-item nav-link" id="mach-tab"
              data-bs-toggle="tab" data-bs-target="#mach-pane"
              type="button" role="tab" aria-controls="mach-pane"
              aria-selected="false">
                Machines
          </button>
      </div>
      </nav>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active"
            id="prod-pane" role="tabpanel" aria-labelledby="prod-tab">
          {dataRow('products')}
        </div>
        <div className="tab-pane fade"
            id="mach-pane" role="tabpanel" aria-labelledby="mach-tab">
          {dataRow('machines')}
        </div>
      </div>
    </div> </div> </section> </div> </div> </div>
    <div className="newsletter_area"> </div>
  </Layout>)
}
