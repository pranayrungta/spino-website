import * as React from "react"
import Layout from "../components/Layout"
import "./../styles/homebanner.css"

function HomeBanner() {
  let files = ['Paper-Cup-1.png', 'Paper-Plate.png', 'Coated-Paper-1.png',
  'Aluminium-Foil-Container.png', 'Paper-Straws.png', 'Machinery.png' ]
  return (<div>
    <div id="carouselExample" className="carousel slide home_banner">
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={"/banner/" + files[0]}
            className="d-block w-100" alt="..."/>
        </div>
        {files.slice(1).map((file, index)=>{ return (
          <div className="carousel-item" key={index}>
          <img src={"/banner/" + file}
              className="d-block w-100" alt="..."/>
          </div>
        )})}
      </div>
      <button className="carousel-control-prev" type="button"
              data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button"
              data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>)
}

function Story() {
  return (
    <div className="home_about">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-6" data-aos="fade-right" data-aos-duration="3000">
          <img src="/banner/about-1.jpg" alt="" />
        </div>
        <div className="col-sm-6" data-aos="fade-left" data-aos-duration="3000">
          <h2>About Us</h2>
          <div className="abText">
            <p>
              Established in 2012, We are based out of Kolkata and are one of
              the leading Manufacturers of Aluminum Foil Container, Aluminum
              Home Foil, Paper Cup, Raw Material for Paper Cups viz. paper
              coating, printing, blanking etc. We also deal in wide range of
              Paper Cup related Machinery like &#8211; High-Speed Paper Cup
              Making Machine, Flexo Printing Machine, Automatic Roll Die
              Cutting Machine etc. with full end to end support.
            </p>
            <p>
              Offered products are made from superior quality raw materials
              supplied by our highly reliable vendors end under the direction
              of experienced professionals. Owing to their excellent
              performance, low maintenance, and superior quality, these
              products are highly acclaimed among our precious patrons.
            </p>
            <p>
              We procure our offered paper making machine from highly popular
              and trusted vendors of the industry. Our vendors offer us only
              superb quality products. These authentic and certified vendors
              are the use of ultra-modern machines and tools to manufacture
              the offered range of products. These vendors are well known
              about our client&#8217;s specific needs. Thus, they are
              producing the products as per our client&#8217;s demands. Apart
              from this, we are offering these products at budget-friendly
              prices within the requested frame of time as per the
              client&#8217;s detailed demands.
            </p>
          </div>
          <a href="/about-us/" className="btnmore">Read More</a>
        </div>
      </div>
    </div>
    </div>
    )
}

function ProductCarousel() {
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

export default function Home() {
  return (<Layout>
    <HomeBanner/>
    <Story/>
    <ProductCarousel/>
    <div className="newsletter_area"> </div>
  </Layout>)
}
