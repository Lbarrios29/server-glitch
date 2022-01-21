// IMPORTS
const express = require("express");
const Utils = require("./helper");

// Instancia express
const app = express();

// Puerto
const PORT = 8080;

const producto = new Utils();

// GET Home
app.get("/",(req,res,next)=>{
    res.send(`<h1>Bienvenido al server Express con Glitch<h1/>`);
});

// GET Productos
app.get("/productos",(req,res,next)=>{
    producto.getProductsAll(req,res);
});

// GET productoRandom
app.get("/productoRandom",(req,res,next)=>{

    producto.getRandomProduct(req,res);

});

// Puerto en el que el server escucha
const server = app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
});

// Manejo de errores
server.on("error",error => console.log(error));