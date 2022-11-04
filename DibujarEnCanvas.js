import { dibujarLinea } from "./platziEj/dibujo";
import {dibujoPorClick} from "./platziEj/dibujo.js"


const clicksito = document.getElementById("btnLines");
clicksito.addEventListener("click", dibujoPorClick);
const canvas = document.getElementById("Canvas-zone");
const lienzo = canvas.getContext("2d");
const scale = 10;
canvas.width = 30 * scale;
canvas.height = 30 * scale;
var maxWidth = document.getElementById("nLines");
var line = 0;
var fromY = 0;
var toX = 300;
var contentTextBox = maxWidth.value;
console.log(maxWidth);


function dibujarPinkFloid(){
    var i;
    for(i = 0;i < 301;i++){
        dibujarLinea(0,300,i,i,"rgba(0,0,0,1)");
        dibujarLinea(0,300,i,i,"rgba(0,0,0,1)");
        dibujarLinea(0,300,i,i,"rgba(0,0,0,1)");
    }
    fromY = 200;
    toX = 130;
    for(i = 0; i < 8;i++){
        dibujarLinea(0,toX,fromY,150,"rgba(255,255,255,1)");
        fromY++;
    }
    var coordenadas = {
        A: [80, 200],
        B: [150, 50]
    }
    dibujarLinea(coordenadas.A[0],//xi
            coordenadas.B[0],//xf
            coordenadas.A[1],//yi
            coordenadas.B[1],//yf
            "rgba(255,255,255,1)");
        coordenadas = {
            A: [80, 200],
            B: [200, 200]
        }        
    dibujarLinea(coordenadas.A[0],
            coordenadas.B[0],
            coordenadas.A[1],
            coordenadas.B[1],
            "rgba(255,255,255,1)");
        coordenadas = {
            A: [150, 50],
            B: [200, 200]
        }    
    dibujarLinea(coordenadas.A[0],
            coordenadas.B[0],
            coordenadas.A[1],
            coordenadas.B[1],
            "rgba(255,255,255,1)");
        
}