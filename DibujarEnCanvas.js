const clicksito = document.getElementById("btnLines");
clicksito.addEventListener("click", dibuCiclo);
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
function Dibujar(fromXf, toXf, fromYf, toYf, colorf){
    if (colorf == undefined)
    {
        colorf = "rgba(75, 75, 200, 0.5)";
    }
    lienzo.beginPath();
    lienzo.strokeStyle = colorf;
    lienzo.moveTo(fromXf, fromYf);
    lienzo.lineTo(toXf, toYf);
    lienzo.stroke();
    lienzo.closePath();
}
console.log(contentTextBox === 'pink floid');
console.log(maxWidth.value == 'pink floid');
if(contentTextBox == 'pink floid'){    
    dibujarPinkFloid();
}

function dibujarPinkFloid(){
    var i;
    for(i = 0;i < 301;i++){
        Dibujar(0,300,i,i,"rgba(0,0,0,1)");
        Dibujar(0,300,i,i,"rgba(0,0,0,1)");
        Dibujar(0,300,i,i,"rgba(0,0,0,1)");
    }
    fromY = 200;
    toX = 130;
    for(i = 0; i < 8;i++){
        Dibujar(0,toX,fromY,150,"rgba(255,255,255,1)");
        fromY++;
    }
    var coordenadas = {
        A: [80, 200],
        B: [150, 50]
    }
    Dibujar(coordenadas.A[0],//xi
            coordenadas.B[0],//xf
            coordenadas.A[1],//yi
            coordenadas.B[1],//yf
            "rgba(255,255,255,1)");
        coordenadas = {
            A: [80, 200],
            B: [200, 200]
        }        
    Dibujar(coordenadas.A[0],
            coordenadas.B[0],
            coordenadas.A[1],
            coordenadas.B[1],
            "rgba(255,255,255,1)");
        coordenadas = {
            A: [150, 50],
            B: [200, 200]
        }    
    Dibujar(coordenadas.A[0],
            coordenadas.B[0],
            coordenadas.A[1],
            coordenadas.B[1],
            "rgba(255,255,255,1)");
}

function dibuCiclo(){
    alert("ay!");
    contentTextBox = maxWidth.value;
    console.log(contentTextBox == 'pink floid');
    console.log(maxWidth.value == 'pink floid');
    while(line < contentTextBox){
        fromX = 10 * line;
        toY = 10 * (line + 1);
        line += 1;
        Dibujar();
        console.log();
    }
}