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

    export class Food extends MovingObjects {

        radius: number;
        color: string;
        stop: number;


        constructor(newPositionX: number, newPositionY: number) {
            super();
            this.setPosition(newPositionX, newPositionY);
            this.setStyle();

        }

        //set Position & Style
        setPosition(newPositionX: number, newPositionY: number): void {

            this.x = newPositionX;
            this.y = newPositionY;
            this.stop = Math.random() * (690 - 640) + 640;
        }

        setStyle(): void {
            this.setColor();
            this.radius = 4;
        }

        setColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "orange";
                    break;
                case 1:
                    this.color = "green";
                    break;
                case 2:
                    this.color = "red";
            }
        }

        //move
        move(): void {
            this.x += 0;
            this.y += 1;

            if (this.y > this.stop) {
                this.y = this.stop;
            }
        }

        //draw
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
        }


    }

}//close namespace
