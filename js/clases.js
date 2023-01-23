// primera clase
// let nombre = "variable"; //string
// let edad = 50; // number
// let alumno = true; // booleans

// const nombree = "joaquin"

// console.log(nombre + " "+ edad)

// //let puede estar declarada sin datos, const tiene que tener datos
// //let permite cambiar el dato

// prompt ("ingresa tu nombre")

//segunda clase

// let nombre = prompt("ingrese nombre");
// let apellido = prompt("Ingrese su apellido");
// let edad = parseInt(prompt("Ingrese su edad"));

//  if (edad >= 18) {
//    if (nombre != "" && apellido != "") {
//      alert("Bienvenido " + nombre + " " + apellido);
//    } else {
//      alert("Falta ingresar algun dato");
//    }
//  } else {
//    alert("Es menor de edad");
//  }

//tercera clase

// let articulo = prompt(`eliga el articulo:
// 1:cesped
// 2:arena
// 3:caucho`);
// let cantidadTotal = parseInt(prompt("Ingrese la cantidad"));
// let precioUnitario = parseInt(prompt("Ingrese el precio"));

// switch (articulo) {
//   case "1":
//     let precioTotalCesped = cantidadTotal * precioUnitario;
//     alert(precioTotalCesped);
//     break;
//   case "2":
//     let precioTotalArena = cantidadTotal * precioUnitario;
//     alert(precioTotalArena);
//     break;
//   case "3":
//     let precioTotalCaucho = cantidadTotal * precioUnitario;
//     alert(precioTotalCaucho);
//     break;
//   default:
//     alert("nada");
//     break;
// }

//while

//como se usa
// let i = 0;
// while (i <= 3) {
//   alert(i);
//   i++;
// }

// do while
// al reves del while
// do {
//   bucle
// } while (condition);

//for
// for (desde;hasta;actualizacion){
//  bucle
//}

//como se usa
// for (let i = 0; i < 3; i++) {
//   alert(`${i}`);
// }

// break rompe el clico
//continue salta el paso

//clase 5

//objeto

// function Producto(tipo, precio, marca, uso, stock) {
//     this.tipo = tipo;
//     this.precio = precio;
//     this.marca =marca ;
//     this.uso = uso;
//     this.stock = true ;
// }

// const producto1 = new Producto("cespes sintetico", 1000, "Limonta", "Canchas deportivas, decoracion", );
// const producto2 = new Producto("arena", 300, "arenita","Mantenimiento cancha hockey" );
// const producto3 = new Producto("caucho", 500, "ecocaucho", "Mantenimiento cancha de futbol");

//clase 7

numero.forEach((s, n) => {
  console.log("Los stickers elegidos son: ` ${p} : ${n}`");
});

numero.map((s, n) => {
  console.log("Los stickers elegidos son: ` ${p} : ${n}`");
});

let filtro = promociones.filter((i) => i.nombre === "Marte" || i.precio < 1000);

console.log(filtro);

//clase 8
//METODO TRADICIONAL

let nav = document.querySelector(".main_header_nav");
let lista = document.querySelector("ul");
console.log(lista);

// let listaVacia = document.querySelector("#carrito")
//     for (let a of x ) {
//       let lista = document.createElement ("li")
//       lista.innerHTML = a
//       listaVacia.appendChild("lista")
//     }

//clase 9
nuevoBoton.onclick = function () {
  console.log("hello");
};
nuevoBoton.addEventListener ( "click", function () {
    console.log("hello");
  })
  


// let numero = [];
// let confirmacion = 0;
// let subtotal = 0;
// let total = 0;
// let nuevoBoton = document.createElement("button");

// //agrego un boton al html
// nuevoBoton.setAttribute("class", "btn");
// nuevoBoton.setAttribute("id", "btnCompra");
// nuevoBoton.textContent = "Agregar al carrito";
// document.querySelector("#carrito").appendChild(nuevoBoton);

// //objeto
// function Promociones(promo, precio) {
//   this.promo = promo;
//   this.precio = precio;
// }

// //creacion de las promociones
// const promociones = [
//   { nombre: "Marte", precio: 500 },
//   { nombre: "Saturno", precio: 750 },
//   { nombre: "via lactea", precio: 1000 },
// ];

// const promocion1 = new Promociones("Marte", 500);
// const promocion2 = new Promociones("Saturno", 750);
// const promocion3 = new Promociones("Via Lactea", 1000);

// const filtrarProducto = () => {
//   let cantidad = inputText.value;
//   console.log(cantidad);
//   pedido()
// };

// inputSearch.addEventListener("search", filtrarProducto)

// //realizar pedido
// function pedido() {
//   // let cantidad = prompt(`eliga la promocion:
//   //  1: Marte 10 stickers
//   //  2: Saturno 15 Stickers
//   //  3: Via Lactea 20 Stickers`);

//   switch (cantidad) {
//     case "1":
//       subtotal = promocion1.precio;
//       alert(promocion1.promo + " El precio es de " + promocion1.precio);
//       for (let i = 0; i < 10; i++) {
//         let x = [prompt("ingrese los numeros del catalogo")];
//         numero[i] = x + " ";
//       }
//       confirmacion = prompt(
//         "Escriba ok si confirma el pedido, si desea hacerlo de nuevo ingrese nuevo"
//       );
//       if (confirmacion == "ok") {
//         ordenar = numero.sort();
//         console.log(ordenar);
//         alert("Los stickers elegidos son: " + numero);
//         alert("Su total es de: $" + promocion1.precio);
//       } else {
//         pedido();
//       }
//       break;
//     case "2":
//       subtotal = promocion2.precio;
//       alert(promocion2.promo + " El precio es de " + promocion2.precio);
//       for (let i = 0; i < 15; i++) {
//         let x = [prompt("ingrese los numeros del catalogo")];
//         numero[i] = x + " ";
//       }
//       confirmacion = prompt(
//         "Escriba ok si confirma el pedido, si desea hacerlo de nuevo ingrese nuevo"
//       );
//       if (confirmacion == "ok") {
//         ordenar = numero.sort();
//         console.log(ordenar);
//         alert("Los stickers elegidos son: " + numero);
//         alert("Su total es de: $" + promocion2.precio);
//       } else {
//         pedido();
//       }
//       break;
//     case "3":
//       subtotal = promocion3.precio;
//       for (let i = 0; i < 20; i++) {
//         let x = [prompt("ingrese los numeros del catalogo")];
//         numero[i] = x + " ";
//       }
//       confirmacion = prompt(
//         "Escriba ok si confirma el pedido, si desea hacerlo de nuevo ingrese nuevo"
//       );
//       if (confirmacion == "ok") {
//         ordenar = numero.sort();
//         console.log(ordenar);
//         alert("Los stickers elegidos son: " + numero);
//         alert("Su total es de: $" + promocion3.precio);
//       } else {
//         pedido();
//       }
//       break;
//     default:
//       alert("no coincide con ninguna de nuestras promociones");
//       pedido();
//       break;
//   }
// }

// //descuento
// function descuento() {
//   let cupon = prompt(
//     "Ingrese su cupon de descuento (si no cuenta con uno presione ENTER)"
//   );
//   if (cupon == "sticker87" || cupon == "planet19") {
//     total = subtotal - subtotal * 0.5;
//   } else {
//     total = subtotal;
//   }
//   alert("el total a pagar es de: " + total);
// }
// descuento();

// //pagar
// function pagar() {
//   let formaDePago = prompt("Desea pagar en EFECTIVO o por TRANSFERENCIA");
//   if (formaDePago == "efectivo") {
//     alert("Muchas Gracias por su compra");
//   } else {
//     alert("El Alias para realizar la transferencia es STICKERSPLANET.CBA");
//     alert("Muchas Gracias por su compra");
//   }
// }
// pagar();

// let listaVacia = document.querySelector("#carrito_compra");

// for (let n of numero) {
//   let listado = document.createElement("li");
//   listado.innerHTML = n;
//   listaVacia.appendChild(listado);
// }

// const promociones = [
//   {
//     promocion: "campeones",
//     precio: 450,
//   },
//   {
//     promocion: "disney",
//     precio: 450,
//   },
//   {
//     promocion: "argentina",
//     precio: 450,
//   },
//   {
//     promocion: "harry",
//     precio: 450,
//   },
//   {
//     promocion: "coldplay",
//     precio: 450,
//   },
// ];

// const aJson = JSON.stringify (promociones)

// localStorage.setItem("promociones", aJson)