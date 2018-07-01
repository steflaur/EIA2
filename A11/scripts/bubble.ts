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

    export class Bubble extends MovingObjects {

        speed: number;
        radius: number;
        c1: string;
        c2: string;

        constructor() {
            super();
            this.setPosition();
            this.setStyle();
        }

        //set Position & Style
        setPosition(): void {
            this.x = 370 + Math.random() * 60;
            this.y = Math.random() * 500;
            this.speed = Math.random() * 3 + 1;
        }

        setStyle(): void {
            this.radius = Math.random() * 10;
            this.c1 = "skyblue";
            this.c2 = "whitesmoke";
        }

        //declare methods
        move(): void {
            this.x += 0;
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