/*
Aufgabe 09: Canvas
Name: Laura Vogt
Matrikel: 256056
Datum: 17Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A09_canvas;
(function (A09_canvas) {
    window.addEventListener("load", init);
    let b = "black";
    function init() {
        console.log("#call init");
        let canvas = document.getElementsByTagName("canvas")[0];
        let ctx = canvas.getContext("2d");
        console.log("CanvasRendering2d active");
        ctx.strokeStyle = b;
        ctx.strokeRect(0, 0, 800, 600);
        //Wasser
        drawWater("lightblue", "skyblue", canvas.width, canvas.height, ctx);
        //Boden
        drawBottom("peru", "sienna", 700, 0, 400, ctx);
        //BubbleLoops
        for (let i = 0; i < 20; i++) {
            let x = 120 + Math.random() * 200;
            let y = Math.random() * 120;
            drawBubble("skyblue", "whitesmoke", x, y, 5, ctx);
        } //close
        for (let i = 0; i < 20; i++) {
            let x = 240 + Math.random() * 120;
            let y = 120 + Math.random() * 180;
            drawBubble("skyblue", "whitesmoke", x, y, 4, ctx);
        } //close
        for (let i = 0; i < 15; i++) {
            let x = 300 + Math.random() * 100;
            let y = 260 + Math.random() * 120;
            drawBubble("skyblue", "whitesmoke", x, y, 3, ctx);
        } //close
        for (let i = 0; i < 20; i++) {
            let x = 380 + Math.random() * 40;
            let y = 380 + Math.random() * 140;
            drawBubble("skyblue", "whitesmoke", x, y, 2, ctx);
        } //close
        //Pflanzen
        drawPlant("green", "darkgreen", "brown", 85, 400, ctx);
        drawPlant("green", "darkgreen", "brown", 700, 500, ctx);
        //FishLoop
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * 800;
            let y = 50 + Math.random() * 400;
            doriFish("blue", "darkblue", "yellow", "gold", "whitesmoke", x, y, ctx);
        } //close
    } //close init
    //function Wasser
    function drawWater(_c1, _c2, _x, _y, _ctx) {
        //Wasser
        let gradient = _ctx.createRadialGradient(400, 520, 10, 400, 400, 400);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        _ctx.fillStyle = gradient;
        _ctx.fillRect(0, 0, _x, _y);
    }
    //function Boden & Kies
    function drawBottom(_c1, _c2, _w, _x, _y, _ctx) {
        //Boden
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x + 100, _y - 60, _x + 240, _y + 40);
        _ctx.quadraticCurveTo(_x + 400, _y + 140, _x + 600, _y + 60);
        _ctx.quadraticCurveTo(_x + 700, _y + 20, _x + 800, _y + 60);
        _ctx.lineTo(_x + 800, _y + 200);
        _ctx.lineTo(_x, _y + 200);
        _ctx.lineTo(_x, _y);
        _ctx.stroke();
        _ctx.fillStyle = _c1;
        _ctx.fill();
        _ctx.closePath();
        //Kies
        for (let i = 0; i < _w; i++) {
            let x = Math.random() * (_x + 800);
            let y = (_y + 100) + Math.random() * (_y - 300);
            drawBubble(_c2, _c2, x, y, 1, _ctx);
        } //close
    }
    //function bubble für Bubbels und Kies
    function drawBubble(_cF, _cS, _x, _y, _r, _ctx) {
        _ctx.beginPath();
        _ctx.arc(_x, _y, _r, 0, 2 * Math.PI);
        _ctx.strokeStyle = _cS;
        _ctx.stroke();
        _ctx.fillStyle = _cF;
        _ctx.fill();
        _ctx.closePath();
    }
    //function plant
    function drawPlant(_c1, _c2, _c3, _x, _y, _ctx) {
        //Pflanze mitte
        //Stiel
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x - 5, _y - 40, _x - 10, _y - 57);
        _ctx.lineWidth = 2;
        _ctx.strokeStyle = _c3;
        _ctx.stroke();
        _ctx.closePath();
        //Blatt
        _ctx.beginPath();
        _ctx.moveTo(_x - 10, _y - 55);
        _ctx.quadraticCurveTo(_x - 75, _y - 200, _x - 5, _y - 310);
        _ctx.quadraticCurveTo(_x + 45, _y - 130, _x - 10, _y - 55);
        _ctx.fillStyle = _c2;
        _ctx.fill();
        _ctx.closePath();
        //Pflanze rechts
        //Stiel
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x - 5, _y - 40, _x + 10, _y - 60);
        _ctx.lineWidth = 2;
        _ctx.strokeStyle = _c3;
        _ctx.stroke();
        _ctx.closePath();
        //Blatt
        _ctx.beginPath();
        _ctx.moveTo(_x + 5, _y - 50);
        _ctx.quadraticCurveTo(_x - 35, _y - 200, _x + 65, _y - 300);
        _ctx.quadraticCurveTo(_x + 85, _y - 130, _x + 5, _y - 50);
        _ctx.fillStyle = _c1;
        _ctx.fill();
        _ctx.closePath();
        //Pflanze links
        //Stiel
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x - 5, _y - 30, _x - 15, _y - 42);
        _ctx.lineWidth = 2;
        _ctx.strokeStyle = _c3;
        _ctx.stroke();
        _ctx.closePath();
        //Blatt
        _ctx.beginPath();
        _ctx.moveTo(_x - 15, _y - 40);
        _ctx.quadraticCurveTo(_x - 125, _y - 140, _x - 70, _y - 280);
        _ctx.quadraticCurveTo(_x + 5, _y - 160, _x - 15, _y - 40);
        _ctx.fillStyle = _c1;
        _ctx.fill();
        _ctx.closePath();
    }
    //function dori
    function doriFish(_c1, _c2, _c3, _c4, _c5, _x, _y, _ctx) {
        //Fisch
        //Flosse gross hinten
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x + 25, _y + 20, _x + 60, _y - 10);
        _ctx.quadraticCurveTo(_x + 35, _y + 25, _x + 60, _y + 60);
        _ctx.quadraticCurveTo(_x + 25, _y + 30, _x, _y + 50);
        _ctx.fillStyle = _c2;
        _ctx.fill();
        _ctx.closePath();
        //Streifen
        _ctx.beginPath();
        _ctx.moveTo(_x + 70, _y - 15);
        _ctx.quadraticCurveTo(_x + 40, _y + 15, _x + 20, _y + 12);
        _ctx.strokeStyle = _c4;
        _ctx.stroke();
        _ctx.closePath();
        _ctx.beginPath();
        _ctx.moveTo(_x + 70, _y + 65);
        _ctx.quadraticCurveTo(_x + 40, _y + 35, _x + 20, _y + 38);
        _ctx.stroke();
        _ctx.closePath();
        //Körper
        _ctx.beginPath();
        _ctx.moveTo(_x + 20, _y - 20);
        _ctx.quadraticCurveTo(_x - 32, _y - 10, _x - 42, _y + 27);
        //Mund
        _ctx.quadraticCurveTo(_x - 38, _y + 30, _x - 30, _y + 29);
        _ctx.quadraticCurveTo(_x - 32, _y + 35, _x - 42, _y + 33);
        _ctx.quadraticCurveTo(_x - 40, _y + 55, _x + 20, _y + 70);
        _ctx.quadraticCurveTo(_x - 5, _y + 20, _x + 20, _y - 20);
        _ctx.fillStyle = _c1;
        _ctx.fill();
        _ctx.closePath();
        //Streifen klein
        _ctx.beginPath();
        _ctx.moveTo(_x - 10, _y + 60);
        _ctx.quadraticCurveTo(_x - 35, _y + 20, _x - 10, _y - 10);
        _ctx.quadraticCurveTo(_x - 25, _y + 20, _x - 10, _y + 60);
        _ctx.fillStyle = _c3;
        _ctx.fill();
        _ctx.closePath();
        //Streifen gross
        _ctx.beginPath();
        _ctx.moveTo(_x + 5, _y + 66);
        _ctx.quadraticCurveTo(_x - 20, _y + 20, _x + 5, _y - 16);
        _ctx.quadraticCurveTo(_x - 10, _y + 20, _x + 5, _y + 66);
        _ctx.fill();
        _ctx.closePath();
        //Augen
        //aussen
        _ctx.beginPath();
        _ctx.arc(_x - 15, _y + 10, 5, 0, 2 * Math.PI);
        _ctx.strokeStyle = b;
        _ctx.stroke();
        _ctx.fillStyle = _c5;
        _ctx.fill();
        _ctx.closePath();
        //innen
        _ctx.beginPath();
        _ctx.arc(_x - 15, _y + 10, 2.5, 0, 2 * Math.PI);
        _ctx.fillStyle = b;
        _ctx.fill();
        _ctx.closePath();
        //Wimper
        _ctx.beginPath();
        _ctx.moveTo(_x - 18, _y + 5);
        _ctx.quadraticCurveTo(_x - 15, _y - 22, _x + 30, _y - 30);
        _ctx.quadraticCurveTo(_x - 7, _y - 20, _x - 18, _y + 5);
        _ctx.fillStyle = _c2;
        _ctx.fill();
        _ctx.closePath();
        //vordere Flosse
        _ctx.beginPath();
        _ctx.moveTo(_x - 17, _y + 45);
        _ctx.quadraticCurveTo(_x - 20, _y + 60, _x, _y + 75);
        _ctx.closePath();
        _ctx.fillStyle = _c4;
        _ctx.fill();
        //hintere Flosse
        _ctx.beginPath();
        _ctx.moveTo(_x - 8, _y + 50);
        _ctx.quadraticCurveTo(_x - 12, _y + 63, _x + 23, _y + 84);
        _ctx.closePath();
        _ctx.fill();
    }
})(A09_canvas || (A09_canvas = {})); //close namespace
//# sourceMappingURL=main.js.map