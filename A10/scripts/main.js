/*
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 24Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A10_canvas;
(function (A10_canvas) {
    window.addEventListener("load", init);
    let imgData;
    console.log("CanvasRendering2d active");
    //Arrays Fische + Bubbles
    let fishes = [];
    let bubbles = [];
    //Anzahl Fische + Bubbles
    let nF = 10;
    let nB = 30;
    //init
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        A10_canvas.crc2 = canvas.getContext("2d");
        console.log("#call init");
        //Rahmen
        A10_canvas.crc2.strokeStyle = "black";
        A10_canvas.crc2.strokeRect(0, 0, canvas.width, canvas.height);
        //Wasser
        A10_canvas.drawWater("lightblue", "skyblue", canvas.width, canvas.height, 10, 400);
        //Boden
        A10_canvas.drawBottom("burlywood", "peru", 700, 0, 400);
        //Schatzkiste
        A10_canvas.drawBubbler("saddlebrown", "#5a2d0c", 350, 520);
        //Pflanzen
        A10_canvas.drawPlant("green", "darkgreen", "brown", 85, 400);
        A10_canvas.drawPlant("green", "darkgreen", "brown", 700, 500);
        imgData = A10_canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //For-Schleife Blubber
        for (let i = 0; i < nB; i++) {
            let bubble = new A10_canvas.Bubble();
            bubble.x = 370 + Math.random() * 60;
            bubble.y = Math.random() * 500;
            bubble.speed = Math.random() * 3 + 1;
            bubble.radius = Math.random() * 10;
            bubble.c1 = "skyblue";
            bubble.c2 = "whitesmoke";
            bubbles.push(bubble);
        } //close for
        //For-Schleife Fisch
        for (let i = 0; i < nF; i++) {
            let fish = new A10_canvas.Fish();
            fish.x = Math.random() * A10_canvas.crc2.canvas.width;
            fish.y = 50 + Math.random() * 400;
            fish.speed = Math.random() * 0.5 + 2;
            fish.c1 = "blue";
            fish.c2 = "darkblue";
            fish.c3 = "yellow";
            fish.c4 = "gold";
            fish.c5 = "whitesmoke";
            fishes.push(fish);
        } //close for
        animate();
    } //close init
    //animate
    function animate() {
        console.log("#call animate");
        window.setTimeout(animate, 10);
        A10_canvas.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
        /*
        moveBubbles();
        drawBubbles();
        moveFishes();
        drawFishes();
        */
    } //close animate
    //move
    function moveObjects() {
        console.log("#call moveBubbles");
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
        console.log("#call moveFish");
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    } //draw
    //draw
    function drawObjects() {
        console.log("#call drawBubbles");
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].draw();
        }
        console.log("#call drawFishes");
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].draw();
        }
    } //move
})(A10_canvas || (A10_canvas = {})); //namespace
//# sourceMappingURL=main.js.map