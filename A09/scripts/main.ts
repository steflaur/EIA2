/* 
Aufgabe 09: Canvas
Name: Laura Vogt
Matrikel: 256056
Datum: 

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A09_canvas {

    window.addEventListener("load", init);


    function init(): void {
        console.log("#call init");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
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
        ctx.fillStyle= "#dbd1b3";
        ctx.fill();
        ctx.closePath();


    }//close init


    //aquarium
    //Hintergrund mit gradient
    //boden
    //fische 1
    //fische 2
    //pflanzen

    //schatzkiste


}//close namespace