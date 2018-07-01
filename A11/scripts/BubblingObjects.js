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
    class BubblingObjects extends A11_canvas.MovingObjects {
        constructor() {
            super();
            this.setSpeed();
            this.setStyle();
        }
        setSpeed() {
            this.ySpeed = 0.5 + Math.random() * 0.5;
            this.xSpeed = 0;
        }
        setStyle() {
            this.radius = 0.5 + Math.random() * 8;
            this.color1 = "skyblue";
            this.color2 = "whitesmoke";
        } //close Position, Borders & Style
        //move
        move() {
        } //close move
        //draw
        draw() {
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            A11_canvas.crc2.strokeStyle = this.color2;
            A11_canvas.crc2.stroke();
            A11_canvas.crc2.fillStyle = this.color1;
            A11_canvas.crc2.fill();
            A11_canvas.crc2.closePath();
        } //close draw
    }
    A11_canvas.BubblingObjects = BubblingObjects; //close class
})(A11_canvas || (A11_canvas = {})); //close namespace
//# sourceMappingURL=BubblingObjects.js.map