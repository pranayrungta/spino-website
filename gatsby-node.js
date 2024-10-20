const path = require('path')

exports.createPages = async({graphql, actions}) => {
    const data  = ['paper', 'bobbin'];
    data.map((item)=>{
        actions.createPage({
            path: `/categories/`+item,
            component: path.resolve(`./src/templates/categories.js`),
            context : {item: item}
        })
    })
}

