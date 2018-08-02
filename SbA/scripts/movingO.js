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
    class MovingObjects {
        constructor(_src, _typ) {
            this.img = new Image();
            this.img.src = _src;
            this.typ = _typ;
        }
        update() {
            this.draw();
            this.move();
        }
        move() { }
        draw() {
            monkeyBusiness.crc2.beginPath();
            monkeyBusiness.crc2.drawImage(this.img, this.x, this.y);
            monkeyBusiness.crc2.closePath();
        }
    }
    monkeyBusiness.MovingObjects = MovingObjects;
})(monkeyBusiness || (monkeyBusiness = {}));
//# sourceMappingURL=movingO.js.map