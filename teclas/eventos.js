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
document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento){
    switch (evento.keyCode)
    {
        case MoveKeys.flechas.Up:
        case MoveKeys.wasd.Up:
        case MoveKeys.numPad.Up:
            console.log("Arriba");
        break

        case MoveKeys.flechas.Down:
        case MoveKeys.wasd.Down:
        case MoveKeys.numPad.Down:
            console.log("Abajo");
        break

        case MoveKeys.flechas.Right:
        case MoveKeys.wasd.Right:
        case MoveKeys.numPad.Right:
            console.log("Derecha");
        break

        case MoveKeys.flechas.Left:
        case MoveKeys.wasd.Left:
        case MoveKeys.numPad.Left:
            console.log("Izquierda");
        break
    }
}
