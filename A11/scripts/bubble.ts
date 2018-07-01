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

    export class Bubble extends BubblingObjects {

        constructor() {
            super();
            this.setPosition();
            this.setBorders();
        }

        //set Position
        setPosition(): void {
            this.x = 370 + Math.random() * 60;
            this.y = Math.random() * 500;
        }

        setBorders(): void {
            //entlang y-Achse
            this.Start = crc2.canvas.height - 80;
            this.End = 0;
        }

        //declare methods
        move(): void {
            this.x += this.xSpeed;
            this.y -= this.ySpeed;

            if (this.y < this.End) {
                this.y = this.Start;
            }//if close
        }//move close
        
        

    }//close class
}//close namespace