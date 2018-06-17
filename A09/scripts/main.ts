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
        ctx.fillStyle = "#dbd1b3";
        ctx.fill();
        ctx.closePath();
        
        
        
        
        //FishLoop
        for (let i: number = 0; i < 10; i++) {
            //ab Position x=100px über 400px verteilt
        let x: number = Math.random() * 800;
            //ab Position x=400px über 200px verteilt
        let y: number = 50 + Math.random() * 400;
            doriFish(x, y, ctx);   
            }//close
        
        drawPlant(ctx);

    }//close init
    
    //plant
        function drawPlant(_ctx : CanvasRenderingContext2D): void {
            //Pflanze mitte
        
        _ctx.beginPath();
        _ctx.moveTo(85, 400);
        _ctx.quadraticCurveTo(80, 360, 75, 343);
        _ctx.lineWidth=2;
        _ctx.strokeStyle = "brown";
        _ctx.stroke();
        _ctx.closePath();
        
        _ctx.beginPath();
        _ctx.moveTo(75, 345);
        _ctx.quadraticCurveTo(10, 200, 80, 90);
        _ctx.quadraticCurveTo( 130, 270, 75, 345);
        _ctx.fillStyle = "darkgreen";
        _ctx.fill();
        _ctx.closePath();
        
        //Pflanze rechts
        _ctx.beginPath();
        _ctx.moveTo(85, 400);
        _ctx.quadraticCurveTo(80, 360, 95, 340);
        _ctx.lineWidth=2;
        _ctx.strokeStyle = "brown";
        _ctx.stroke();
        _ctx.closePath();
        
        _ctx.beginPath();
        _ctx.moveTo(90, 350);
        _ctx.quadraticCurveTo(50, 200, 150, 100);
        _ctx.quadraticCurveTo( 170, 270, 90, 350);
        _ctx.fillStyle = "green";
        _ctx.fill();
        _ctx.closePath();
        
        //Pflanze links
        _ctx.beginPath();
        _ctx.moveTo(85, 400);
        _ctx.quadraticCurveTo(80, 370, 70, 358);
        _ctx.lineWidth=2;
        _ctx.strokeStyle = "brown";
        _ctx.stroke();
        _ctx.closePath();
        
        _ctx.beginPath();
        _ctx.moveTo(70, 360);
        _ctx.quadraticCurveTo(-40, 260, 15, 120);
        _ctx.quadraticCurveTo( 90, 240, 70, 360);
        _ctx.fillStyle = "green";
        _ctx.fill();
        _ctx.closePath();
        
         }
    
    //function fisch
        function doriFish(_x: number, _y: number, _ctx : CanvasRenderingContext2D): void {
           
        //Fisch
        //Flosse gross hinten
        _ctx.beginPath();
        _ctx.moveTo(_x, _y);
        _ctx.quadraticCurveTo(_x+25, _y+20, _x+60, _y-10);        
        _ctx.quadraticCurveTo(_x+35, _y+25, _x+60, _y+60);        
        _ctx.quadraticCurveTo(_x+25, _y+30, _x, _y+50);
        _ctx.fillStyle = "darkblue";
        _ctx.fill();
        _ctx.closePath();
        
        //Streifen
        _ctx.beginPath();
        _ctx.moveTo(_x+60, _y-10);
        _ctx.quadraticCurveTo(_x+40, _y+15, _x+20, _y+12);
        _ctx.strokeStyle = "gold";
        _ctx.stroke();
        _ctx.closePath();
        
        _ctx.beginPath();
        _ctx.moveTo(_x+60, _y+60);
        _ctx.quadraticCurveTo(_x+40, _y+35, _x+20, _y+38);
        _ctx.stroke();
        _ctx.closePath();   
            
        
        //Körper
        _ctx.beginPath();
        _ctx.moveTo(_x+20, _y-20);
        _ctx.quadraticCurveTo(_x-32, _y-10, _x-42, _y+27);
        
        //mund
        _ctx.quadraticCurveTo(_x-38, _y+30, _x-30, _y+29);
        _ctx.quadraticCurveTo(_x-32, _y+35, _x-42, _y+33);
        
        _ctx.quadraticCurveTo(_x-40, _y+55, _x+20, _y+70);
        _ctx.quadraticCurveTo(_x-5, _y+20, _x+20, _y-20);
        _ctx.fillStyle = "blue";
        _ctx.fill();
        _ctx.closePath();
        
        //streifen klein
        _ctx.beginPath();
        _ctx.moveTo(_x-10, _y+60);
        _ctx.quadraticCurveTo(_x-35, _y+20, _x-10, _y-10);
        _ctx.quadraticCurveTo(_x-25, _y+20, _x-10, _y+60);
        _ctx.fillStyle = "yellow";
        _ctx.fill();
        _ctx.closePath();
        
        //streifen gross
        _ctx.beginPath();
        _ctx.moveTo(_x+5, _y+66);
        _ctx.quadraticCurveTo(_x-20, _y+20, _x+5, _y-16);
        _ctx.quadraticCurveTo(_x-10, _y+20, _x+5, _y+66);
        _ctx.fill();
        _ctx.closePath();

        
        //Augen
        //aussen
        _ctx.beginPath();
        _ctx.arc(_x-15, _y+10, 5, 0, 2*Math.PI);
        _ctx.strokeStyle = "black";
        _ctx.stroke();
        _ctx.fillStyle = "whitesmoke";
        _ctx.fill();
        _ctx.closePath();
        
        //innen
        _ctx.beginPath();
        _ctx.arc(_x-15, _y+10, 2.5, 0, 2*Math.PI);
        _ctx.fillStyle = "black";
        _ctx.fill();
        _ctx.closePath();
        
        //wimper
        _ctx.beginPath();
        _ctx.moveTo(_x-18, _y+5);
        _ctx.quadraticCurveTo(_x-15, _y-22, _x+30, _y-30);
        _ctx.quadraticCurveTo(_x-7, _y-20, _x-18, _y+5);
        _ctx.fillStyle = "darkblue";
        _ctx.fill();
        _ctx.closePath();
        
        //vordere flosse
        _ctx.beginPath();
        _ctx.moveTo(_x-17, _y+45);
        _ctx.quadraticCurveTo(_x-20, _y+60, _x, _y+75);
        _ctx.closePath();
        _ctx.fillStyle = "gold";
        _ctx.fill();
        
        //hintere flosse
        _ctx.beginPath();
        _ctx.moveTo(_x-8, _y+50);
        _ctx.quadraticCurveTo(_x-12, _y+63, _x+23, _y+84);
        _ctx.closePath();
        _ctx.fill();
            
        }


    //aquarium
    //Hintergrund mit gradient
    //boden
    //fische 1
    //fische 2
    //pflanzen

    //schatzkiste


}//close namespace