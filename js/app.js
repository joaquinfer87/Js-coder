let formulario = document.querySelector("#formulario");
let resultado = document.querySelector(".resultado");

function validacionMail() {
  var correo = document.querySelector("#mail").value;
  const mostrarMensaje = formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    if (correo === "") {
      error();
      resultado.innerHTML = `
  <div class="alert alert-dismissible alert-warning"><h4><strong>Direccion invalida</strong></h4> </div>`;
    } else {
      resultado.innerHTML = `
      <div class="alert alert-dismissible alert-secondary"> <h4> enviares el comprobante de la compra a la direccion ${correo.value}</h4> </div>
      <h4 class="text-secondary">GRACIAS POR TU COMPRA</h4>
      `;
    }
  });
}
validacionMail();
function error() {
  validacionMail();
}

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
    const sumar = document.createElement("p");
    sumar.innerHTML = `
  <div class="mi_carrito">
  <h5 class="desc">${producto.promocion}</h5>
  <h5 class="pre">${producto.precio}</h5>
  <button class="btn btn-dark "  id="${producto.id}"><h5>X</h5></button>
  </div>
  </div>
  `;
    carrito.appendChild(sumar);
  });
}

function limpiarHTML() {
  carrito.innerHTML = "";
}

carrito.addEventListener("click", eliminarProducto);

function eliminarProducto(e) {
  if (e.target.classList.contains("btn-dark")) {
    let productoID = e.target.getAttribute("id");
    articulosCarrito = articulosCarrito.filter(
      (producto) => producto.id != productoID
    );
    carritoCompras();
  }
}
