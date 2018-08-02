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
    class Background {
        constructor(_src, _x, _y) {
            this.img = new Image();
            this.img.src = _src;
            this.x = _x;
            this.y = _y;
        }
        draw() {
            monkeyBusiness.crc2.beginPath();
            //Himmel
            var gradient = monkeyBusiness.crc2.createLinearGradient(this.x, this.y, this.x, monkeyBusiness.crc2.canvas.height);
            gradient.addColorStop(0, "azure");
            gradient.addColorStop(0.3, "lightcyan");
            gradient.addColorStop(0.6, "powderblue");
            gradient.addColorStop(0.8, "lightblue");
            gradient.addColorStop(0.9, "lightskyblue");
            gradient.addColorStop(1, "skyblue");
            monkeyBusiness.crc2.fillStyle = gradient;
            monkeyBusiness.crc2.fillRect(this.x, this.y, monkeyBusiness.crc2.canvas.width, monkeyBusiness.crc2.canvas.height);
            //Palmen png
            monkeyBusiness.crc2.drawImage(this.img, this.x, this.y);
            monkeyBusiness.crc2.closePath();
        }
    }
    monkeyBusiness.Background = Background;
})(monkeyBusiness || (monkeyBusiness = {}));
//# sourceMappingURL=background.js.map