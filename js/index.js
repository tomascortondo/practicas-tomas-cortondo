
const col = document.querySelector('div.container')

function retornarcardHTML(producto) {
     return  `<div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.precio}</p>
              <div class="card-button">
                <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
            </div>
          </div>
        </div>`;}
     
    /* <div class="card">
                <div class="card-image"><img src="${producto.imagen}"></div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`;}*/


const cargarproductos = (array) => {
    if(array.length > 0){
        array.forEach(producto => {
            container.innerHTML += retornarcardHTML(producto)
        });
    }
}

cargarproductos(productos)


const activarclickenbotones = () => {
    const botonesagregar = document.querySelectorAll('.button.button-outline.button-add')
    if (typeof botonesagregar !== null){
        for (const boton of botonesagregar){
            boton.addEventListener('click',(event)=>{
                agregaralcarrito(event.target.id)
            })
        }
    }
}


cargarproductos (productos);
activarclickenbotones()