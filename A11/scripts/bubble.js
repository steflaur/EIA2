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
    class Bubble extends A11_canvas.BubblingObjects {
        constructor() {
            super();
            this.setPosition();
            this.setBorders();
        }
        //set Position
        setPosition() {
            this.x = 370 + Math.random() * 60;
            this.y = Math.random() * 500;
        }
        setBorders() {
            //entlang y-Achse
            this.Start = A11_canvas.crc2.canvas.height - 80;
            this.End = 0;
        }
        //declare methods
        move() {
            this.x += this.xSpeed;
            this.y -= this.ySpeed;
            if (this.y < this.End) {
                this.y = this.Start;
            } //if close
        } //move close
    }
    A11_canvas.Bubble = Bubble; //close class
})(A11_canvas || (A11_canvas = {})); //close namespace
//# sourceMappingURL=bubble.js.map