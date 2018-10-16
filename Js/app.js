var canvas = document.getElementById('fondo');
var lapiz = canvas.getcontext('2d');

var fondo = {
    url: './imagenes/tile.png',
    Imagen: image
};
fondo.image = new image();
fondo,imagen.src = fondo.url;

fondo,image.addEventistener("load",function(){
    dibujar();

});

function dibujar(){
    lapiz.drawImage(fondo.Imagen,0,0);
};