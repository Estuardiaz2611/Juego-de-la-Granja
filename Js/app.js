var canvas = document.getElementById('fondo');
var lapiz = canvas.getcontext('2d');

var fondo = {
    url: './imagenes/tile.png',
    imagen: Image
};
fondo.imagen = new image();
fondo,imagen.src = fondo.url;

fondo,imagen.addEventistener("load",function(){
    dibujar();

});

function dibujar(){
    lapiz.drawImage(fondo.Imagen,0,0);
};