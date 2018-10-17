document.addEventListener("keydown",movimineto);
var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');
var x = random(0,5)*80;
var y = random(0,5)*80;
var matriz = new Array(6);
const DIMENSION = 80;

var fondo = {
    url: './imagenes/tile.png',
    imagen: Image,
    cargaOk: false
};
var vaca = {
    url: './imagenes/vaca.png',
    imagen: Image,
    cargaOk: false
};
var cerdo = {
    url: './imagenes/cerdo.png',
    imagen: Image,
    cargaOk: false
};
var cuchillo = {
    url: './imagenes/cuchillo.png',
    imagen: Image,
    cargaOk: false
};

cuchillo.imagen = new Image();
cerdo.imagen = new Image();
vaca.imagen = new Image();
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
cuchillo.imagen.src = cuchillo.url;

fondo.imagen.addEventListener("load",function(){
        fondo.cargaOk = true;
        dibujar();
});
vaca.imagen.addEventListener("load",function(){
        vaca.cargaOk = true;
        dibujar();
});
cerdo.imagen.addEventListener("load",function(){
        cerdo.cargaOk = true;
        dibujar();
});
cuchillo.imagen.addEventListener("load",function(){
        cuchillo.cargaOk = true;
        dibujar();
});

iniciarMatriz();
inicializarVacas();
inicializarCerdos();
dibujar();

function dibujar(){
    if(fondo.cargaOk == true){
        lapiz.drawImage(fondo.imagen, 0,0);
    }
    // if(vaca.cargaOk == true){
    //     lapiz.drawImage(vaca.imagen, random(0,5) * 80, random(0,5) * 80 );
    // }
    // if(cerdo.cargaOk == true){
    //     lapiz.drawImage(cerdo.imagen, random(0,5) * 80, random(0,5) * 80);
    // }
    dibujarMatriz();
    if(cuchillo.cargaOk == true){
        lapiz.drawImage(cuchillo.imagen, x, y);
    }
}
var tecla = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN:40,
    ENTER: 13
}

function movimineto(evento){
    console.log(evento);
    switch(evento.keyCode){
        case tecla.LEFT:
        if(x > 0){
            x = x - DIMENSION;
            dibujar();
            //lapiz.drawImage(cuchillo.imagen, x, y);
        }
            break;
        case tecla.UP:
        if(y > 0){
            y = y - DIMENSION;
            dibujar();
           // lapiz.drawImage(cuchillo,imagen, x, y);
        }
            break;
        case tecla.RIGHT:
        if(x < 400){
            x = x + DIMENSION;
            dibujar();
           // lapiz.drawImage(cuchillo.imagen, x, y);
        }
            break;
        case tecla.DOWN:
        if(y < 400){
            y = y + DIMENSION;
            dibujar();
           // lapiz.drawImage(cuchillo.imagen, x, y);
        } 
            break;
        case tecla.ENTER:
        alert(random(1,10));
        break;
    }
}

function random(minimo,maximo){
    return Math.floor(Math.random() * (maximo - minimo +1)) + minimo;
}
function iniciarMatriz() {

    for (var i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(6);
        for (var j = 0; j < matriz.length; j++) {
            matriz[i][j] = 'x';
        }
    }
}

function inicializarVacas() {
    var numero = random(0, 5);
    for (var i = 0; i <= numero; i++) {
        var fila = random(0, 5);
        var columna = random(0, 5);
        if (matriz[fila ][columna] == 'x') {
            matriz[fila][columna] = 'v';
        }
    }
}

function inicializarCerdos() {
    var numero = random(0, 5);
    for (var i = 0; i <= numero; i++) {
        var fila = 0 + random(0, 5);
        var columna = 0 + random(0, 5);
        if (matriz[fila][columna] == 'x') {
            matriz[fila][columna] = 'c';
        }
    }
}

function dibujarMatriz() {
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz.length; j++) {
            if (matriz[i][j] == 'v') {
                lapiz.drawImage(vaca.imagen, i * DIMENSION, j * DIMENSION);
            } else if (matriz[i][j] == 'c') {
                lapiz.drawImage(cerdo.imagen, i * DIMENSION, j * DIMENSION);
            }
        }
    }
}