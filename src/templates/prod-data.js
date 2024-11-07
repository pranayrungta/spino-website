import React from "react"
import {productData} from './../components/data'

export function ProductCarousel() {
  const prods =  productData.products
  return (<div className="featured_products">
    <div className="container">
      <h2><span>Our</span> Products</h2>
      <div className="pro-row">
      <div className="productslide row">  {/*className='row' added later*/}
        {Object.keys(prods).slice(0, 9).map((slug, i)=>{ return (
          <div key={i} className='col-4'>  {/*className='col-4' added later*/}
          <div className="pro-con">
            <div className="prod-img">
              <a href={'/products/'+slug}>
                <img src={prods[slug].imgsrc} alt={prods[slug].name}/>
              </a>
            </div>
            <div className="pro-sec">
              <h3><a href={'/products/'+slug}>{prods[slug].name}</a></h3>
            </div>
          </div></div>
        )})}
      </div> </div>
    </div></div>)
}

export function get_data(fp, slug){
  fp = productData[fp];
  let prod = fp[slug];
  let alldata = {...fp};
  delete alldata[slug]
  alldata = Object.entries(alldata).map(
    ([slug, value]) => ({slug, ...value }));
  return {prod: prod, fp:alldata};
}

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

export function featured(fp, machines=false){
  let route = '';
  if (machines){ route = 'machines'; }
  else { route = 'products';}

  return (<div className="featured_products related_product">
  <div className="container">
    <h2><span>Related</span> Products</h2>
    <div className="pro-row">
    <div className="productslide row"> {/* row added later */}
    {fp.map((p,index)=> {return (
      <div key={index} className="col-4">    {/* col-4 added later */}
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
      </div> </div>
    )})}
    </div> </div>
  </div> </div>)
}
