import React from 'react'
import Layout from "../components/Layout"
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.slim.min.js"
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from '../components/Banner';

function dataRow(data){
  return (<div className="row">
  {data.map((item, index)=> {return (
    <div className="col-sm-4" key={index}>
    <div className="pro-con">
      <div className="prod-img">
        <a href={item.to}> <img src={item.imgsrc} alt={item.name}/> </a>
      </div>
      <div className="pro-sec">
        <h3> <a href={item.to}>{item.name}</a> </h3>
      </div>
    </div> </div>
  )})}
  </div>)
}

export default function Products() {
  let data = {products: [
    {to: "/products/paper-straw"             , imgsrc : "/products/paper.jpg"         , name : "Paper Straw"              },
    {to: "/products/bobbin"                  , imgsrc : "/products/Bobbin.png"        , name : "Bobbin"                   },
    {to: "/products/paper-cup-blanks"        , imgsrc : "/products/Blanks.jpg"        , name : "Paper Cup Blanks"         },
    {to: "/products/paper-tissue"            , imgsrc : "/products/Tissue.png"        , name : "Paper Tissue"             },
    {to: "/products/laminated-lid"           , imgsrc : "/products/Lids.png"          , name : "Laminated LID"            },
    {to: "/products/coated-paper"            , imgsrc : "/products/Coated-Paper-2.png", name : "Coated Paper"             },
    {to: "/products/paper-cups"              , imgsrc : "/products/1.png"             , name : "Paper Cups"               },
    {to: "/products/paper-plate-blanks"      , imgsrc : "/products/9.png"             , name : "Paper Plate Blanks"       },
    {to: "/products/aluminium-foil-container", imgsrc : "/products/2.png"             , name : "Aluminium Foil Container" },
    {to: "/products/aluminium-home-foil"     , imgsrc : "/products/Home-Foil.png"     , name : "Aluminium Home Foil"      },
  ],
  machines : [
    {to: "/machines/coating-machine/"             , imgsrc : "/machines/m-5.jpg"  , name : "Coating machine"             },
    {to: "/machines/slitting-machine/"            , imgsrc : "/machines/m-4.jpg"  , name : "Slitting machine"            },
    {to: "/machines/flexo-paper-printing-machine/", imgsrc : "/machines/m-3.jpg"  , name : "Flexo Paper Printing Machine"},
    {to: "/machines/die-cutting-machine/"         , imgsrc : "/machines/m-2.png"  , name : "Die cutting Machine"         },
    {to: "/machines/paper-cup-machine/"           , imgsrc : "/machines/m-1.png"  , name : "Paper Cup Machine"           },
  ]};
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
          {dataRow(data.products)}
        </div>
        <div className="tab-pane fade"
            id="mach-pane" role="tabpanel" aria-labelledby="mach-tab">
          {dataRow(data.machines)}
        </div>
      </div>
    </div> </div> </section> </div> </div> </div>
    <div className="newsletter_area"> </div>
  </Layout>)
}
