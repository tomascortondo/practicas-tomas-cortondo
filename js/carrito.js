import productos from "./productos.js"

const carritofrutas = []

let agregaralcarrito = (frutaid) => {
    if (frutaid > 0){
       const encontrado = productos.find(producto => producto.id === frutaid)
       if(typeof encontrado !== 'undefined') carritofrutas.push(encontrado)
        console.table(carritofrutas)
    } 
}

export default agregaralcarrito