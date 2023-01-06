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

let filtro = promociones.filter((i)=> i.nombre === "Marte" || i.precio < 1000)

console.log (filtro)


//clase 8
//METODO TRADICIONAL 
 
let nav = document.querySelector (".main_header_nav")
let lista = document.querySelector ("ul")
console.log(lista)



