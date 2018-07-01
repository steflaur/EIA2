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
    let nFish = 15;
    let nBubble = 50;
    //init
    function init() {
        console.log("#call init");
        let canvas = document.getElementsByTagName("canvas")[0];
        A11_canvas.crc2 = canvas.getContext("2d");
        //EventListener 2feedTheFish
        canvas.addEventListener("click", insertObject);
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
    //insert
    function insertObject(_event) {
        console.log("#call It's Happy Time!!");
        let xPosition = _event.clientX;
        let yPosition = _event.clientY;
        //ausgleich der veränderten werte durch css-Befehle
        xPosition -= 310;
        yPosition -= 70;
        let border = 380;
        if (yPosition < border) {
            happyMealTime(xPosition, yPosition);
        }
        else {
            happyBlubberTime(xPosition, yPosition);
        }
    } //insert
    function happyMealTime(xPosition, yPosition) {
        console.log("#call *It's Meal Time*");
        let n = 1 + Math.floor(Math.random() * 5);
        for (let i = 0; i < n; i++) {
            let food = new A11_canvas.Food(xPosition, yPosition);
            movingObjects.push(food);
            console.log("push food");
        }
    } //Food
    function happyBlubberTime(xPosition, yPosition) {
        console.log("#call *It's Blubber Time*");
        let n = 1 + Math.floor(Math.random() * 10);
        for (let i = 0; i < n; i++) {
            let blubber = new A11_canvas.Blubber(xPosition, yPosition);
            movingObjects.push(blubber);
            console.log("push blubber");
        }
    } //blubber
})(A11_canvas || (A11_canvas = {})); //namespace
//# sourceMappingURL=main.js.map