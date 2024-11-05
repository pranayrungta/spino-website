import React from 'react'
import "./../styles/responsive.css"
import "./../styles/style.css"

export default function ProductCarousel() {
  const products = [
    {link:"/products/paper-straw/",      text:"Paper Straw"       , imgsrc: "/products/paper.jpg"           },
    {link:"/products/bobbin/",           text:"Bobbin"            , imgsrc: "/products/Bobbin.png"          },
    {link:"/products/paper-cup-blanks/", text:"Paper Cup Blanks"  , imgsrc: "/products/Blanks.jpg"          },
    {link:"/products/paper-tissu/",      text:"Paper Tissue"      , imgsrc: "/products/Tissue.png"          },
    {link:"/products/laminated-lid/",    text:"Laminated LID"     , imgsrc: "/products/Lids.png"            },
    {link:"/products/coated-paper/",     text:"Coated Paper"      , imgsrc: "/products/Coated-Paper-2.png"  },
    {link:"/products/paper-cups/",       text:"Paper Cups"        , imgsrc: "/products/1.png"               },
    {link:"/products/test/",             text:"Paper Plate Blanks", imgsrc: "/products/9.png"               },
  ];
  return (<div className="featured_products">
    <div className="container">
      <h2><span>Our</span> Products</h2>
      <div className="pro-row">
      <div className="productslide row">  {/*className='row' added later*/}
        {products.map((p,i)=>{return (
          <div key={i} className='col-4'>  {/*className='col-4' added later*/}
          <div className="pro-con">
            <div className="prod-img">
              <a href={p.link}>
                <img src={p.imgsrc} alt={p.text}/>
              </a>
            </div>
            <div className="pro-sec">
              <h3><a href={p.link}>{p.text}</a></h3>
            </div>
          </div></div>
        )})}
      </div> </div>
    </div></div>)
}
