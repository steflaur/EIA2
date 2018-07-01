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

    export class BubblingObjects extends MovingObjects {
        radius: number;
        color1: string;
        color2: string;

        constructor() {
            super();
            this.setSpeed();
            this.setStyle();
        }

        setSpeed(): void {
            this.ySpeed = 0.5 + Math.random() * 0.5;
            this.xSpeed = 0;
        }

        setStyle(): void {
            this.radius = 0.5 + Math.random() * 8;
            this.color1 = "skyblue";
            this.color2 = "whitesmoke";
        }//close Position, Borders & Style

        //move
        move(): void {

        }//close move

        //draw
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.strokeStyle = this.color2;
            crc2.stroke();
            crc2.fillStyle = this.color1;
            crc2.fill();
            crc2.closePath();
        }//close draw

    }//close class
}//close namespace