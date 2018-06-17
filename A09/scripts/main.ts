/* 
Aufgabe 09: Canvas
Name: Laura Vogt
Matrikel: 256056
Datum: 17Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A09_canvas {

    window.addEventListener("load", init);

    export let b: string = "black";


    function init(): void {
        console.log("#call init");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        console.log("CanvasRendering2d active");


        ctx.strokeStyle = b;
        ctx.strokeRect(0, 0, 800, 600);

        //Wasser
        drawWater("lightblue", "skyblue", canvas.width, canvas.height, 10, 400, ctx);

        //Boden
        drawBottom("burlywood", "peru", 700, 0, 400, ctx);

        //Schatzkiste
        drawBubbler("saddlebrown", "#5a2d0c", 350, 520, ctx);

        //BubbleLoops
        for (let i: number = 0; i < 20; i++) {
            let x: number = 120 + Math.random() * 200;
            let y: number = Math.random() * 120;
            drawBubble("skyblue", "whitesmoke", x, y, 5, ctx);
        }//close

        for (let i: number = 0; i < 20; i++) {
            let x: number = 240 + Math.random() * 120;
            let y: number = 120 + Math.random() * 180;
            drawBubble("skyblue", "whitesmoke", x, y, 4, ctx);
        }//close

        for (let i: number = 0; i < 15; i++) {
            let x: number = 300 + Math.random() * 100;
            let y: number = 260 + Math.random() * 120;
            drawBubble("skyblue", "whitesmoke", x, y, 3, ctx);
        }//close

        for (let i: number = 0; i < 30; i++) {
            let x: number = 380 + Math.random() * 40;
            let y: number = 380 + Math.random() * 140;
            drawBubble("skyblue", "whitesmoke", x, y, 2, ctx);
        }//close

        //Pflanzen
        drawPlant("green", "darkgreen", "brown", 85, 400, ctx);
        drawPlant("green", "darkgreen", "brown", 700, 500, ctx);

        //FishLoop
        for (let i: number = 0; i < 15; i++) {
            let x: number = Math.random() * 800;
            let y: number = 50 + Math.random() * 400;
            doriFish("blue", "darkblue", "yellow", "gold", "whitesmoke", x, y, ctx);
        }//close

    }//close init

}//close namespace