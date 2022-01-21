// IMPORTS
const express = require("express");
const Contenedor = require("./contenedor");
const fs = require("fs");

// Instancia express
const app = express();

// Puerto
const PORT = 8080;

const productFile = new Contenedor(fs,'./productos.txt');

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Obtiene todos los productos del archivo
const getProductsAll = async (req,res)=>{

    try {
        const productos = await productFile.getAll();
        return res.json(productos);
    } catch (error) {
        return res.json(error);
    }

}

// Obtiene producto por Id random
const getRandomProduct = async (req,res)=>{

    try {

        const productos = await productFile.getAll();
        const id = getRandomNumber(0, productos.length);
        return res.json(productos[id]);
    
    } catch (error) {
        return res.json(error);
    }

}

// GET Home
app.get("/",(req,res,next)=>{
    res.send(`<h1>Bienvenido al server Express con Glitch<h1/>`);
});

// GET Productos
app.get("/productos",(req,res,next)=>{
    getProductsAll(req,res);
});

// GET productoRandom
app.get("/productoRandom",(req,res,next)=>{

    getRandomProduct(req,res);

});

// Puerto en el que el server escucha
const server = app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
});

// Manejo de errores
server.on("error",error => console.log(error));