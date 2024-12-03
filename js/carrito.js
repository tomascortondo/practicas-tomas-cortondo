const agregarAlCarrito = (productoId) => {
    if(productoId > 0){
       let productoEncontrado = productos.find((producto) => producto.id === parseInt(productoId))
       if(productoEncontrado !== undefined){
        carritoProductos.push(productoEncontrado)
        almacenarCarrito()
       }
    }
}

const almacenarCarrito = () => {
    carritoProductos.length > 0 && localStorage.setItem('carritoProductos', JSON.stringify(carritoProductos))
}

const recuperarCarrito = () => {
    return JSON.parse(localStorage.getItem('carritoProductos')) || []
}

const carritoProductos = recuperarCarrito()