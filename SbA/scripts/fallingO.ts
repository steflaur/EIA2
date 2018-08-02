/* 
Abschlussaufgabe Monkey Business
Name: Laura Vogt
Matrikel: 256056
Datum: 09Jul2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert. 
*/

namespace monkeyBusiness {

    export class FallingObjects extends MovingObjects {

        constructor(_src: string, _typ: string) {
            super(_src, _typ);
            this.setParameter();
        }

        setParameter(): void {
            this.x = Math.random() * ((crc2.canvas.width - 64) - 64) + 64;
            this.y = -50;
            this.borderS = (Math.random() * (-25)) - 50;//top
            this.borderE = crc2.canvas.height - 40;//bottom;
            this.speed = (Math.random() * 3) + 2;
        }

        update(): void {
            this.draw();
            this.move();
        }

        catching(): void {
            this.y = this.borderS;
        }
        
        //Math.random() * (max - min) + min;
        move(): void {
            this.y += this.speed;
            if (this.y > this.borderE) {
                this.y = this.borderS;
                this.newX();
            }
        }

        newX(): void {
            this.x = Math.random() * ((crc2.canvas.width - 64) - 64) + 64;
        }

    }
}
