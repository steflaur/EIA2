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
    class FallingObjects extends monkeyBusiness.MovingObjects {
        constructor(_src, _typ) {
            super(_src, _typ);
            this.setParameter();
        }
        setParameter() {
            this.x = Math.random() * ((monkeyBusiness.crc2.canvas.width - 64) - 64) + 64;
            this.y = -50;
            this.borderS = (Math.random() * (-25)) - 50; //top
            this.borderE = monkeyBusiness.crc2.canvas.height - 40; //bottom;
            this.speed = (Math.random() * 3) + 2;
        }
        update() {
            this.draw();
            this.move();
        }
        catching() {
            this.y = this.borderS;
        }
        //Math.random() * (max - min) + min;
        move() {
            this.y += this.speed;
            if (this.y > this.borderE) {
                this.y = this.borderS;
                this.newX();
            }
        }
        newX() {
            this.x = Math.random() * ((monkeyBusiness.crc2.canvas.width - 64) - 64) + 64;
        }
    }
    monkeyBusiness.FallingObjects = FallingObjects;
})(monkeyBusiness || (monkeyBusiness = {}));
//# sourceMappingURL=fallingO.js.map