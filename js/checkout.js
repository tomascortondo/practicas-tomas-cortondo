const tbody = document.querySelector('tbody')
const btnComprar = document.querySelector('button#btnComprar')

const retornarTablaHTML = (producto) => {
    return `<tr>
                <td>${producto.imagen}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>                
            </tr>`

                    }

if(carritoProductos.length > 0){
    tbody.innerHTML = ''
    carritoProductos.forEach((producto) => tbody.innerHTML += retornarTablaHTML(producto))
}

btnComprar.addEventListener('click', () => {
    alert('Muchas Gracias por su Compra')
    localStorage.removeItem('carritoProductos')
    tbody.innerHTML = ''
})