const path = require('path')

exports.createPages = async({graphql, actions}) => {
    const slugs = ["paper-plate-blanks", "aluminium-foil-container",
        "bobbin", "laminated-lid", "paper-cups", "paper-cup-blanks",
        "paper-straw", "coated-paper", "aluminium-home-foil",
        "paper-tissue"];
    slugs.map((slug)=>{
        actions.createPage({
            path: "/products/"+slug,
            component: path.resolve('./src/templates/products.js'),
            context : {slug: slug}
        })
    })
}


exports.createPages = async({graphql, actions}) => {

    const slugs = ["coating-machine", "slitting-machine",
        "flexo-paper-printing-machine", "die-cutting-machine",
        "paper-cup-machine"];
    slugs.map((slug)=>{
        actions.createPage({
            path: "/machines/"+slug,
            component: path.resolve('./src/templates/machines.js'),
            context : {slug: slug}
        })
    })
}

