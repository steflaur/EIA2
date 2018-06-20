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

    export class Fish {

        x: number;
        y: number;
        c1: string;
        c2: string;
        c3: string;
        c4: string;
        c5: string;
        

        //declare methods
        move(): void {
            /*
               this.x += ;   
               thi += ;  
               */   
        }


        draw(): void {

            //Fisch
            //Flosse gross hinten
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.quadraticCurveTo(this.x + 25, this.y + 20, this.x + 60, this.y - 10);
            ctx.quadraticCurveTo(this.x + 35, this.y + 25, this.x + 60, this.y + 60);
            ctx.quadraticCurveTo(this.x + 25, this.y + 30, this.x, this.y + 50);
            ctx.fillStyle = this.c2;
            ctx.fill();
            ctx.closePath();

            //Streifen
            ctx.beginPath();
            ctx.moveTo(this.x + 70, this.y - 15);
            ctx.quadraticCurveTo(this.x + 40, this.y + 15, this.x + 20, this.y + 12);
            ctx.strokeStyle = this.c4;
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.moveTo(this.x + 70, this.y + 65);
            ctx.quadraticCurveTo(this.x + 40, this.y + 35, this.x + 20, this.y + 38);
            ctx.stroke();
            ctx.closePath();


            //Körper
            ctx.beginPath();
            ctx.moveTo(this.x + 20, this.y - 20);
            ctx.quadraticCurveTo(this.x - 32, this.y - 10, this.x - 42, this.y + 27);

            //Mund
            ctx.quadraticCurveTo(this.x - 38, this.y + 30, this.x - 30, this.y + 29);
            ctx.quadraticCurveTo(this.x - 32, this.y + 35, this.x - 42, this.y + 33);

            ctx.quadraticCurveTo(this.x - 40, this.y + 55, this.x + 20, this.y + 70);
            ctx.quadraticCurveTo(this.x - 5, this.y + 20, this.x + 20, this.y - 20);
            ctx.fillStyle = this.c1;
            ctx.fill();
            ctx.closePath();

            //Streifen klein
            ctx.beginPath();
            ctx.moveTo(this.x - 10, this.y + 60);
            ctx.quadraticCurveTo(this.x - 35, this.y + 20, this.x - 10, this.y - 10);
            ctx.quadraticCurveTo(this.x - 25, this.y + 20, this.x - 10, this.y + 60);
            ctx.fillStyle = this.c3;
            ctx.fill();
            ctx.closePath();

            //Streifen gross
            ctx.beginPath();
            ctx.moveTo(this.x + 5, this.y + 66);
            ctx.quadraticCurveTo(this.x - 20, this.y + 20, this.x + 5, this.y - 16);
            ctx.quadraticCurveTo(this.x - 10, this.y + 20, this.x + 5, this.y + 66);
            ctx.fill();
            ctx.closePath();


            //Augen
            //aussen
            ctx.beginPath();
            ctx.arc(this.x - 15, this.y + 10, 5, 0, 2 * Math.PI);
            ctx.strokeStyle = b;
            ctx.stroke();
            ctx.fillStyle = this.c5;
            ctx.fill();
            ctx.closePath();

            //innen
            ctx.beginPath();
            ctx.arc(this.x - 15, this.y + 10, 2.5, 0, 2 * Math.PI);
            ctx.fillStyle = b;
            ctx.fill();
            ctx.closePath();

            //Wimper
            ctx.beginPath();
            ctx.moveTo(this.x - 18, this.y + 5);
            ctx.quadraticCurveTo(this.x - 15, this.y - 22, this.x + 30, this.y - 30);
            ctx.quadraticCurveTo(this.x - 7, this.y - 20, this.x - 18, this.y + 5);
            ctx.fillStyle = this.c2;
            ctx.fill();
            ctx.closePath();

            //vordere Flosse
            ctx.beginPath();
            ctx.moveTo(this.x - 17, this.y + 45);
            ctx.quadraticCurveTo(this.x - 20, this.y + 60, this.x, this.y + 75);
            ctx.closePath();
            ctx.fillStyle = this.c4;
            ctx.fill();

            //hintere Flosse
            ctx.beginPath();
            ctx.moveTo(this.x - 8, this.y + 50);
            ctx.quadraticCurveTo(this.x - 12, this.y + 63, this.x + 23, this.y + 84);
            ctx.closePath();
            ctx.fill();

        }//draw

    }//class
}//namespace