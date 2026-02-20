// Simulación de un sistema de pedidos en un restaurante utilizando promesas y async/await

//selectores del DOM
const info = document.querySelector ('#info');
const formBtn = document.querySelector ('#btn-retry');

// Función para imprimir en el HTML
const imprimirEnPantalla = (mensaje, color = "white") => {
    const p = document.createElement("p");
    p.innerText = mensaje;
    p.style.color = color;
    info.appendChild(p);
    console.log(mensaje);
};
// Primera promesa
const ordenandoBebida =
     new Promise ((resolve, reject) => {
        setTimeout (() => { 
    try {
resolve ("🥤Bebida ordenada ✅");
    } catch (error) {
        reject ("No se tomó el pedido ❌. Por favor intenta de nuevo.");
    }
    }, 1000);
}); 
// Segunda promesa
 const pedirPizza = new Promise ((resolve, reject) => {
setTimeout (( ) => {
try {
    resolve ('🍕Pizza ordenada ✅');
} catch (error) {
    reject ('No se tomó el pedido ❌. Por favor intenta de nuevo.')
}
}, 2000);
});

// tercera promesa
 const ordenandoPostre = new Promise ((resolve, reject) => {
setTimeout (( ) => {
try {
    resolve ('🍦Postre ordenado ✅');
} catch (error) {
    reject ('No se tomó el pedido ❌. Por favor intenta de nuevo.')
}
}, 3000);
 });

 // función asíncrona para manejar los pedidos
 async function manejoPedidos() {
imprimirEnPantalla("Orden de pedidos iniciado 🍽️");

// deshabilitar el botón inicialmente
formBtn.disabled = false;

// try - intenta obtener el codigo asincrono con el resolve
    try {   
        const probabilidad = () => Math.random() < 0.5;
        console.log(Math.random());
        if (!probabilidad()) throw new Error();

        const bebida = await ordenandoBebida;
        imprimirEnPantalla(bebida, "white");
        const pizza = await pedirPizza;
        imprimirEnPantalla(pizza, "white");
        const postre = await ordenandoPostre;
        imprimirEnPantalla(postre, "white");

            imprimirEnPantalla("--------------------------");
            imprimirEnPantalla("¡La orden completa ha sido entregada! 🥳", "lightgreen");
} catch (error) {
    imprimirEnPantalla("⚠️No se tomó el pedido ❌. Por favor intenta de nuevo.", "red");
}
};
// Evento para recargar la página y reintentar el pedido
formBtn.addEventListener('click', () => {
   location.reload();
});  

// Llamada a la función principal
manejoPedidos();

