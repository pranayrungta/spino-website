import React from "react"
import Layout from "../components/Layout"

function get_data(slug, fulldata){
  let fp = fulldata;
  let prod = fp[slug];
  delete fp[slug];
  fp = Object.entries(fp).map(
    ([slug, value]) => ({slug, ...value }));
  return {prod: prod, fp:fp};
}

function table(df){
  return (<div className="table-responsive">
  <table>
  <tbody>
    {df.map((row, idi)=>{return (<tr key={idi}>
      <td><strong>{row[0]}</strong></td>
      {row.slice(1).map((e, idj) =>
        (<td key={idj}>{e}</td>))}
    </tr>)})}
  </tbody>
  </table>
</div>)
}

function banner(name) {
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

function featured(fp){
  return (<div className="featured_products related_product">
  <div className="container">
    <h2><span>Related</span> Products</h2>
    <div className="pro-row">
    <div className="productslide">
    {fp.map((p,index)=> {return (
      <div key={index}>
      <div className="pro-con">
        <div className="prod-img">
          <a href={"/products/"+p.slug}>
          <img src={p.imgsrc} alt="" />
          </a>
        </div>
        <div className="pro-sec">
          <h3><a href={"/products/"+p.slug}>
            {p.name}
          </a></h3>
        </div>
      </div>
      </div>
    )})}
    </div>
    </div>
  </div>
  </div>)
}

export function fullpage(slug, fulldata){
  const ad = get_data(slug, fulldata)
  const data = ad.prod;

  return (<Layout>
    {banner(data.name)}

    <div className="innerbody product_details">
    <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="service_img">
        <img src={data.imgsrc} alt={data.name}
          className="img-responsive img-thumbnail" />
        </div>
      </div>
      <div className="col-sm-8">
        <h2>{data.name}</h2>
        <h6>Size Available :</h6>
        {table(data.data)}
        <hr />
      </div>
    </div>
    </div>
    </div>
    {featured(ad.fp)}
  </Layout>)
}


function products_data(){
  return {
    "paper-plate-blanks"       : {imgsrc : "/products/9.png"             , name : "Paper Plate Blanks"      , data : [['Size', 'As per Requirement'], ['Bag Packing', '30 Kg']] },
    "aluminium-foil-container" : {imgsrc : "/products/2.png"             , name : "Aluminium Foil Container", data : [['Size', '120 ml', '230 ml', '250 ml', '450 ml', '660 ml', '750 ml'], ['Packing(Pcs)', '100', '100', '100', '100', '100', '100'], ['Box Packing (Pcs)', '3750', '1650', '1750', '1750', '1750', '1750'], ['Thickness(Micron)', '34', '34', '34', '35', '38', '38']] },
    "bobbin"                   : {imgsrc : "/products/Bobbin.png"        , name : "Bobbin"                  , data : [['Size', 'As per Requirement'], ['Packing (in Kgs)', 'As per Requirement']] },
    "laminated-lid"            : {imgsrc : "/products/Lids.png"          , name : "Laminated LID"           , data : [['Size', '120 ml', '150 ml', '200 ml', '230 ml', '250 ml', '450 ml', '660 ml', '750 ml'], ['Packing (Pcs)', '100', '100', '100', '100', '100', '100', '100', '100'], ['Box Packing (Pcs)', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity']] },
    "paper-cups"               : {imgsrc : "/products/1.png"             , name : "Paper Cups"              , data : [['Size', '40 ml', '50 ml', '60 ml', '80 ml', '100 ml', '150 ml', '210 ml', '250 ml'], ['Packing(Pcs)', '100', '100', '100', '100', '100', '100', '100', '100'], ['Box Packing(Pcs)', '7800', '6600', '6600', '5500', '4500', '2500', '2500', '2500'], ['Thickness(GSM)', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162']] },
    "paper-cup-blanks"         : {imgsrc : "/products/Blanks.jpg"        , name : "Paper Cup Blanks"        , data : [['Size', 'As per Requirement'], ['Bag Packing', '25 Kg']] },
    "paper-straw"              : {imgsrc : "/products/paper.jpg"         , name : "Paper Straw"             , data : [['Size', '6 mm', '8 mm', '10 mm'], ['Packing (Pcs)', '50', '50', '50'], ['Box Packing (Pcs)', '5000', '5000', '5000']] },
    "coated-paper"             : {imgsrc : "/products/Coated-Paper-2.png", name : "Coated Paper"            , data : [] },
    "aluminium-home-foil"      : {imgsrc : "/products/Home-Foil.png"     , name : "Aluminium Home Foil"     , data : [['Size', '9 Mtrs', '72 Mtrs', '72 No.', '75 No.'], ['Micron', '10.5 Micron', '10.5 Micron', '10.5 Micron', '10.5 Micron'], ['Box Packing (Pcs)', '100', '25', '25', '25']] },
    "paper-tissue"             : {imgsrc : "/products/Tissue.png"        , name : "Paper Tissue"            , data : [['Size', '20 X 20', '24 X 24', '30 X 30', '33 X 33'], ['Packing (Pcs)', '50', '50', '50', '50'], ['Box Packing (Pcs)', '500', '500', '500', '500']] }
  }
}

export default function Products({pageContext}) {
  return fullpage(pageContext.slug, products_data())
}
