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
  // name assigned by each product in product details page
  onprd: { name: null,       to: "#",          img: "pexels-photo-1108572.jpg" },

  abtnv: {name: "About us",  to: "#",          img: "pexels-photo-247599.jpg"}, // nav dropdown
  abtus: {name: "Our Story", to: "/about-us/", img: "pexels-photo-247599.jpg"}, // nav
  abtft: {name: "About us",  to: "/about-us/", img: "pexels-photo-247599.jpg"}, // footer
};

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

export function bannerdata(page){
  const data_map = { // data.to is not used by caller
    oneProd : data.onprd,
    about   : data.abtft,
    green   : data.green,
    gallery : data.glry,
    invest  : data.invst,
    product : data.prod,
    qa      : data.qlas,
    contact : data.cntct,
  };
  return data_map[page];
}

export function social(){
  return [
    {stype:"fa fa-instagram", to:"https://www.instagram.com/spino_paper"},
    {stype:"fa fa-facebook", to:"https://www.facebook.com/spinopapers"},
    {stype:"fa fa-youtube", to:"https://www.youtube.com/" } ];
}
