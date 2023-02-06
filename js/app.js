let formulario = document.querySelector("#formulario");
let resultado = document.querySelector(".resultado");

function validacionMail() {
  var correo = document.querySelector("#mail").value;
  const mostrarMensaje = formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    if (correo === "") {
      resultado.innerHTML = `
  <div class="alert alert-dismissible alert-warning"><h4><strong>enviares el comprobante de la compra a la direccion ${correo.value}</strong></h4> </div>`;
    } else {
      resultado.innerHTML = `
      <div class="alert alert-dismissible alert-secondary"> <h4>direccion invalida </h4> </div>
      <h4 class="text-secondary">GRACIAS POR TU COMPRA</h4>
      `;
    }
  });
}
validacionMail();

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    leerDatosProducto(e.target.parentElement);
  });
});

let articulosCarrito = [];

function leerDatosProducto(producto) {
  const infoProducto = {
    promocion: producto.querySelector(".card-title").textContent,
    precio: producto.querySelector(".precio").textContent,
    id: producto.querySelector(".btn").getAttribute("data-id"),
  };
  console.log(infoProducto);

  articulosCarrito = [...articulosCarrito, infoProducto];
  carritoCompras();
}

const carrito = document.querySelector("#carrito");

function carritoCompras() {
  limpiarHTML();
  articulosCarrito.forEach((producto) => {
    const row = document.createElement("p");
    row.innerHTML = `
  <div class="mi_carrito">
  <h5 class="desc">${producto.promocion}</h5>
  <h5 class="prec">${producto.precio}</h5>
  <button class="btn btn-danger " type="button" id="${producto.id}">X</button>
  </div>
  `;
    carrito.appendChild(row);

    Swal.fire({
      position: 'top-end',
      title: 'Promocion agregada al carrito',
      showConfirmButton: false,
      timer: 600
    })
    
    
  });
}

function limpiarHTML() {
  carrito.innerHTML = "";
}

carrito.addEventListener("click", eliminarProducto);

function eliminarProducto(e) {
  if (e.target.classList.contains("btn")) {
    let productoID = e.target.getAttribute("id");
    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.id != productoID
    );
    carritoCompras();
    Swal.fire({
      title: 'esta seguro que desea eliminar esta promocion??',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, eliminela!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Promocion eliminada',
          'Hecho'
        )
      }
    })
  }
}

// function eliminarProducto(e) {
//   if (e.target.classList.contains("btn")) {
//     let productoID = e.target.getAttribute("id");
//     articulosCarrito = articulosCarrito.filter(
//       (producto) => producto.id !== productoID
//     );
//     carritoHTML();
//   }
// }
