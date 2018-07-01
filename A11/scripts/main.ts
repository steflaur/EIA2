/* 
Aufgabe 11: Canvas Inheritance
Name: Laura Vogt
Matrikel: 256056
Datum: 1Jul2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A11_canvas {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let imgData: ImageData;
    console.log("CanvasRendering2d active");

    //Array der movingObjects
    let movingObjects: MovingObjects[] = [];

    //Anzahl Fische + Bubbles
    let nFish: number = 15;
    let nBubble: number = 50;


    //init
    function init(): void {
        console.log("#call init");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //EventListener 2feedTheFish
        canvas.addEventListener("click", insertObject);

        //function staticObjects
        drawStaticBackground(canvas);

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        //for-Schleife Blubbles
        for (let i: number = 0; i < nBubble; i++) {
            let bubble: Bubble = new Bubble();
            movingObjects.push(bubble);
            console.log("push Bubbles");
        }//close for

        //for-Schleife Fische
        for (let i: number = 0; i < nFish; i++) {
            let fish: Fish = new Fish();
            movingObjects.push(fish);
            console.log("push fish");
        }//close for

        animate();

    }//close init


    //animate
    function animate(): void {
        console.log("#call animate");

        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();

    }//close animate

        //move
        function moveObjects(): void {
            console.log("#call moveMovingObjects");
            for (let i: number = 0; i < movingObjects.length; i++) {
                movingObjects[i].move();
            }
        }//move
    
        //draw
        function drawObjects(): void {
            console.log("#call drawMovingObjects");
            for (let i: number = 0; i < movingObjects.length; i++) {
                movingObjects[i].draw();
            }
        }//draw

    //insert
    function insertObject(_event: MouseEvent): void {
        console.log("#call It's Happy Time!!");
        let xPosition: number = _event.clientX;
        let yPosition: number = _event.clientY;
        //ausgleich der veränderten werte durch css-Befehle
        xPosition -= 310;
        yPosition -= 70;

        let border: number = 380;
        if (yPosition < border) {
            happyMealTime(xPosition, yPosition);
        }
        else {
            happyBlubberTime(xPosition, yPosition);
        }
    }//insert

        function happyMealTime(xPosition: number, yPosition: number): void {
            console.log("#call *It's Meal Time*");
            let n: number = 1 + Math.floor(Math.random() * 5);
    
            for (let i: number = 0; i < n; i++) {
                let food: Food = new Food(xPosition, yPosition);
                movingObjects.push(food);
                console.log("push food");
            }
        }//Food
    
        function happyBlubberTime(xPosition: number, yPosition: number): void {
            console.log("#call *It's Blubber Time*");
            let n: number = 1 + Math.floor(Math.random() * 10);
    
            for (let i: number = 0; i < n; i++) {
                let blubber: Blubber = new Blubber(xPosition, yPosition);
                movingObjects.push(blubber);
                console.log("push blubber");
            }
        }//blubber


}//namespace