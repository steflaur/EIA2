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

    export class Blubber extends BubblingObjects {

        constructor(xPosition: number, yPosition: number) {
            super();
            this.setPositions(xPosition, yPosition);
            this.xSpeed = (0 - 0.2) + Math.random() * 0.2;
        }

        //set Position
        setPositions(xPosition: number, yPosition: number): void {
            this.x = xPosition;
            this.y = yPosition;
        }
        
        //declare methods
        move(): void {
            this.x += this.xSpeed;
            this.y -= this.ySpeed;
        }//move close

    }//close class
}//close namespace