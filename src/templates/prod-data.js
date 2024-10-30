import React from "react"
import Layout from "../components/Layout"

export function table(df){
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

export function get_data(fp, slug){
  // let fp = products_data();
  let prod = fp[slug];
  delete fp[slug];
  fp = Object.entries(fp).map(
    ([slug, value]) => ({slug, ...value }));
  return {prod: prod, fp:fp};
}

export function breadcrum(name) {
  return (<div className="breadcrumb_area">
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
  </div>)
}

export function featured(fp, machines=false){
  let route = '';
  if (machines){ route = 'machines'; }
  else { route = 'products';}

  return (<div className="featured_products related_product">
  <div className="container">
    <h2><span>Related</span> Products</h2>
    <div className="pro-row">
    <div className="productslide">
    {fp.map((p,index)=> {return (
      <div key={index}>
      <div className="pro-con">
        <div className="prod-img">
          <a href={`/${route}/${p.slug}`}>
          <img src={p.imgsrc} alt="" />
          </a>
        </div>
        <div className="pro-sec">
          <h3><a href={`/${route}/${p.slug}`}>
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


function products_data(){
  return {
    "paper-plate-blanks"       : {imgsrc : "/products/9.png"             , name : "Paper Plate Blanks"      },
    "aluminium-foil-container" : {imgsrc : "/products/2.png"             , name : "Aluminium Foil Container"},
    "bobbin"                   : {imgsrc : "/products/Bobbin.png"        , name : "Bobbin"                  },
    "laminated-lid"            : {imgsrc : "/products/Lids.png"          , name : "Laminated LID"           },
    "paper-cups"               : {imgsrc : "/products/1.png"             , name : "Paper Cups"              },
    "paper-cup-blanks"         : {imgsrc : "/products/Blanks.jpg"        , name : "Paper Cup Blanks"        },
    "paper-straw"              : {imgsrc : "/products/paper.jpg"         , name : "Paper Straw"             },
    "coated-paper"             : {imgsrc : "/products/Coated-Paper-2.png", name : "Coated Paper"            },
    "aluminium-home-foil"      : {imgsrc : "/products/Home-Foil.png"     , name : "Aluminium Home Foil"     },
    "paper-tissue"             : {imgsrc : "/products/Tissue.png"        , name : "Paper Tissue"            } }
}

function tab_only(slug){
  let d = {
    "paper-plate-blanks"       : [['Size', 'As per Requirement'],
              ['Bag Packing', '30 Kg']],
    "aluminium-foil-container" : [['Size', '120 ml', '230 ml', '250 ml', '450 ml', '660 ml', '750 ml'],
              ['Packing(Pcs)', '100', '100', '100', '100', '100', '100'],
              ['Box Packing (Pcs)', '3750', '1650', '1750', '1750', '1750', '1750'],
              ['Thickness(Micron)', '34', '34', '34', '35', '38', '38']],
    "bobbin"                   : [['Size', 'As per Requirement'],
              ['Packing (in Kgs)', 'As per Requirement']],
    "laminated-lid"            : [['Size', '120 ml', '150 ml', '200 ml', '230 ml', '250 ml', '450 ml', '660 ml', '750 ml'],
              ['Packing (Pcs)', '100', '100', '100', '100', '100', '100', '100', '100'],
              ['Box Packing (Pcs)', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity']],
    "paper-cups"               : [['Size', '40 ml', '50 ml', '60 ml', '80 ml', '100 ml', '150 ml', '210 ml', '250 ml'],
              ['Packing(Pcs)', '100', '100', '100', '100', '100', '100', '100', '100'],
              ['Box Packing(Pcs)', '7800', '6600', '6600', '5500', '4500', '2500', '2500', '2500'],
              ['Thickness(GSM)', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162']],
    "paper-straw"              : [['Size', '6 mm', '8 mm', '10 mm'],
              ['Packing (Pcs)', '50', '50', '50'],
              ['Box Packing (Pcs)', '5000', '5000', '5000']],
    "aluminium-home-foil"      : [['Size', '9 Mtrs', '72 Mtrs', '72 No.', '75 No.'],
              ['Micron', '10.5 Micron', '10.5 Micron', '10.5 Micron', '10.5 Micron'],
              ['Box Packing (Pcs)', '100', '25', '25', '25']],
    "paper-tissue"             : [['Size', '20 X 20', '24 X 24', '30 X 30', '33 X 33'],
              ['Packing (Pcs)', '50', '50', '50', '50'],
              ['Box Packing (Pcs)', '500', '500', '500', '500']]
  }
  const pd = products_data();
  return (<div class="col-sm-8">
    <h2>{pd[slug].name}</h2>
    <h6>Size Available :</h6>
    {table(d[slug])}
    <hr />
  </div>)
}

function paper_cup_banks(name){
  let tab = table([['Size', 'As per Requirement'],
                   ['Bag Packing', '25 Kg']]);
  return (<div class="col-sm-8">
    <h2>{name}</h2>
    <p>PLAIN, SINGLE COLOUR, TWO COLOUR, MULTI COLOUR</p>
    <h6>Size Available :</h6>
    {tab}
    <hr />
  </div>)
}

function coated_paper(name){
  return (<div class="col-sm-8">
    <h2>{name}</h2>
    <h6>Size Available :</h6>
    <hr />
  </div>)
}


function product_details(slug){
  let maps = {"paper-cup-blanks" : paper_cup_banks,
              "coated-paper"     : coated_paper};
  if (slug in maps){
    const name = products_data()[slug].name;
    return maps[slug](name);
  }
  return tab_only(slug)
}


export function prodpage(slug){
  const alldata = get_data(products_data(), slug)
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
      {product_details(slug)}
    </div>
    </div>
    </div>
    {featured(alldata.fp)}
    <div className="newsletter_area"></div>
  </Layout>)
}
