import React from "react"

const data = {machines : {
  "coating-machine"              : {imgsrc : "/machines/m-5.jpg", name : "Coating machine"             },
  "slitting-machine"             : {imgsrc : "/machines/m-4.jpg", name : "Slitting machine"            },
  "flexo-paper-printing-machine" : {imgsrc : "/machines/m-3.jpg", name : "Flexo Paper Printing Machine"},
  "die-cutting-machine"          : {imgsrc : "/machines/m-2.png", name : "Die cutting Machine"         },
  "paper-cup-machine"            : {imgsrc : "/machines/m-1.png", name : "Paper Cup Machine"           },
  },
  products : {
  "paper-plate-blanks"       : {imgsrc : "/products/9.png",              name : "Paper Plate Blanks"      },
  "aluminium-foil-container" : {imgsrc : "/products/2.png",              name : "Aluminium Foil Container"},
  "bobbin"                   : {imgsrc : "/products/Bobbin.png",         name : "Bobbin"                  },
  "laminated-lid"            : {imgsrc : "/products/Lids.png",           name : "Laminated LID"           },
  "paper-cups"               : {imgsrc : "/products/1.png",              name : "Paper Cups"              },
  "paper-cup-blanks"         : {imgsrc : "/products/Blanks.jpg",         name : "Paper Cup Blanks"        },
  "paper-straw"              : {imgsrc : "/products/paper.jpg",          name : "Paper Straw"             },
  "coated-paper"             : {imgsrc : "/products/Coated-Paper-2.png", name : "Coated Paper"            },
  "aluminium-home-foil"      : {imgsrc : "/products/Home-Foil.png",      name : "Aluminium Home Foil"     },
  "paper-tissue"             : {imgsrc : "/products/Tissue.png",         name : "Paper Tissue"            },
  }
}

export function get_data(fp, slug){
  fp = data[fp];
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
