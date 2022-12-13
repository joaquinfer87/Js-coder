//primera entrega
// variables
// let i = 0;
// let cantCompra = parseInt(prompt("Ingrese la cantidad de articulos comprados"));
// let precioTotalCesped = 0;
// let precioTotalArena = 0;
// let precioTotalCaucho = 0;
// let subtotal = 0;
// let cSubtotal = 0;
// let cTotal = 0;

// function Producto(nombre, precio) {
//   this.nombre = nombre;
//   this.precio = precio;
// }

// const producto1 = new Producto("cespes sintetico", 1000);
// const producto2 = new Producto("arena", 300);
// const producto3 = new Producto("caucho", 500);
// alert(producto1.nombre + producto1.precio);

// // funciones y ciclo

//  while (i < cantCompra) {
//    i++;
//    let articulo = prompt(`eliga el articulo:
//  1:cesped
//  2:arena
//  3:caucho`);
//    let cantidadTotal = parseInt(prompt("Ingrese la cantidad"));
//    let precioUnitario = parseInt(prompt("Ingrese el precio"));
//    let condicionIva = parseInt(prompt(
//      `ingrese 1 si su condicion es iva responsable inscripto o 2 si es excento`
//    ));

//    function calcularArticulo() {
//      switch (articulo) {
//        case "1":
//          alert(producto1.nombre + producto1.precio);
//          precioTotalCesped = cantidadTotal * precioUnitario;
//          break;
//        case "2":
//          precioTotalArena = cantidadTotal * precioUnitario;
//          break;
//        case "3":
//          precioTotalCaucho = cantidadTotal * precioUnitario;
//          break;
//        default:
//          alert("no asignaron ningun articulo");
//          break;
//      }
//      subtotal = precioTotalArena + precioTotalCaucho + precioTotalCesped;
//      cSubtotal = cSubtotal + subtotal;
//      return cSubtotal;
//    }

//    function calcularIva(cSubtotal) {
//      if (condicionIva == "1") {
//        cTotal = cTotal + cSubtotal + subtotal * 0.21;
//        return cTotal;
//      } else {
//        return cTotal;
//      }
//    }
//  }

//  alert("El subtotal de la compra es de de: " + calcularArticulo());
//  alert("El total de la compra es de: " + calcularIva(subtotal));
let numero = [];
let confirmacion = 0
//objeto
function Promociones(promo, precio) {
  this.promo = promo;
  this.precio = precio;
}

//creacion de las promociones
const promocion1 = new Promociones("Marte", 150);
const promocion2 = new Promociones("Saturno", 250);
const promocion3 = new Promociones("Via Lactea", 300);

//realizar pedido
function pedido() {
  
  let cantidad = prompt(`eliga la promocion:  
  1: Marte 10 stickers
  2: Saturno 15 Stickers
  3: Via Lactea 20 Stickers`);

  switch (cantidad) {
    case "1":
      alert(promocion1.promo + " El precio es de " + promocion1.precio);
      for (let i = 0; i < 5; i++) {
        let x = [prompt("ingrese los numeros del catalogo")];
        console.log("Stikcer numero " + x);
        numero[i] = x + " ";
      }
      confirmacion = prompt("Escriba ok si confirma el pedido, si desea hacerlo de nuevo ingrese nuevo")
      if (confirmacion == "ok") {
        alert("Los stickers elegidos son: " + numero);
        alert("Su total es de: $" + promocion1.precio)
      }else{
        pedido()
      } 
      break;
    case "2":
      alert(promocion2.promo + " El precio es de " + promocion2.precio);
      for (let i = 0; i < 5; i++) {
        let x = [prompt("ingrese los numeros del catalogo")];
        console.log("Stikcer numero " + x);
        numero[i] = x + " ";
      }
      confirmacion = prompt("Escriba ok si confirma el pedido, si desea hacerlo de nuevo ingrese nuevo")
      if (confirmacion == "ok") {
        alert("Los stickers elegidos son: " + numero);
        alert("Su total es de: $" + promocion2.precio)
      }else{
        pedido()
      } 
      break;
    case "3":
      for (let i = 0; i < 5; i++) {
        let x = [prompt("ingrese los numeros del catalogo")];
        console.log("Stikcer numero " + x);
        numero[i] = x + " ";
      }
      confirmacion = prompt("Escriba ok si confirma el pedido, si desea hacerlo de nuevo ingrese nuevo")
      if (confirmacion == "ok") {
        alert("Los stickers elegidos son: " + numero);
        alert("Su total es de: $" + promocion3.precio)
      }else{
        pedido()
      } 
      break;
    default:
      alert("no coincide con ninguna de nuestras promociones");
      pedido();
      break;
  }
}
pedido()
//pagar

function pagar(){
  let formaDePago = prompt("Desea pagar en EFECTIVO o por TRANSFERENCIA")
  if (formaDePago == "efectivo") {
    alert ("Muchas Gracias por su compra")
  } else{
    alert ("El Alias para realizar la transferencia es STICKERSPLANET.CBA")
    alert ("Muchas Gracias por su compra")
  }
}
pagar()