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

        constructor(xPosition: number, yPosition: number) {
            super();
            this.setPositions(xPosition, yPosition);
            this.setBorders;
            this.setStyle();
        }

        //set Position, Borders & Style
        setPositions(xPosition: number, yPosition: number): void {
            this.x = xPosition;
            this.y = yPosition;
            this.ySpeed = 0.4 + Math.random() * 0.3;
            this.xSpeed = (0 - 0.2) + Math.random() * 0.1;
        }

        setBorders(): void {
            //beschreibt abschnitt, in dem es nurnoch ySpeed gibt
            this.Start = 270 + Math.random() * 50;
            this.End = 580 + Math.random() * 15;
        }

        setStyle(): void {
            this.setColor();
            this.radius = 2 + Math.random() * 4;
        }

        setColor(): void {
            let max: number = 6;
            let randomColor: number = Math.floor(Math.random() * max);
            switch (randomColor) {
                case 0:
                    this.color = "Bisque";
                    break;
                case 1:
                    this.color = "DarkOliveGreen";
                    break;
                case 2:
                    this.color = "Chocolate";
                    break;
                case 3:
                    this.color = "DarkKhaki";
                    break;
                case 4:
                    this.color = "IndianRed";
                    break;
                case 5:
                    this.color = "DarkGoldenRod";
                    break;
            }//switch
        }//close Position, Borders & Style

        //move
        move(): void {
            this.x += this.xSpeed;
            this.y += this.ySpeed;

            //Futter soll nichtmehr weiter driften
            if (this.y > this.Start) {
                this.x -= this.xSpeed;
            }

            //Futter soll liegen bleiben
            if (this.y > this.End) {
                this.y = this.End;
            }
        }//move close

        //draw
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();
        }//draw close

    }//close class
}//close namespace
