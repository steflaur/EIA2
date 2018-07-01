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

    //Arrays Fische + Bubbles
    let movingObjects: MovingObjects[] = [];

    //Anzahl Fische + Bubbles
    let nF: number = 10;
    let nB: number = 30;

    //init
    function init(): void {
        console.log("#call init");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        canvas.addEventListener("click", feedTheFish);

        drawStaticBackground(canvas);


        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        //for-Schleife Blubbles
        for (let i: number = 0; i < nB; i++) {
            let bubble: Bubble = new Bubble();
            
            movingObjects.push(bubble);

            console.log("push Bubbles");
        }//close for

        //for-Schleife Fisch
        for (let i: number = 0; i < nF; i++) {
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

    //feed
    function feedTheFish(_event: MouseEvent): void {

        let newPositionX: number = _event.clientX;
        let newPositionY: number = _event.clientY;


        for (let i: number = 0; i < 4; i++) {
            let food: Food = new Food(newPositionX, newPositionY);
            movingObjects.push(food);
            newPositionX += Math.random() * 60;
            newPositionX -= Math.random() * 60;
            newPositionY += Math.random() * 30;
        }
    }//feed

}//namespace