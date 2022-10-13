const express=require("express");
const app = express();

app.use(express.json());

//Importar rutas
const productos=require("./routes/products")

app.use('/api',productos)//Ruta del navegador

module.exports=app