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
    A09_canvas.b = "black";
    function init() {
        console.log("#call init");
        let canvas = document.getElementsByTagName("canvas")[0];
        let ctx = canvas.getContext("2d");
        console.log("CanvasRendering2d active");
        ctx.strokeStyle = A09_canvas.b;
        ctx.strokeRect(0, 0, 800, 600);
        //Wasser
        A09_canvas.drawWater("lightblue", "skyblue", canvas.width, canvas.height, 10, 400, ctx);
        //Boden
        A09_canvas.drawBottom("burlywood", "peru", 700, 0, 400, ctx);
        //Schatzkiste
        A09_canvas.drawBubbler("saddlebrown", "#5a2d0c", 350, 520, ctx);
        //BubbleLoops
        for (let i = 0; i < 20; i++) {
            let x = 120 + Math.random() * 200;
            let y = Math.random() * 120;
            A09_canvas.drawBubble("skyblue", "whitesmoke", x, y, 5, ctx);
        } //close
        for (let i = 0; i < 20; i++) {
            let x = 240 + Math.random() * 120;
            let y = 120 + Math.random() * 180;
            A09_canvas.drawBubble("skyblue", "whitesmoke", x, y, 4, ctx);
        } //close
        for (let i = 0; i < 15; i++) {
            let x = 300 + Math.random() * 100;
            let y = 260 + Math.random() * 120;
            A09_canvas.drawBubble("skyblue", "whitesmoke", x, y, 3, ctx);
        } //close
        for (let i = 0; i < 30; i++) {
            let x = 380 + Math.random() * 40;
            let y = 380 + Math.random() * 140;
            A09_canvas.drawBubble("skyblue", "whitesmoke", x, y, 2, ctx);
        } //close
        //Pflanzen
        A09_canvas.drawPlant("green", "darkgreen", "brown", 85, 400, ctx);
        A09_canvas.drawPlant("green", "darkgreen", "brown", 700, 500, ctx);
        //FishLoop
        for (let i = 0; i < 15; i++) {
            let x = Math.random() * 800;
            let y = 50 + Math.random() * 400;
            A09_canvas.doriFish("blue", "darkblue", "yellow", "gold", "whitesmoke", x, y, ctx);
        } //close
    } //close init
})(A09_canvas || (A09_canvas = {})); //close namespace
//# sourceMappingURL=main.js.map