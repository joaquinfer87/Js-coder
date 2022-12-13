
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