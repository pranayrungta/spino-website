import React from "react"
import Layout from "../components/Layout"

function get_data(slug){
  let alldata = {
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
  return alldata[slug]
}


export default function Products({pageContext}) {
  const slug = pageContext.slug;
  const data = get_data(slug)
  return (<Layout>
    item : {slug}
    <br/>
    {data['name']}
    <img src={data['imgsrc']} alt=""/>


  </Layout>)
}

