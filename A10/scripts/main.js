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
    A10_canvas.canvas = document.getElementsByTagName("canvas")[0];
    A10_canvas.ctx = A10_canvas.canvas.getContext("2d");
    console.log("CanvasRendering2d active");
    let fishs1 = [];
    let n1 = 10;
    let fishs2 = [];
    let n2 = 10;
    let bubbles = [];
    let n3 = 20;
    function init() {
        console.log("#call init");
        A10_canvas.ctx.strokeStyle = "black";
        A10_canvas.ctx.strokeRect(0, 0, A10_canvas.canvas.width, A10_canvas.canvas.height);
        //For schleife Fische1
        for (let i = 0; i < n1; i++) {
            let fish1 = new A10_canvas.Fish();
            fish1.x = Math.random() * 800;
            fish1.y = 50 + Math.random() * 400;
            fish1.c1 = "blue";
            fish1.c2 = "darkblue";
            fish1.c3 = "yellow";
            fish1.c4 = "gold";
            fish1.c5 = "whitesmoke";
            fishs1.push(fish1);
        }
        //For schleife fische2
        for (let i = 0; i < n2; i++) {
            let fish2 = new A10_canvas.Fish();
            fish2.x = Math.random() * 800;
            fish2.y = 50 + Math.random() * 400;
            fish2.c1 = "PaleVioletRed";
            fish2.c2 = "MediumVioletRed";
            fish2.c3 = "Thistle";
            fish2.c4 = "Thistle";
            fish2.c5 = "whitesmoke";
            fishs2.push(fish2);
        }
        //for schleife bubble
        for (let i = 0; i < n2; i++) {
            let bubble = new A10_canvas.Bubble();
            bubble.x = 120 + Math.random() * 200;
            bubble.y = Math.random() * 120;
            bubble.r = 5;
            bubble.c1 = "skyblue";
            bubble.c2 = "whitesmoke";
            bubbles.push(bubble);
        }
        animate();
    }
    function animate() {
        console.log("#call animate");
        window.setTimeout(animate, 10);
        A10_canvas.ctx.clearRect(0, 0, A10_canvas.canvas.width, A10_canvas.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        console.log("#call move");
        //For schleife Fische
        for (let i = 0; i < fishs1.length; i++) {
            fishs1[i].move();
        }
        for (let i = 0; i < fishs2.length; i++) {
            fishs2[i].move();
        }
        //For schleife Blubber
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }
    function drawObjects() {
        console.log("#call draw");
        //Wasser
        A10_canvas.drawWater("lightblue", "skyblue", A10_canvas.canvas.width, A10_canvas.canvas.height, 10, 400);
        //Boden
        A10_canvas.drawBottom("burlywood", "peru", 700, 0, 400);
        //Schatzkiste
        A10_canvas.drawBubbler("saddlebrown", "#5a2d0c", 350, 520);
        //Pflanzen
        A10_canvas.drawPlant("green", "darkgreen", "brown", 85, 400);
        A10_canvas.drawPlant("green", "darkgreen", "brown", 700, 500);
        //Fische 
        for (let i = 0; i < fishs1.length; i++) {
            fishs1[i].move();
        }
        for (let i = 0; i < fishs2.length; i++) {
            fishs2[i].move();
        }
        //For schleife Blubber
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }
})(A10_canvas || (A10_canvas = {})); //namespace
//# sourceMappingURL=main.js.map