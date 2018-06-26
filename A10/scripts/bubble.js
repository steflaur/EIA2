/*
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 24Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A10_canvas;
(function (A10_canvas) {
    class Bubble {
        //declare methods
        move() {
            this.y += -2;
            if (this.y < 0) {
                this.y = A10_canvas.crc2.canvas.height + this.r;
            } //if close
        } //move close
        draw() {
            A10_canvas.crc2.beginPath();
            A10_canvas.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            A10_canvas.crc2.strokeStyle = this.c2;
            A10_canvas.crc2.stroke();
            A10_canvas.crc2.fillStyle = this.c1;
            A10_canvas.crc2.fill();
            A10_canvas.crc2.closePath();
        } //close draw
    }
    A10_canvas.Bubble = Bubble; //close class
})(A10_canvas || (A10_canvas = {})); //close namespace
//# sourceMappingURL=bubble.js.map