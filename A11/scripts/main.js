/*
Aufgabe 11: Canvas Inheritance
Name: Laura Vogt
Matrikel: 256056
Datum: 1Jul2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A11_canvas;
(function (A11_canvas) {
    window.addEventListener("load", init);
    let imgData;
    console.log("CanvasRendering2d active");
    //Arrays Fische + Bubbles
    let movingObjects = [];
    //Anzahl Fische + Bubbles
    let nF = 10;
    let nB = 30;
    //init
    function init() {
        console.log("#call init");
        let canvas = document.getElementsByTagName("canvas")[0];
        A11_canvas.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", feedTheFish);
        A11_canvas.drawStaticBackground(canvas);
        imgData = A11_canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //for-Schleife Blubbles
        for (let i = 0; i < nB; i++) {
            let bubble = new A11_canvas.Bubble();
            movingObjects.push(bubble);
            console.log("push Bubbles");
        } //close for
        //for-Schleife Fisch
        for (let i = 0; i < nF; i++) {
            let fish = new A11_canvas.Fish();
            movingObjects.push(fish);
            console.log("push fish");
        } //close for
        animate();
    } //close init
    //animate
    function animate() {
        console.log("#call animate");
        window.setTimeout(animate, 10);
        A11_canvas.crc2.clearRect(0, 0, A11_canvas.crc2.canvas.width, A11_canvas.crc2.canvas.height);
        A11_canvas.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    } //close animate
    //move
    function moveObjects() {
        console.log("#call moveMovingObjects");
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    } //move
    //draw
    function drawObjects() {
        console.log("#call drawMovingObjects");
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    } //draw
    //feed
    function feedTheFish(_event) {
        let newPositionX = _event.clientX;
        let newPositionY = _event.clientY;
        for (let i = 0; i < 4; i++) {
            let food = new A11_canvas.Food(newPositionX, newPositionY);
            movingObjects.push(food);
            newPositionX += Math.random() * 60;
            newPositionX -= Math.random() * 60;
            newPositionY += Math.random() * 30;
        }
    } //feed
})(A11_canvas || (A11_canvas = {})); //namespace
//# sourceMappingURL=main.js.map