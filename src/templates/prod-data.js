import React from "react"
import {productData} from './../components/data'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const {onClick} = props;
  return (<div className='slick-next'
         onClick={onClick}
         onKeyDown={onClick}
         role="presentation" />);
}
function PrevArrow(props) {
  const {onClick} = props;
  return (<div className='slick-prev'
         onClick={onClick}
         onKeyDown={onClick}
         role="presentation" />);
}
export function ResponsiveSlider({pd='all'}) {
  let prods = productData.products;
  if (pd!=='all') prods = pd;
  var settings = {
    dots: true, infinite: false, speed: 500,
    slidesToShow: 4, slidesToScroll: 4, initialSlide: 0,
    nextArrow : <NextArrow/>,
    prevArrow : <PrevArrow/>,
    responsive: [
      {breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      {breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      {breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ] };
  return (<div className="slickprod featured_products">
    <div className="slider-container container">
      <h2><span>Our</span> Products</h2>
      <div className="pro-row productslide">
      <Slider {...settings}>
        {Object.keys(prods).map((slug,i)=> {return (
          <div key={i}>
          <div className="pro-con">
            <div className="prod-img">
              <a href={'/products/'+slug}>
                <img src={prods[slug].imgsrc} alt={prods[slug].name}/>
              </a>
            </div>
            <div className="pro-sec">
              <h5><a href={'/products/'+slug}>{prods[slug].name}</a></h5>
            </div>
          </div></div>
        )})}
      </Slider>
      </div>
    </div>
  </div>);
}

export function get_data(fp, slug){
  let prod = productData[fp][slug];
  let otherprods = {...productData[fp]};
  delete otherprods[slug]
  // otherprods = Object.entries(otherprods).map(
  //   ([slug, value]) => ({to:`/${fp}/${slug}`, ...value }));
  return {prod: prod, fp:otherprods};
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

export function featured(fp){
  return (<>
  <ResponsiveSlider pd={fp}/>
  </>)
}
