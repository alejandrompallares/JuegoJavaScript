//---------------------------------------------------DECLARACION DE VARIABLES---------------------------------------------------------------------
var canvas;
var anchoc = 15;
var altoc = 10;
var ctx;
var fps = 50;
var anchof = 50;
var altof = 50;
var muro = "#000000";
var camino = "#FFFFFF";
var nivel = 1;
var puerta = new Image();
puerta.src = "img/puerta2.png";
var link = new Image();
link.src = "img/link.png";
var hierba = new Image();
hierba.src = "img/hierba.jpg";
var camino = new Image();
camino.src = "img/camino.jpg";
var llave = new Image();
llave.src = "img/llave.png";
var fin = new Image();
fin.src = "img/fin.jpg";
var gameover = new Image();
gameover.src = "img/gameover.jpg";
var moblin = new Image();
moblin.src = "img/moblin.png";
var disparolink = new Image();
disparolink.src = "img/espada.png";
var disparozelda = new Image();
disparozelda.src = "img/magia.png";
var zelda = new Image();
zelda.src = "img/zelda.png";
var llavecita = false;
var escenario;
var derecha = true;
var vidas1 = 3;
var vidas2 = 3;
var entra1=false;
var entra2=false;
nombre1 = prompt('Introduce nombre del jugador 1: ');
document.getElementById('nombre1').innerHTML = nombre1;
nombre2 = prompt('Introduce nombre del jugador 2: ');
document.getElementById('nombre2').innerHTML = nombre2;
escenario = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 4, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 2, 0],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 1, 5, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var escenario2;
escenario2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 3, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 5, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 5, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
//------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------INICIA JUEGO---------------------------------------------------------------------
function inicializa() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    document.addEventListener('keydown', function (tecla) {
        if (tecla.keyCode == 38) {
            moverArribaJugador1();
        }
        if (tecla.keyCode == 40) {
            moverAbajoJugador1();
        }
        if (tecla.keyCode == 37) {
            moverIzquierdaJugador1();
        }
        if (tecla.keyCode == 39) {
            moverDerechaJugador1();
        }
        if (tecla.keyCode == 18) {
            iniciaDisparoJugador1();
        }
        if (tecla.keyCode == 87) {
            moverArribaJugador2();
        }
        if (tecla.keyCode == 83) {
            moverAbajoJugador2();
        }
        if (tecla.keyCode == 65) {
            moverIzquierdaJugador2();
        }
        if (tecla.keyCode == 68) {
            moverDerechaJugador2();
        }
        if (tecla.keyCode == 32) {
            iniciaDisparoJugador2();
        }
    });

    setInterval(function () { intervaloMovimiento(); }, 500);
    setInterval(function () { principal(); }, 1000 / fps);

}
function borrarCanvas() {
    canvas.width = anchoc;
    canvas.height = altoc;
}
function principal() {
    borrarCanvas();
    dibujaEscenario();
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------DIBUJA CANVAS----------------------------------------------------------------------------------------
function dibujaEscenario() {
    var color;
    document.getElementById('nivel').innerHTML = nivel;
    if(entra1==true && entra2==true){
        nivel++;
        document.getElementById('llave').innerHTML = "NO";
        entra1=false;
        entra2=false;
        llavecita = false;
    }
    if (nivel == 1) {
        nivel1();
    }
    if (nivel == 2) {
        nivel2()
    }
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 0) {
                ctx.beginPath();
                ctx.drawImage(hierba, x * anchof, y * altof, anchof, altof);
                ctx.fill();
            }
            if (escenario[y][x] == 1) {
                ctx.beginPath();
                ctx.drawImage(camino, x * anchof, y * altof, anchof, altof);
                ctx.fill();
            }
            if (escenario[y][x] == 2) {
                ctx.beginPath();
                ctx.drawImage(camino, x * anchof, y * altof, anchof, altof);
                ctx.fill();
                ctx.beginPath();
                ctx.drawImage(llave, x * anchof, y * altof, anchof, altof);
                ctx.fill();
            }
            if (escenario[y][x] == 3) {
                ctx.beginPath();
                ctx.drawImage(camino, x * anchof, y * altof, anchof, altof);
                ctx.fill();
                ctx.beginPath();
                ctx.drawImage(puerta, x * anchof, y * altof, anchof, altof);
                ctx.fill();
            }
            if (escenario[y][x] == 4) {
                ctx.beginPath();
                ctx.drawImage(camino, x * anchof, y * altof, anchof, altof);
                ctx.fill();
                ctx.beginPath();
                ctx.drawImage(link, x * anchof, y * altof, anchof, altof);
                ctx.fill();
            }
            if (escenario[y][x] == 5) {
                ctx.beginPath();
                ctx.drawImage(camino, x * anchof, y * altof, anchof, altof);
                ctx.fill();
                ctx.beginPath();
                ctx.drawImage(moblin, x * anchof, y * altof, anchof, altof);
            }
            if (escenario[y][x] == 6) {
                ctx.beginPath();
                ctx.drawImage(camino, x * anchof, y * altof, anchof, altof);
                ctx.fill();
                ctx.beginPath();
                ctx.drawImage(disparolink, x * anchof, y * altof, anchof, altof);
                ctx.fill();
            }
            if (escenario[y][x] == 7) {
                ctx.beginPath();
                ctx.drawImage(camino, x * anchof, y * altof, anchof, altof);
                ctx.fill();
                ctx.beginPath();
                ctx.drawImage(zelda, x * anchof, y * altof, anchof, altof);
                ctx.fill();
            }
            if (escenario[y][x] == 8) {
                ctx.beginPath();
                ctx.drawImage(camino, x * anchof, y * altof, anchof, altof);
                ctx.fill();
                ctx.beginPath();
                ctx.drawImage(disparozelda, x * anchof, y * altof, anchof, altof);
                ctx.fill();
            }
        }
    }
    if (vidas1 <= 0 && vidas2 <= 0) {
        over();
    }
    if (nivel>2) {
        final();
    }
    if(vidas1<=0){
        entra1=true;
        for (y = 0; y < altoc; y++) {
            for (x = 0; x < anchoc; x++) {
                if (escenario[y][x] == 4) {
                    escenario[y][x] = 1;
                    break;
                }
            }
        }
    }
    if(vidas2<=0){
        entra2=true;
        for (y = 0; y < altoc; y++) {
            for (x = 0; x < anchoc; x++) {
                if (escenario[y][x] == 7) {
                    escenario[y][x] = 1;
                    break;
                }
            }
        }
    }
}
function nivel1() {
    canvas.width = 750;
    canvas.height = 500;
    anchoc = 15;
    altoc = 10;
}
function nivel2() {
    canvas.width = 1500;
    canvas.height = 600;
    escenario = escenario2;
    anchoc = 40;
    altoc = 12;
    document.getElementById('canva').style.marginLeft = "15%";
}
function over() {
    canvas.width = 1000;
    canvas.height = 600;
    ctx.drawImage(gameover, 0, 0);
    document.getElementById('canva').style.marginLeft = "20%";
    document.getElementById('info').style.display = "none";
}
function final() {
    canvas.width = 1000;
    canvas.height = 600;
    ctx.drawImage(fin, 0, 0);
    document.getElementById('canva').style.marginLeft = "20%";
    document.getElementById('info').style.display = "none";
}
//-----------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------MOVIMIENTOS---------------------------------------------------------------------------
function iniciaDisparoJugador1() {
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 4 && escenario[y][x + 1] == 1) {
                escenario[y][x + 1] = 6;
                break;
            }
        }
    }
}
function iniciaDisparoJugador2() {
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 7 && escenario[y][x + 1] == 1) {
                escenario[y][x + 1] = 8;
                break;
            }
        }
    }
}
function moverDerechaJugador1() {
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 4 && escenario[y][x + 1] == 1) {
                escenario[y][x] = 1;
                escenario[y][x + 1] = 4;
                console.log('derecha');
                break;
            }
            if (escenario[y][x] == 4 && escenario[y][x + 1] == 2) {
                escenario[y][x] = 1;
                escenario[y][x + 1] = 4;
                document.getElementById('puntos1').innerHTML = parseInt(document.getElementById('puntos1').innerHTML) + 50;
                document.getElementById('llave').innerHTML = "SI";
                console.log('derecha');
                llavecita = true;
                break;
            }
            if (escenario[y][x] == 4 && (escenario[y][x + 1] == 5)) {
                vidas1--;
                document.getElementById('vidas').innerHTML = vidas;
            }
            if (escenario[y][x] == 4 && escenario[y][x + 1] == 3 && llavecita == true) {
                entra1=true;
                document.getElementById('puntos1').innerHTML = parseInt(document.getElementById('puntos1').innerHTML) + 50;
                escenario[y][x] = 1;
                break;
            }
        }
    }
}
function moverIzquierdaJugador1() {
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 4 && escenario[y][x - 1] == 1) {
                escenario[y][x] = 1;
                escenario[y][x - 1] = 4;
                console.log('izquierda');
                break;
            }
            if (escenario[y][x] == 4 && escenario[y][x - 1] == 2) {
                escenario[y][x] = 1;
                escenario[y][x - 1] = 4;
                llavecita = true;
                document.getElementById('puntos1').innerHTML = parseInt(document.getElementById('puntos1').innerHTML) + 50;
                document.getElementById('llave').innerHTML = "SI";
                console.log('izquierda');
                break;
            }
            if (escenario[y][x] == 4 && (escenario[y][x - 1] == 5)) {
                vidas1--;
                document.getElementById('vidas').innerHTML = vidas;
            }
            if (escenario[y][x] == 4 && escenario[y][x - 1] == 3 && llavecita == true) {
                entra1=true;
                document.getElementById('puntos1').innerHTML = parseInt(document.getElementById('puntos1').innerHTML) + 50;
                escenario[y][x] = 1;
                break;
            }
        }
    }
}
function moverArribaJugador1() {
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 4 && escenario[y - 1][x] == 1) {
                escenario[y][x] = 1;
                escenario[y - 1][x] = 4;
                console.log('arriba');
                break;
            }
            if (escenario[y][x] == 4 && escenario[y - 1][x] == 2) {
                escenario[y][x] = 1;
                escenario[y - 1][x] = 4;
                llavecita = true;
                document.getElementById('puntos1').innerHTML = parseInt(document.getElementById('puntos1').innerHTML) + 50;
                document.getElementById('llave').innerHTML = "SI";
                console.log('arriba');
                break;
            }
            if (escenario[y][x] == 4 && (escenario[y - 1][x] == 5)) {
                vidas1--;
                document.getElementById('vidas').innerHTML = vidas;
            }
            if (escenario[y][x] == 4 && escenario[y - 1][x] == 3 && llavecita == true) {
                entra1=true;
                document.getElementById('puntos1').innerHTML = parseInt(document.getElementById('puntos1').innerHTML) + 50;
                escenario[y][x] = 1;
                break;
            }
        }
    }
}
function moverAbajoJugador1() {
    for (x = 0; x < anchoc; x++) {
        for (y = 0; y < altoc; y++) {
            if (escenario[y][x] == 4 && escenario[y + 1][x] == 1) {
                escenario[y][x] = 1;
                escenario[y + 1][x] = 4;
                console.log('abajo');
                break;
            }
            if (escenario[y][x] == 4 && escenario[y + 1][x] == 2) {
                escenario[y][x] = 1;
                escenario[y + 1][x] = 4;
                console.log('abajo');
                document.getElementById('puntos1').innerHTML = parseInt(document.getElementById('puntos1').innerHTML) + 50;
                document.getElementById('llave').innerHTML = "SI";
                llavecita = true;
                break;
            }
            if (escenario[y][x] == 4 && (escenario[y + 1][x] == 5)) {
                vidas1--;
                document.getElementById('vidas').innerHTML = vidas;
            }
            if (escenario[y][x] == 4 && escenario[y + 1][x] == 3 && llavecita == true) {
                entra1=true;
                document.getElementById('puntos1').innerHTML = parseInt(document.getElementById('puntos1').innerHTML) + 50;
                escenario[y][x] = 1;
                break;
            }
        }
    }
}
function moverDerechaJugador2() {
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 7 && escenario[y][x + 1] == 1) {
                escenario[y][x] = 1;
                escenario[y][x + 1] = 7;
                console.log('derecha');
                break;
            }
            if (escenario[y][x] == 7 && escenario[y][x + 1] == 2) {
                escenario[y][x] = 1;
                escenario[y][x + 1] = 7;
                document.getElementById('puntos2').innerHTML = parseInt(document.getElementById('puntos2').innerHTML) + 50;
                document.getElementById('llave').innerHTML = "SI";
                console.log('derecha');
                llavecita = true;
                break;
            }
            if (escenario[y][x] == 7 && (escenario[y][x + 1] == 5)) {
                vidas2--;
                document.getElementById('vidas').innerHTML = vidas;
            }
            if (escenario[y][x] == 7 && escenario[y][x + 1] == 3 && llavecita == true) {
                entra2=true;
                document.getElementById('puntos2').innerHTML = parseInt(document.getElementById('puntos2').innerHTML) + 50;
                escenario[y][x] = 1;
                break;
            }
        }
    }
}
function moverIzquierdaJugador2() {
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 7 && escenario[y][x - 1] == 1) {
                escenario[y][x] = 1;
                escenario[y][x - 1] = 7;
                console.log('izquierda');
                break;
            }
            if (escenario[y][x] == 7 && escenario[y][x - 1] == 2) {
                escenario[y][x] = 1;
                escenario[y][x - 1] = 7;
                llavecita = true;
                document.getElementById('puntos2').innerHTML = parseInt(document.getElementById('puntos2').innerHTML) + 50;
                document.getElementById('llave').innerHTML = "SI";
                console.log('izquierda');
                break;
            }
            if (escenario[y][x] == 7 && (escenario[y][x - 1] == 5)) {
                vidas2--;
                document.getElementById('vidas').innerHTML = vidas;
            }
            if (escenario[y][x] == 7 && escenario[y][x - 1] == 3 && llavecita == true) {
                entra2=true;
                document.getElementById('puntos2').innerHTML = parseInt(document.getElementById('puntos2').innerHTML) + 50;
                escenario[y][x] = 1;
                break;
            }
        }
    }
}
function moverArribaJugador2() {
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 7 && escenario[y - 1][x] == 1) {
                escenario[y][x] = 1;
                escenario[y - 1][x] = 7;
                console.log('arriba');
                break;
            }
            if (escenario[y][x] == 7 && escenario[y - 1][x] == 2) {
                escenario[y][x] = 1;
                escenario[y - 1][x] = 7;
                llavecita = true;
                document.getElementById('puntos2').innerHTML = parseInt(document.getElementById('puntos2').innerHTML) + 50;
                document.getElementById('llave').innerHTML = "SI";
                console.log('arriba');
                break;
            }
            if (escenario[y][x] == 7 && (escenario[y - 1][x] == 5)) {
                vidas2--;
                document.getElementById('vidas').innerHTML = vidas;
            }
            if (escenario[y][x] == 7 && escenario[y - 1][x] == 3 && llavecita == true) {
                entra2=true;
                document.getElementById('puntos2').innerHTML = parseInt(document.getElementById('puntos2').innerHTML) + 50;
                escenario[y][x] = 1;
                break;
            }
        }
    }
}
function moverAbajoJugador2() {
    for (x = 0; x < anchoc; x++) {
        for (y = 0; y < altoc; y++) {
            if (escenario[y][x] == 7 && escenario[y + 1][x] == 1) {
                escenario[y][x] = 1;
                escenario[y + 1][x] = 7;
                console.log('abajo');
                break;
            }
            if (escenario[y][x] == 7 && escenario[y + 1][x] == 2) {
                escenario[y][x] = 1;
                escenario[y + 1][x] = 7;
                console.log('abajo');
                document.getElementById('puntos2').innerHTML = parseInt(document.getElementById('puntos2').innerHTML) + 50;
                document.getElementById('llave').innerHTML = "SI";
                llavecita = true;
                break;
            }
            if (escenario[y][x] == 7 && (escenario[y + 1][x] == 5)) {
                vidas2--;
                document.getElementById('vidas').innerHTML = vidas;
            }
            if (escenario[y][x] == 7 && escenario[y + 1][x] == 3 && llavecita == true) {
                entra2=true;
                document.getElementById('puntos2').innerHTML = parseInt(document.getElementById('puntos2').innerHTML) + 50;
                escenario[y][x] = 1;
                break;
            }
        }
    }
}
function intervaloMovimiento() {
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 5 && escenario[y][x + 1] == 1 && derecha == true) {
                escenario[y][x] = 1;
                escenario[y][x + 1] = 5;
                break;
            }
            if (escenario[y][x] == 5 && (escenario[y][x + 1] == 0 || x >= anchoc) && derecha == true) {
                derecha = false;
            }
            if (escenario[y][x] == 5 && escenario[y][x - 1] == 1 && derecha == false) {
                escenario[y][x] = 1;
                escenario[y][x - 1] = 5;
                break;
            }
            if (escenario[y][x] == 5 && (escenario[y][x - 1] == 0 || x <= anchoc) && derecha == false) {
                derecha = true;
            }
            if (escenario[y][x] == 5 && (escenario[y + 1][x] == 4)) {
                vidas1--;
                document.getElementById('vidas1').innerHTML = vidas1;
            }
            if (escenario[y][x] == 5 && (escenario[y - 1][x] == 4)) {
                vidas1--;
                document.getElementById('vidas1').innerHTML = vidas1;
            }
            if (escenario[y][x] == 5 && (escenario[y][x - 1] == 4)) {
                vidas1--;
                document.getElementById('vidas1').innerHTML = vidas1;
            }
            if (escenario[y][x] == 5 && (escenario[y][x + 1] == 4)) {
                vidas1--;
                document.getElementById('vidas1').innerHTML = vidas1;
            }
            if (escenario[y][x] == 5 && (escenario[y + 1][x] == 7)) {
                vidas2--;
                document.getElementById('vidas2').innerHTML = vidas2;
            }
            if (escenario[y][x] == 5 && (escenario[y - 1][x] == 7)) {
                vidas2--;
                document.getElementById('vidas2').innerHTML = vidas2;
            }
            if (escenario[y][x] == 5 && (escenario[y][x - 1] == 7)) {
                vidas2--;
                document.getElementById('vidas2').innerHTML = vidas2;
            }
            if (escenario[y][x] == 5 && (escenario[y][x + 1] == 7)) {
                vidas3--;
                document.getElementById('vidas2').innerHTML = vidas2;
            }
        }
    }
    dispararJugador1();
    dispararJugador2();
}
function dispararJugador1() {
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 6 && escenario[y][x + 1] == 1) {
                escenario[y][x] = 1;
                escenario[y][x + 1] = 6;
                break;
            }
            if (escenario[y][x] == 6 && (escenario[y][x + 1] !=1)) {
                escenario[y][x] = 1;
                if(escenario[y][x + 1] == 5){
                    document.getElementById('puntos2').innerHTML = parseInt(document.getElementById('puntos2').innerHTML) + 25;
                    escenario[y][x + 1] = 1;
                }
                break;
            }
        }
    }
}
function dispararJugador2() {
    for (y = 0; y < altoc; y++) {
        for (x = 0; x < anchoc; x++) {
            if (escenario[y][x] == 8 && escenario[y][x + 1] == 1) {
                escenario[y][x] = 1;
                escenario[y][x + 1] = 8;
                break;
            }
            if (escenario[y][x] == 8 && (escenario[y][x + 1] !=1)) {
                escenario[y][x] = 1;
                if(escenario[y][x + 1] == 5){
                    document.getElementById('puntos2').innerHTML = parseInt(document.getElementById('puntos2').innerHTML) + 25;
                    escenario[y][x + 1] = 1;
                }
                break;
            }
        }
    }
}
//------------------------------------------------------------------------------------------------------------------------