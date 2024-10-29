import { fullpage } from "./products";

function machines_data(){
  return {
    "coating-machine"              : {imgsrc : "/machines/m-5.jpg"  , name : "Coating machine"             , data : [] },
    "slitting-machine"             : {imgsrc : "/machines/m-4.jpg"  , name : "Slitting machine"            , data : [] },
    "flexo-paper-printing-machine" : {imgsrc : "/machines/m-3.jpg"  , name : "Flexo Paper Printing Machine", data : [] },
    "die-cutting-machine"          : {imgsrc : "/machines/m-2.png"  , name : "Die cutting Machine"         , data : [] },
    "paper-cup-machine"            : {imgsrc : "/machines/m-1.png"  , name : "Paper Cup Machine"           , data : [] },
  }
}

export default function Machines({pageContext}) {
  return fullpage(pageContext.slug, machines_data())
}

