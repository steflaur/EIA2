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
            /*
               this.x += ;
               this.y += ;
               */
        } //move
        draw() {
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            A10_canvas.ctx.strokeStyle = this.c2;
            A10_canvas.ctx.stroke();
            A10_canvas.ctx.fillStyle = this.c1;
            A10_canvas.ctx.fill();
            A10_canvas.ctx.closePath();
        } //draw
    }
    A10_canvas.Bubble = Bubble; //class
})(A10_canvas || (A10_canvas = {})); //namespace
//# sourceMappingURL=bubble.js.map