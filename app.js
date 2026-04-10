const express = require('express'); // importar el módulo de Express para crear una aplicación web

const app = express(); // crear una aplicación de Express

const path = require('path'); // para manejar rutas en cualquier sistema operativo


// -- configuracion ---
app.set('view engine', 'ejs'); // para usar ejs como motor de plantillas
app.set('views', path.join(__dirname, 'views')); // esto define la ruta absoluta de views para asegurar que el proyecto funcione correctamente independientemente del directorio de ejecución.
app.use(express.static(path.join(__dirname, 'assets'))); // para usar archivos estáticos desde la carpeta 'assets', esto asegura que los archivos se importen correctamente sin importar desde dónde se ejecute el proyecto.

app.get('/', (req, res) => res.render('pages/index')); // ruta para la página de inicio, renderiza la plantilla 'index.ejs'
app.get('/login', (req, res) => res.render('pages/login')); // ruta para la página de login, renderiza la plantilla 'login.ejs'
app.get('/register', (req, res) => res.render('pages/register', { titulo: 'Registrate - Mi E-commerce', headerType: 'minimal' })); // ruta para la página de registro, renderiza la plantilla 'register.ejs' pasando un objeto con el título y el tipo de header para personalizar la página de registro
app.get('/cart', (req, res) => res.render('pages/cart')); // ruta para la página del carrito, renderiza la plantilla 'cart.ejs'
app.get('/checkout', (req, res) => res.render('pages/checkout')); // ruta para la página de checkout, renderiza la plantilla 'checkout.ejs'   













app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000')); // iniciar el servidor en el puerto 3000
