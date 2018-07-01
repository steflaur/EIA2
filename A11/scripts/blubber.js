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
    class Blubber extends A11_canvas.BubblingObjects {
        constructor(xPosition, yPosition) {
            super();
            this.setPositions(xPosition, yPosition);
            this.xSpeed = (0 - 0.2) + Math.random() * 0.2;
        }
        //set Position
        setPositions(xPosition, yPosition) {
            this.x = xPosition;
            this.y = yPosition;
        }
        //declare methods
        move() {
            this.x += this.xSpeed;
            this.y -= this.ySpeed;
        } //move close
    }
    A11_canvas.Blubber = Blubber; //close class
})(A11_canvas || (A11_canvas = {})); //close namespace
//# sourceMappingURL=blubber.js.map