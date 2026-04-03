const express = require('express'); // importar el módulo de Express para crear una aplicación web

const app = express(); // crear una aplicación de Express

const patch = require('path'); // para manejar rutas en cualquier sistema operativo

app.set('view engine', 'ejs'); // para usar ejs como motor de plantillas

app.get('/', (req, res) => res.render('index')); // ruta para la página de inicio, renderiza la plantilla 'index.ejs'
app.get('/login', (req, res) => res.render('login')); // ruta para la página de login, renderiza la plantilla 'login.ejs'
app.get('/register', (req, res) => res.render('register')); // ruta para la página de registro, renderiza la plantilla 'register.ejs'
app.get('/cart', (req, res) => res.render('cart')); // ruta para la página del carrito, renderiza la plantilla 'cart.ejs'
app.get('/checkout', (req, res) => res.render('checkout')); // ruta para la página de checkout, renderiza la plantilla 'checkout.ejs'   














app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000')); // iniciar el servidor en el puerto 3000
