import React from 'react'
import "./../styles/homebanner.css"

export default function HomeBanner() {
  let files = ['Paper-Cup-1.png', 'Paper-Plate.png', 'Coated-Paper-1.png',
  'Aluminium-Foil-Container.png', 'Paper-Straws.png', 'Machinery.png' ]
  return (<div>
    <div id="carouselExample" className="carousel slide home_banner">
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={"/home/" + files[0]}
            className="d-block w-100" alt="..."/>
        </div>
        {files.slice(1).map((file, index)=>{ return (
          <div className="carousel-item" key={index}>
          <img src={"/home/" + file}
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
