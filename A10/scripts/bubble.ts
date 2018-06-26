/* 
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 25Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A10_canvas {

    export class Bubble {

        x: number;
        y: number;
        speed: number;
        radius: number;
        c1: string;
        c2: string;

        //declare methods
        move(): void {
            this.y -= this.speed;
            if (this.y < 0) {
                this.y = crc2.canvas.height - 80;
            }//if close
        }//move close


        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.strokeStyle = this.c2;
            crc2.stroke();
            crc2.fillStyle = this.c1;
            crc2.fill();
            crc2.closePath();

        }//close draw

    }//close class
}//close namespace