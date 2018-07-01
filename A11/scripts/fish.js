/*
Aufgabe 11: Canvas Inheritance
Name: Laura Vogt
Matrikel: 256056
Datum: 1Jul2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A11_canvas;
(function (A11_canvas) {
    class Fish extends A11_canvas.MovingObjects {
        //constructor
        constructor() {
            super();
            this.setPosition();
            this.setStyle();
        }
        //set Position & Style
        setPosition() {
            this.x = Math.random() * A11_canvas.crc2.canvas.width;
            this.y = 50 + Math.random() * 400;
            this.speed = Math.random() * 0.5 + 2;
        }
        setStyle() {
            this.c1 = "blue";
            this.c2 = "darkblue";
            this.c3 = "yellow";
            this.c4 = "gold";
            this.c5 = "whitesmoke";
        }
        //declare methods
        move() {
            this.x -= this.speed;
            if (this.x < 0) {
                this.x = A11_canvas.crc2.canvas.width + (this.x + 70);
            } //close if
        } //close move
        //draw
        draw() {
            //Fisch
            //Flosse gross hinten
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.moveTo(this.x, this.y);
            A11_canvas.crc2.quadraticCurveTo(this.x + 25, this.y + 20, this.x + 60, this.y - 10);
            A11_canvas.crc2.quadraticCurveTo(this.x + 35, this.y + 25, this.x + 60, this.y + 60);
            A11_canvas.crc2.quadraticCurveTo(this.x + 25, this.y + 30, this.x, this.y + 50);
            A11_canvas.crc2.fillStyle = this.c2;
            A11_canvas.crc2.fill();
            A11_canvas.crc2.closePath();
            //Streifen
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.moveTo(this.x + 70, this.y - 15);
            A11_canvas.crc2.quadraticCurveTo(this.x + 40, this.y + 15, this.x + 20, this.y + 12);
            A11_canvas.crc2.strokeStyle = this.c4;
            A11_canvas.crc2.stroke();
            A11_canvas.crc2.closePath();
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.moveTo(this.x + 70, this.y + 65);
            A11_canvas.crc2.quadraticCurveTo(this.x + 40, this.y + 35, this.x + 20, this.y + 38);
            A11_canvas.crc2.stroke();
            A11_canvas.crc2.closePath();
            //Körper
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.moveTo(this.x + 20, this.y - 20);
            A11_canvas.crc2.quadraticCurveTo(this.x - 32, this.y - 10, this.x - 42, this.y + 27);
            //Mund
            A11_canvas.crc2.quadraticCurveTo(this.x - 38, this.y + 30, this.x - 30, this.y + 29);
            A11_canvas.crc2.quadraticCurveTo(this.x - 32, this.y + 35, this.x - 42, this.y + 33);
            A11_canvas.crc2.quadraticCurveTo(this.x - 40, this.y + 55, this.x + 20, this.y + 70);
            A11_canvas.crc2.quadraticCurveTo(this.x - 5, this.y + 20, this.x + 20, this.y - 20);
            A11_canvas.crc2.fillStyle = this.c1;
            A11_canvas.crc2.fill();
            A11_canvas.crc2.closePath();
            //Streifen klein
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.moveTo(this.x - 10, this.y + 60);
            A11_canvas.crc2.quadraticCurveTo(this.x - 35, this.y + 20, this.x - 10, this.y - 10);
            A11_canvas.crc2.quadraticCurveTo(this.x - 25, this.y + 20, this.x - 10, this.y + 60);
            A11_canvas.crc2.fillStyle = this.c3;
            A11_canvas.crc2.fill();
            A11_canvas.crc2.closePath();
            //Streifen gross
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.moveTo(this.x + 5, this.y + 66);
            A11_canvas.crc2.quadraticCurveTo(this.x - 20, this.y + 20, this.x + 5, this.y - 16);
            A11_canvas.crc2.quadraticCurveTo(this.x - 10, this.y + 20, this.x + 5, this.y + 66);
            A11_canvas.crc2.fill();
            A11_canvas.crc2.closePath();
            //Augen
            //aussen
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.arc(this.x - 15, this.y + 10, 5, 0, 2 * Math.PI);
            A11_canvas.crc2.strokeStyle = "black";
            A11_canvas.crc2.stroke();
            A11_canvas.crc2.fillStyle = this.c5;
            A11_canvas.crc2.fill();
            A11_canvas.crc2.closePath();
            //innen
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.arc(this.x - 15, this.y + 10, 2.5, 0, 2 * Math.PI);
            A11_canvas.crc2.fillStyle = "black";
            A11_canvas.crc2.fill();
            A11_canvas.crc2.closePath();
            //Wimper
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.moveTo(this.x - 18, this.y + 5);
            A11_canvas.crc2.quadraticCurveTo(this.x - 15, this.y - 22, this.x + 30, this.y - 30);
            A11_canvas.crc2.quadraticCurveTo(this.x - 7, this.y - 20, this.x - 18, this.y + 5);
            A11_canvas.crc2.fillStyle = this.c2;
            A11_canvas.crc2.fill();
            A11_canvas.crc2.closePath();
            //vordere Flosse
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.moveTo(this.x - 17, this.y + 45);
            A11_canvas.crc2.quadraticCurveTo(this.x - 20, this.y + 60, this.x, this.y + 75);
            A11_canvas.crc2.closePath();
            A11_canvas.crc2.fillStyle = this.c4;
            A11_canvas.crc2.fill();
            //hintere Flosse
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.moveTo(this.x - 8, this.y + 50);
            A11_canvas.crc2.quadraticCurveTo(this.x - 12, this.y + 63, this.x + 23, this.y + 84);
            A11_canvas.crc2.closePath();
            A11_canvas.crc2.fill();
        } //close draw
    }
    A11_canvas.Fish = Fish; //close class
})(A11_canvas || (A11_canvas = {})); //close namespace
//# sourceMappingURL=fish.js.map