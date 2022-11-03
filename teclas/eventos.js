const MoveKeys = {
    flechas: {
        Up:38,
        Down:40,
        Left:37,
        Right:39
    },
    wasd: {
        Up:87,
        Down:83,
        Left:65,
        Right:68
    },
    numPad: {
        Up: 104,
        Down: 98,
        Left: 100,
        Right:102
    }
}
document.addEventListener("keydown", dibujarTeclado);
const canvas = document.getElementById("area-de-dibujo");
const paper = canvas.getContext("2d");
var x = 150;
var y = 150;
const speed = 2;
//TODO: crear la funcion y variables necesarias para que el canvas sea una pizarra donde puedes dibujar desde el navegador, o inclusive desde el movil.crac


function dibujarTeclado(evento){
    let color = "rgba(200,20,150,1)";
    switch (evento.keyCode)
    {
        case MoveKeys.flechas.Up:
        case MoveKeys.wasd.Up:
        case MoveKeys.numPad.Up:
            dibujarLinea(color, x,y,x,y-speed,paper);
            y = y - speed;
        break

        case MoveKeys.flechas.Down:
        case MoveKeys.wasd.Down:
        case MoveKeys.numPad.Down:
            dibujarLinea(color, x,y,x,y+speed,paper);
            y = y + speed;
        break

        case MoveKeys.flechas.Right:
        case MoveKeys.wasd.Right:
        case MoveKeys.numPad.Right:
            dibujarLinea(color, x,y,x+speed,y,paper);
            x = x + speed;
        break

        case MoveKeys.flechas.Left:
        case MoveKeys.wasd.Left:
        case MoveKeys.numPad.Left:
            dibujarLinea(color, x,y,x-speed,y,paper);
            x = x - speed;
        break
    }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}