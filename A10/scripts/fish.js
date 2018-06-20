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
    class Fish {
        //declare methods
        move() {
            /*
               this.x += ;
               thi += ;
               */
        }
        draw() {
            //Fisch
            //Flosse gross hinten
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.moveTo(this.x, this.y);
            A10_canvas.ctx.quadraticCurveTo(this.x + 25, this.y + 20, this.x + 60, this.y - 10);
            A10_canvas.ctx.quadraticCurveTo(this.x + 35, this.y + 25, this.x + 60, this.y + 60);
            A10_canvas.ctx.quadraticCurveTo(this.x + 25, this.y + 30, this.x, this.y + 50);
            A10_canvas.ctx.fillStyle = this.c2;
            A10_canvas.ctx.fill();
            A10_canvas.ctx.closePath();
            //Streifen
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.moveTo(this.x + 70, this.y - 15);
            A10_canvas.ctx.quadraticCurveTo(this.x + 40, this.y + 15, this.x + 20, this.y + 12);
            A10_canvas.ctx.strokeStyle = this.c4;
            A10_canvas.ctx.stroke();
            A10_canvas.ctx.closePath();
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.moveTo(this.x + 70, this.y + 65);
            A10_canvas.ctx.quadraticCurveTo(this.x + 40, this.y + 35, this.x + 20, this.y + 38);
            A10_canvas.ctx.stroke();
            A10_canvas.ctx.closePath();
            //Körper
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.moveTo(this.x + 20, this.y - 20);
            A10_canvas.ctx.quadraticCurveTo(this.x - 32, this.y - 10, this.x - 42, this.y + 27);
            //Mund
            A10_canvas.ctx.quadraticCurveTo(this.x - 38, this.y + 30, this.x - 30, this.y + 29);
            A10_canvas.ctx.quadraticCurveTo(this.x - 32, this.y + 35, this.x - 42, this.y + 33);
            A10_canvas.ctx.quadraticCurveTo(this.x - 40, this.y + 55, this.x + 20, this.y + 70);
            A10_canvas.ctx.quadraticCurveTo(this.x - 5, this.y + 20, this.x + 20, this.y - 20);
            A10_canvas.ctx.fillStyle = this.c1;
            A10_canvas.ctx.fill();
            A10_canvas.ctx.closePath();
            //Streifen klein
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.moveTo(this.x - 10, this.y + 60);
            A10_canvas.ctx.quadraticCurveTo(this.x - 35, this.y + 20, this.x - 10, this.y - 10);
            A10_canvas.ctx.quadraticCurveTo(this.x - 25, this.y + 20, this.x - 10, this.y + 60);
            A10_canvas.ctx.fillStyle = this.c3;
            A10_canvas.ctx.fill();
            A10_canvas.ctx.closePath();
            //Streifen gross
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.moveTo(this.x + 5, this.y + 66);
            A10_canvas.ctx.quadraticCurveTo(this.x - 20, this.y + 20, this.x + 5, this.y - 16);
            A10_canvas.ctx.quadraticCurveTo(this.x - 10, this.y + 20, this.x + 5, this.y + 66);
            A10_canvas.ctx.fill();
            A10_canvas.ctx.closePath();
            //Augen
            //aussen
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.arc(this.x - 15, this.y + 10, 5, 0, 2 * Math.PI);
            A10_canvas.ctx.strokeStyle = "black";
            A10_canvas.ctx.stroke();
            A10_canvas.ctx.fillStyle = this.c5;
            A10_canvas.ctx.fill();
            A10_canvas.ctx.closePath();
            //innen
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.arc(this.x - 15, this.y + 10, 2.5, 0, 2 * Math.PI);
            A10_canvas.ctx.fillStyle = "black";
            A10_canvas.ctx.fill();
            A10_canvas.ctx.closePath();
            //Wimper
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.moveTo(this.x - 18, this.y + 5);
            A10_canvas.ctx.quadraticCurveTo(this.x - 15, this.y - 22, this.x + 30, this.y - 30);
            A10_canvas.ctx.quadraticCurveTo(this.x - 7, this.y - 20, this.x - 18, this.y + 5);
            A10_canvas.ctx.fillStyle = this.c2;
            A10_canvas.ctx.fill();
            A10_canvas.ctx.closePath();
            //vordere Flosse
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.moveTo(this.x - 17, this.y + 45);
            A10_canvas.ctx.quadraticCurveTo(this.x - 20, this.y + 60, this.x, this.y + 75);
            A10_canvas.ctx.closePath();
            A10_canvas.ctx.fillStyle = this.c4;
            A10_canvas.ctx.fill();
            //hintere Flosse
            A10_canvas.ctx.beginPath();
            A10_canvas.ctx.moveTo(this.x - 8, this.y + 50);
            A10_canvas.ctx.quadraticCurveTo(this.x - 12, this.y + 63, this.x + 23, this.y + 84);
            A10_canvas.ctx.closePath();
            A10_canvas.ctx.fill();
        } //draw
    }
    A10_canvas.Fish = Fish; //class
})(A10_canvas || (A10_canvas = {})); //namespace
//# sourceMappingURL=fish.js.map