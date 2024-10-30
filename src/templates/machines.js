import React from "react"
import Layout from "../components/Layout"
import { table, get_data, breadcrum, featured } from "./prod-data";

function machines_data(){
  return {
    "coating-machine"              : {imgsrc : "/machines/m-5.jpg"  , name : "Coating machine"             , data : [] },
    "slitting-machine"             : {imgsrc : "/machines/m-4.jpg"  , name : "Slitting machine"            , data : [] },
    "flexo-paper-printing-machine" : {imgsrc : "/machines/m-3.jpg"  , name : "Flexo Paper Printing Machine", data : [] },
    "die-cutting-machine"          : {imgsrc : "/machines/m-2.png"  , name : "Die cutting Machine"         , data : [] },
    "paper-cup-machine"            : {imgsrc : "/machines/m-1.png"  , name : "Paper Cup Machine"           , data : [] },
  }
}

function machpage(slug){
  const alldata = get_data(machines_data(), slug)
  const curprod = alldata.prod;

  return (<Layout>
    <div>
      <div className="innerBanner">
        <img src="/banner/pexels-photo-1108572.jpg"
          alt="" className="img-responsive"/>
      </div>
      {breadcrum(curprod.name)}
    </div>

    <div className="innerbody product_details">
    <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="service_img">
        <img src={curprod.imgsrc} alt={curprod.name}
          className="img-responsive img-thumbnail" />
        </div>
      </div>
      {/* {product_details(slug)} */}
    </div>
    </div>
    </div>
    {featured(alldata.fp)}
  </Layout>)
}


export default function Machines({pageContext}) {
  return machpage(pageContext.slug)
}

