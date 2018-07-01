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
    //Array der movingObjects
    let movingObjects = [];
    //Anzahl Fische + Bubbles
    let nFish = 10;
    let nBubble = 50;
    //init
    function init() {
        console.log("#call init");
        let canvas = document.getElementsByTagName("canvas")[0];
        A11_canvas.crc2 = canvas.getContext("2d");
        //EventListener 2feedTheFish
        canvas.addEventListener("click", feedTheFish);
        //function staticObjects
        A11_canvas.drawStaticBackground(canvas);
        imgData = A11_canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //for-Schleife Blubbles
        for (let i = 0; i < nBubble; i++) {
            let bubble = new A11_canvas.Bubble();
            movingObjects.push(bubble);
            console.log("push Bubbles");
        } //close for
        //for-Schleife Fische
        for (let i = 0; i < nFish; i++) {
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
        console.log("#call HappyMealTime!!");
        let nFood = 1 + Math.floor(Math.random() * 5);
        let xPosition = _event.clientX;
        let yPosition = _event.clientY;
        //ausgleich der veränderten werte durch cssnBefehle
        xPosition -= 310;
        yPosition -= 70;
        for (let i = 0; i < nFood; i++) {
            let food = new A11_canvas.Food(xPosition, yPosition);
            movingObjects.push(food);
            console.log("push food");
        }
    } //feed
})(A11_canvas || (A11_canvas = {})); //namespace
//# sourceMappingURL=main.js.map