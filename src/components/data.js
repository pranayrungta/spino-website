const data = {
  cntct: {
    name: "Contact us",
    to: "/contact/",
    img: "hands-coffee-smartphone-technology.jpg",
  },
  qlas: {
    name: "Quality Assurance",
    to: "/quality-assurance/",
    img: "why-hire-professional-auditor.png",
  },
  invst: {
    name: "Investor Relations",
    to: "/investor-relations/",
    img: "pexels-photo-392018.jpg",
  },
  green: {
    name: "Eco Green Environment",
    to: "/eco-green-environment/",
    img: "pexels-photo-2886937.jpg",
  },

  home: { name: "Home", to: "/", img: null },
  glry: { name: "Gallery", to: "/gallery/", img: "pexels-photo-145685.jpg" },
  prod:  { name: "Products", to: "/products/", img: "pexels-photo-1108572.jpg" },
  abtnv: {name: "About us",  to: "#",          img: "pexels-photo-247599.jpg"}, // nav dropdown
  abtus: {name: "Our Story", to: "/about-us/", img: "pexels-photo-247599.jpg"}, // nav
  abtft: {name: "About us",  to: "/about-us/", img: "pexels-photo-247599.jpg"}, // footer
};

export const productData = {
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
  },
  machines : {
  "coating-machine"              : {imgsrc : "/machines/m-5.jpg", name : "Coating machine"             },
  "slitting-machine"             : {imgsrc : "/machines/m-4.jpg", name : "Slitting machine"            },
  "flexo-paper-printing-machine" : {imgsrc : "/machines/m-3.jpg", name : "Flexo Paper Printing Machine"},
  "die-cutting-machine"          : {imgsrc : "/machines/m-2.png", name : "Die cutting Machine"         },
  "paper-cup-machine"            : {imgsrc : "/machines/m-1.png", name : "Paper Cup Machine"           },
  },
}

export function navlinks(){
  return {
    base : [data.home, data.abtnv, data.prod,
            data.glry, data.cntct, data.invst],
    about : [data.abtus, data.qlas, data.green]
  }
}

export function footerlinks(){
  return {
    quickLinks : [data.prod, data.green, data.qlas],
    coInfo : [data.abtft, data.glry, data.cntct, data.invst]
  }
}

export function bannerdata(page, name){
  let d = {home: data.home, prod: data.prod, curr: data[page]};
  if (page==='onprd'){
    d.curr = {name: name, img: data.prod.img};}
  return d;
}

export function contact_details(){
  return {
    phone:{mark: 'fa-phone', t1: '(+91) 7890975602', t2: '(+91)9674703249'},
    email:{mark: 'fa-envelope-o', val: 'enquiry@spino.co.in'},
    addr1:{mark: 'fa-map-marker',}
  }
}

export function social(){
  return [
    {stype:"fa fa-instagram", to:"https://www.instagram.com/spino_paper"},
    {stype:"fa fa-facebook", to:"https://www.facebook.com/spinopapers"},
    {stype:"fa fa-youtube", to:"https://www.youtube.com/" } ];
}
