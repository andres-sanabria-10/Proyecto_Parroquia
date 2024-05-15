const express = require("express");//express es el framework web principal que se utilizará para crear la aplicación
const path = require("path");//path es un módulo incorporado en Node.js para trabajar con rutas de archivos.
const app = express();// crea una instancia dela aplicacion express


app.set("PORT", process.env.PORT || 3000);


app.listen(app.get("PORT"), () =>
    console.log(`Server listen at Port ${app.get("PORT")}`)
);

// Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// Middlewares

app.use(express.json())

// Routes
app.use(require('./routes/index'))



//app.use(express.json());//permite analizar los cuerpos de las solicitudes entrantes en formato JSON.

// Static
app.use(express.static("public"));//Estas líneas configuran los "middleware" de Express sirve archivos estáticos (como CSS, JavaScript e imágenes) desde el directorio public

app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));


app.get('/', (req, res) => {
    res.render('index.ejs');
  });


