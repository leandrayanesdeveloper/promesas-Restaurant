# 🍽️ Restaurant Async Simulator

Un simulador de pedidos de restaurante interactivo que demuestra el manejo de **operaciones asíncronas en JavaScript** utilizando Promesas y la sintaxis `async/await`. La interfaz cuenta con un diseño estilizado que utiliza técnicas avanzadas de CSS como Glassmorphism y bordes con texturas.

## 🚀 Características

### Lógica de Programación (JavaScript)

* **Manejo de Promesas:** Simulación de pedidos (bebida, pizza, postre) con diferentes tiempos de preparación mediante `setTimeout`.
* **Control de Flujo Asíncrono:** Uso de `async/await` para garantizar que el restaurante siga una secuencia lógica de servicio.
* **Gestión de Errores:** Implementación de bloques `try...catch` para manejar fallos en los pedidos (basados en una probabilidad de éxito del 80%).
* **Manipulación Dinámica del DOM:** Función para inyectar mensajes en tiempo real directamente en la interfaz del usuario.

### Diseño y UI (CSS3)

* **Fondo Fijo y Borroso:** Uso de `body::before` con `filter: blur` y `position: fixed` para un fondo que no se desplaza con el contenido.
* **Borde de Imagen Dinámico:** Implementación de `border-image` con técnica de `background-clip` (padding-box y border-box) para permitir esquinas redondeadas en bordes con patrones de cuadros.
* **Animaciones:** Entrada suave de la información mediante `@keyframes slideUp`.
* **Responsive Design:** Adaptación total para dispositivos móviles mediante Media Queries.

---

## 🛠️ Tecnologías utilizadas

* **HTML5**
* **CSS3** (Custom Fonts, Flexbox, Animations, Pseudo-elements)
* **JavaScript ES6+** (Promises, Async/Await)

---

## 📖 Cómo funciona el código

1. **Probabilidad:** Se define una función `probabilidad()` que determina si un pedido tiene éxito o falla (80% de éxito).
2. **Promesas:** Cada plato es una `new Promise`. Si la probabilidad es positiva, se ejecuta `resolve`, de lo contrario `reject`.
3. **Async/Await:** La función `manejoPedidos()` "espera" a que cada plato sea cocinado antes de pasar al siguiente:
```javascript
const bebida = await ordenandoBebida; // El código se detiene aquí hasta que la bebida esté lista.

```


4. **Captura de errores:** Si cualquier promesa falla, el flujo salta inmediatamente al bloque `catch`, mostrando un mensaje de error en rojo y cancelando el resto de la orden.

---

## 🎨 Instalación y Uso

1. Clona este repositorio.
2. Asegúrate de tener las fuentes en la carpeta `./fonts/` y las imágenes en `./images/` según las rutas definidas en el CSS.
3. Abre el archivo `index.html` en tu navegador.
4. ¡Observa cómo se procesa tu pedido de forma asíncrona!

---

**Desarrollado con ❤️ por Leandra Yanes**

---
