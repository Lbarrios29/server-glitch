// IMPORTS
const Contenedor = require("./contenedor");
const fs = require("fs");

const productFile = new Contenedor(fs,'./productos.txt');

class Utils{

    // Retorna un entero aleatorio entre min (incluido) y max (excluido)
    // ¡Usando Math.round() te dará una distribución no-uniforme!
    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Obtiene todos los productos del archivo
    async getProductsAll(req,res){

        try {
            const productos = await productFile.getAll();
            return res.json(productos);
        } catch (error) {
            return res.json(error);
        }

    }

    // Obtiene producto por Id random
    async getRandomProduct(req,res){

        try {

            const productos = await productFile.getAll();
            const id = this.getRandomNumber(0, productos.length);
            return res.json(productos[id]);
        
        } catch (error) {
            return res.json(error);
        }

    }

 }

 module.exports = Utils;