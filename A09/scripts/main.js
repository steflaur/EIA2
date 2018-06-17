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
    function init() {
        console.log("#call init");
        let canvas = document.getElementsByTagName("canvas")[0];
        let ctx = canvas.getContext("2d");
        console.log("CanvasRendering2d active");
        ctx.strokeStyle = "black";
        //Wasser
        var gradient = ctx.createRadialGradient(400, 520, 10, 400, 400, 400);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(1, 'lightblue');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 800, 600);
        ctx.strokeRect(0, 0, 800, 600);
        //Boden
        ctx.beginPath();
        ctx.moveTo(0, 400);
        ctx.quadraticCurveTo(100, 340, 240, 440);
        ctx.quadraticCurveTo(400, 540, 600, 460);
        ctx.quadraticCurveTo(700, 420, 800, 460);
        ctx.lineTo(800, 600);
        ctx.lineTo(0, 600);
        ctx.lineTo(0, 400);
        ctx.stroke();
        ctx.fillStyle = "#dbd1b3";
        ctx.fill();
        ctx.closePath();
        //Pflanzen
        drawPlant(85, 400, ctx);
        drawPlant(700, 500, ctx);
        //BubbleLoops
        for (let i = 0; i < 20; i++) {
            let x = 200 + Math.random() * 200;
            let y = Math.random() * 120;
            drawBubble(x, y, 5, "#6ce0e0", ctx);
        } //close
        for (let i = 0; i < 20; i++) {
            let x = 280 + Math.random() * 80;
            let y = 120 + Math.random() * 180;
            drawBubble(x, y, 4, "#81e4e4", ctx);
        } //close
        for (let i = 0; i < 15; i++) {
            let x = 340 + Math.random() * 120;
            let y = 300 + Math.random() * 140;
            drawBubble(x, y, 3, "#96e9e9", ctx);
        } //close
        for (let i = 0; i < 15; i++) {
            let x = 380 + Math.random() * 40;
            let y = 440 + Math.random() * 100;
            drawBubble(x, y, 2, "#abeded", ctx);
        } //close
        //FishLoop
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * 800;
            let y = 50 + Math.random() * 400;
            doriFish(x, y, ctx);
        } //close
    } //close init
    function drawBubble(_x, _y, _r, _c, _ctx) {
        _ctx.beginPath();
        _ctx.arc(_x, _y, _r, 0, 2 * Math.PI);
        _ctx.strokeStyle = "black";
        _ctx.stroke();
        _ctx.fillStyle = _c;
        _ctx.fill();
        _ctx.closePath();
    }
    //plant function
    function drawPlant(_x, _y, _ctx) {
        //Pflanze mitte
        //Stiel
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x - 5, _y - 40, _x - 10, _y - 57);
        _ctx.lineWidth = 2;
        _ctx.strokeStyle = "brown";
        _ctx.stroke();
        _ctx.closePath();
        //Blatt
        _ctx.beginPath();
        _ctx.moveTo(_x - 10, _y - 55);
        _ctx.quadraticCurveTo(_x - 75, _y - 200, _x - 5, _y - 310);
        _ctx.quadraticCurveTo(_x + 45, _y - 130, _x - 10, _y - 55);
        _ctx.fillStyle = "darkgreen";
        _ctx.fill();
        _ctx.closePath();
        //Pflanze rechts
        //Stiel
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x - 5, _y - 40, _x + 10, _y - 60);
        _ctx.lineWidth = 2;
        _ctx.strokeStyle = "brown";
        _ctx.stroke();
        _ctx.closePath();
        //Blatt
        _ctx.beginPath();
        _ctx.moveTo(_x + 5, _y - 50);
        _ctx.quadraticCurveTo(_x - 35, _y - 200, _x + 65, _y - 300);
        _ctx.quadraticCurveTo(_x + 85, _y - 130, _x + 5, _y - 50);
        _ctx.fillStyle = "green";
        _ctx.fill();
        _ctx.closePath();
        //Pflanze links
        //Stiel
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x - 5, _y - 30, _x - 15, _y - 42);
        _ctx.lineWidth = 2;
        _ctx.strokeStyle = "brown";
        _ctx.stroke();
        _ctx.closePath();
        //Blatt
        _ctx.beginPath();
        _ctx.moveTo(_x - 15, _y - 40);
        _ctx.quadraticCurveTo(_x - 125, _y - 140, _x - 70, _y - 280);
        _ctx.quadraticCurveTo(_x + 5, _y - 160, _x - 15, _y - 40);
        _ctx.fillStyle = "green";
        _ctx.fill();
        _ctx.closePath();
    }
    //function fisch
    function doriFish(_x, _y, _ctx) {
        //Fisch
        //Flosse gross hinten
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x + 25, _y + 20, _x + 60, _y - 10);
        _ctx.quadraticCurveTo(_x + 35, _y + 25, _x + 60, _y + 60);
        _ctx.quadraticCurveTo(_x + 25, _y + 30, _x, _y + 50);
        _ctx.fillStyle = "darkblue";
        _ctx.fill();
        _ctx.closePath();
        //Streifen
        _ctx.beginPath();
        _ctx.moveTo(_x + 60, _y - 10);
        _ctx.quadraticCurveTo(_x + 40, _y + 15, _x + 20, _y + 12);
        _ctx.strokeStyle = "gold";
        _ctx.stroke();
        _ctx.closePath();
        _ctx.beginPath();
        _ctx.moveTo(_x + 60, _y + 60);
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
        _ctx.fillStyle = "blue";
        _ctx.fill();
        _ctx.closePath();
        //Streifen klein
        _ctx.beginPath();
        _ctx.moveTo(_x - 10, _y + 60);
        _ctx.quadraticCurveTo(_x - 35, _y + 20, _x - 10, _y - 10);
        _ctx.quadraticCurveTo(_x - 25, _y + 20, _x - 10, _y + 60);
        _ctx.fillStyle = "yellow";
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
        _ctx.strokeStyle = "black";
        _ctx.stroke();
        _ctx.fillStyle = "whitesmoke";
        _ctx.fill();
        _ctx.closePath();
        //innen
        _ctx.beginPath();
        _ctx.arc(_x - 15, _y + 10, 2.5, 0, 2 * Math.PI);
        _ctx.fillStyle = "black";
        _ctx.fill();
        _ctx.closePath();
        //Wimper
        _ctx.beginPath();
        _ctx.moveTo(_x - 18, _y + 5);
        _ctx.quadraticCurveTo(_x - 15, _y - 22, _x + 30, _y - 30);
        _ctx.quadraticCurveTo(_x - 7, _y - 20, _x - 18, _y + 5);
        _ctx.fillStyle = "darkblue";
        _ctx.fill();
        _ctx.closePath();
        //vordere Flosse
        _ctx.beginPath();
        _ctx.moveTo(_x - 17, _y + 45);
        _ctx.quadraticCurveTo(_x - 20, _y + 60, _x, _y + 75);
        _ctx.closePath();
        _ctx.fillStyle = "gold";
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