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
    
    export class CollectorObject extends MovingObjects {

        constructor(_src: string, _typ: string) {
            super(_src, _typ);
            this.setParameter();
        }

        setParameter(): void {
            this.x = (crc2.canvas.width * 0.5) - 64;
            this.y = 450;
            this.borderS = 0;//left
            this.borderE = crc2.canvas.width - 128;//right
            this.speed = 15;
        }

        move(): void {
        }

        moveRight(): void {

            this.x += this.speed
            if (this.x >= this.borderE) {
                this.x = this.borderE;
            }
            this.draw();
        }

        moveLeft(): void {

            this.x -= this.speed
            if (this.x <= this.borderS) {
                this.x = this.borderS;
            }
            this.draw();
        }

    }
}