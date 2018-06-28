/*
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 25Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A11_canvas;
(function (A11_canvas) {
    class Bubble {
        //declare methods
        move() {
            this.y -= this.speed;
            if (this.y < 0) {
                this.y = A11_canvas.crc2.canvas.height - 80;
            } //if close
        } //move close
        draw() {
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            A11_canvas.crc2.strokeStyle = this.c2;
            A11_canvas.crc2.stroke();
            A11_canvas.crc2.fillStyle = this.c1;
            A11_canvas.crc2.fill();
            A11_canvas.crc2.closePath();
        } //close draw
    }
    A11_canvas.Bubble = Bubble; //close class
})(A11_canvas || (A11_canvas = {})); //close namespace
//# sourceMappingURL=bubble.js.map