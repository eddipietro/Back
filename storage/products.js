const Container = require('./Container.js')
let products = new Container('products.txt')

module.exports = products

let test1 = async () => {
    try {
        console.log(products)
        await products.save({
            title: 'Ravioles',                     
            price: 270,           
            thumbnail: 'https://i.postimg.cc/pL63Zpv6/ravioles.jpg'
        })
        await products.save({
            title: 'Fideos',
            price: 250,       
            thumbnail: 'https://i.postimg.cc/SQn2TPc1/fideos.jpg'
        })
        await products.save({
            title: 'Ñoquis',
            price: 250,           
            thumbnail: 'https://i.postimg.cc/fb3QnY5s/oquis.webp'
        })
    } catch(error) {
        console.log(error)
    }
}
  
//test1()

let test2 = async () => {
    try {
        let products = await new Container('products2.txt')
        let p1 = await products.save({
            title: 'Ravioles',                     
            price: 270,           
            thumbnail: 'https://i.postimg.cc/pL63Zpv6/ravioles.jpg'
        })
        await products.save({
            title: 'Fideos',
            price: 250,       
            thumbnail: 'https://i.postimg.cc/SQn2TPc1/fideos.jpg'
        })
        await products.save({
            title: 'Ñoquis',
            price: 250,           
            thumbnail: 'https://i.postimg.cc/fb3QnY5s/oquis.webp'
        })
        console.log(await products.getById(1))
        console.log(await products.getById(5))
    } catch(error) {
        console.log(error)
    }
}
//test2()

let test3 = async () => {
    try {
        let products = await new Container('products3.txt')
        let p1 = await products.save({
            title: 'Ravioles',                     
            price: 270,           
            thumbnail: 'https://i.postimg.cc/pL63Zpv6/ravioles.jpg'
        })
        await products.save({
            title: 'Fideos',
            price: 250,       
            thumbnail: 'https://i.postimg.cc/SQn2TPc1/fideos.jpg'
        })
        await products.save({
            title: 'Ñoquis',
            price: 250,           
            thumbnail: 'https://i.postimg.cc/fb3QnY5s/oquis.webp'
        })
        //console.log(p3)
        console.log(await products.getAll())        
    } catch(error) {
        console.log(error)
    }
}
//test3()

let test4 = async () => {
    try {
        let products = await new Container('products4.txt')
        let p1 = await products.save({
            title: 'Ravioles',                     
            price: 270,           
            thumbnail: 'https://i.postimg.cc/pL63Zpv6/ravioles.jpg'
        })
        await products.save({
            title: 'Fideos',
            price: 250,       
            thumbnail: 'https://i.postimg.cc/SQn2TPc1/fideos.jpg'
        })
        await products.save({
            title: 'Ñoquis',
            price: 250,           
            thumbnail: 'https://i.postimg.cc/fb3QnY5s/oquis.webp'
        })
        //console.log(p3)
        await products.deleteById(2)
        console.log(await products.getAll())
    } catch(error) {
        console.log(error)
    }
}
//test4()

let test5 = async () => {
    let products = await new Container('products5.txt')
    await products.save({
        title: 'Ravioles',                     
        price: 270,           
        thumbnail: 'https://i.postimg.cc/pL63Zpv6/ravioles.jpg'
    })
    await products.save({
        title: 'Fideos',
        price: 250,       
        thumbnail: 'https://i.postimg.cc/SQn2TPc1/fideos.jpg'
    })
    await products.save({
        title: 'Ñoquis',
        price: 250,           
        thumbnail: 'https://i.postimg.cc/fb3QnY5s/oquis.webp'
    })
    await products.createOrReset('clean container')
}
//test5()

const productos = []

class Productos{
    constructor(){}

    getProductos(){
        return productos
    }

    saveProducto(producto){
        productos.push(producto);
        return producto;
    }
}
module.exports = Productos;