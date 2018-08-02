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
    class CounterObjects {
        constructor(_x, _y, _src, _counter) {
            this.x = _x;
            this.y = _y;
            this.img = new Image();
            this.img.src = _src;
            this.counter = _counter.toString();
        }
        update(_counter) {
            this.newCounter(_counter);
            this.draw();
        }
        draw() {
            monkeyBusiness.crc2.beginPath();
            monkeyBusiness.crc2.font = "20px Cinzel Decorative";
            monkeyBusiness.crc2.fillStyle = "black";
            monkeyBusiness.crc2.fillText(this.counter, this.x, this.y);
            monkeyBusiness.crc2.drawImage(this.img, this.x + 18, this.y - 20);
            monkeyBusiness.crc2.closePath();
        }
        newCounter(_counter) {
            this.counter = _counter.toString();
        }
    }
    monkeyBusiness.CounterObjects = CounterObjects;
})(monkeyBusiness || (monkeyBusiness = {}));
//# sourceMappingURL=counterO.js.map