import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import {table, get_data, featured} from './prod-data'

function tab_only(slug, name){
  let d = {
    "paper-plate-blanks"       :
       [['Size', 'As per Requirement'],
        ['Bag Packing', '30 Kg']],
    "aluminium-foil-container" :
       [['Size', '120 ml', '230 ml', '250 ml', '450 ml', '660 ml', '750 ml'],
        ['Packing(Pcs)', '100', '100', '100', '100', '100', '100'],
        ['Box Packing (Pcs)', '3750', '1650', '1750', '1750', '1750', '1750'],
        ['Thickness(Micron)', '34', '34', '34', '35', '38', '38']],
    "bobbin"                   :
       [['Size', 'As per Requirement'],
        ['Packing (in Kgs)', 'As per Requirement']],
    "laminated-lid"            :
       [['Size', '120 ml', '150 ml', '200 ml', '230 ml', '250 ml', '450 ml', '660 ml', '750 ml'],
        ['Packing (Pcs)', '100', '100', '100', '100', '100', '100', '100', '100'],
        ['Box Packing (Pcs)', 'As per Container Quantity', 'As per Container Quantity',
         'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity',
         'As per Container Quantity', 'As per Container Quantity', 'As per Container Quantity']],
    "paper-cups"               :
       [['Size', '40 ml', '50 ml', '60 ml', '80 ml', '100 ml', '150 ml', '210 ml', '250 ml'],
        ['Packing(Pcs)', '100', '100', '100', '100', '100', '100', '100', '100'],
        ['Box Packing(Pcs)', '7800', '6600', '6600', '5500', '4500', '2500', '2500', '2500'],
        ['Thickness(GSM)', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162', '152-162']],
    "paper-straw"              :
       [['Size', '6 mm', '8 mm', '10 mm'],
        ['Packing (Pcs)', '50', '50', '50'],
        ['Box Packing (Pcs)', '5000', '5000', '5000']],
    "aluminium-home-foil"      :
       [['Size', '9 Mtrs', '72 Mtrs', '72 No.', '75 No.'],
        ['Micron', '10.5 Micron', '10.5 Micron', '10.5 Micron', '10.5 Micron'],
        ['Box Packing (Pcs)', '100', '25', '25', '25']],
    "paper-tissue"             :
       [['Size', '20 X 20', '24 X 24', '30 X 30', '33 X 33'],
        ['Packing (Pcs)', '50', '50', '50', '50'],
        ['Box Packing (Pcs)', '500', '500', '500', '500']]
  }
  return (<div className="col-sm-8">
    <h2>{name}</h2>
    <h6>Size Available :</h6>
    {table(d[slug])}
    <hr />
  </div>)
}

function paper_cup_banks(name){
  let tab = table([['Size', 'As per Requirement'],
                   ['Bag Packing', '25 Kg']]);
  return (<div className="col-sm-8">
    <h2>{name}</h2>
    <p>PLAIN, SINGLE COLOUR, TWO COLOUR, MULTI COLOUR</p>
    <h6>Size Available :</h6>
    {tab}
    <hr />
  </div>)
}

function coated_paper(name){
  return (<div className="col-sm-8">
    <h2>{name}</h2>
    <h6>Size Available :</h6>
    <hr />
  </div>)
}

function product_details(slug, curprod){
  let maps = {"paper-cup-blanks" : paper_cup_banks,
              "coated-paper"     : coated_paper};
  const name = curprod.name;
  if (slug in maps)
    return maps[slug](name);
  return tab_only(slug, name);
}

export default function Products({pageContext}) {
  const slug = pageContext.slug ;
  const alldata = get_data('products', slug)
  const curprod = alldata.prod;

  return (<Layout>
    <Banner page='onprd' name={curprod.name}/>
    <div className="innerbody product_details">
    <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="service_img">
        <img src={curprod.imgsrc} alt={curprod.name}
          className="img-responsive img-thumbnail" />
        </div>
      </div>
      {product_details(slug, curprod)}
    </div> </div> </div>
    {featured(alldata.fp)}
    <div className="newsletter_area"></div>
  </Layout>)
}
