// Simulación de un sistema de pedidos en un restaurante utilizando promesas y async/await

//selector 
const info = document.querySelector ('#info');

// Función para imprimir en el HTML
const imprimirEnPantalla = (mensaje, color = "white") => {
    const p = document.createElement("p");
    p.innerText = mensaje;
    p.style.color = color;
    info.appendChild(p);
    console.log(mensaje);
};

// definición de probabilidad de exito de un 20%
const probabilidad = () => {
    return Math.random () < 0.8;
}
 
// Primera función de promesa 
const ordenandoBebida =
     new Promise ((resolve, reject) => {
        setTimeout (() => {
        
    if (probabilidad()) {
resolve ("🥤Bebida ordenada ✅");
    } else {
        reject ("No se tomó el pedido ❌. Por favor intenta de nuevo.");
    }
    }, 1000);
});
 ; 

// Segunda promesa
 const pedirPizza = new Promise ((resolve, reject) => {
setTimeout (( ) => {
if (probabilidad()) {
    resolve ('🍕Pizza ordenada ✅');
} else {
    reject ('No se tomó el pedido ❌. Por favor intenta de nuevo.')
}
}, 2000)
 });

// tercera promesa
 const ordenandoPostre = new Promise ((resolve, reject) => {
setTimeout (( ) => {
if (probabilidad()) {
    resolve ('🍦Postre ordenado ✅');
} else {
    reject ('No se tomó el pedido ❌. Por favor intenta de nuevo.')
}
}, 3000)
 });

 // función asíncrona para manejar los pedidos
 async function manejoPedidos() {
imprimirEnPantalla("Orden de pedidos iniciado 🍽️");
    // try - intenta obtener el codigo asincrono con el resolve
    try {
      
        const bebida = await ordenandoBebida;
        imprimirEnPantalla(bebida, "white");
        const pizza = await pedirPizza;
        imprimirEnPantalla(pizza, "white");
        const postre = await ordenandoPostre;
        imprimirEnPantalla(postre, "white");

        imprimirEnPantalla("--------------------------");
        imprimirEnPantalla("¡La orden completa ha sido entregada! 🥳", "lightgreen");
      
    } catch (error) {
        imprimirEnPantalla(error, "red");
        imprimirEnPantalla("⚠️ El pedido se canceló.");
    }
    
  }

  manejoPedidos();