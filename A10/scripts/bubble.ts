/* 
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 24Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A10_canvas {

    export class Bubble {

        x: number;
        y: number;
        r: number;
        c1:string;
        c2: string;
        
        //declare methods
        move(): void {
            /*
               this.x += ;   
               this.y += ;  
               */
        }//move


        draw(): void {
            
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            ctx.strokeStyle = this.c2;
            ctx.stroke();
            ctx.fillStyle = this.c1;
            ctx.fill();
            ctx.closePath();

        }//draw

    }//class
}//namespace