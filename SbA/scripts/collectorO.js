/*
Abschlussaufgabe Monkey Business
Name: Laura Vogt
Matrikel: 256056
Datum: 09Jul2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert.
*/
var monkeyBusiness;
(function (monkeyBusiness) {
    class CollectorObject extends monkeyBusiness.MovingObjects {
        constructor(_src, _typ) {
            super(_src, _typ);
            this.setParameter();
        }
        setParameter() {
            this.x = (monkeyBusiness.crc2.canvas.width * 0.5) - 64;
            this.y = 450;
            this.borderS = 0; //left
            this.borderE = monkeyBusiness.crc2.canvas.width - 128; //right
            this.speed = 15;
        }
        move() {
        }
        moveRight() {
            this.x += this.speed;
            if (this.x >= this.borderE) {
                this.x = this.borderE;
            }
            this.draw();
        }
        moveLeft() {
            this.x -= this.speed;
            if (this.x <= this.borderS) {
                this.x = this.borderS;
            }
            this.draw();
        }
    }
    monkeyBusiness.CollectorObject = CollectorObject;
})(monkeyBusiness || (monkeyBusiness = {}));
//# sourceMappingURL=collectorO.js.map