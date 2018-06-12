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

        ctx.fillRect(0, 0, 400, 400);
        
    }//close init
    
    
    //aquarium
    //Hintergrund mit gradient
    //boden
    //fische 1
    //fische 2
    //pflanzen
    
    //schatzkiste
    
    
}//close namespace