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
    class Food extends A11_canvas.MovingObjects {
        constructor(newPositionX, newPositionY) {
            super();
            this.setPosition(newPositionX, newPositionY);
            this.setStyle();
        }
        //set Position & Style
        setPosition(newPositionX, newPositionY) {
            this.x = newPositionX;
            this.y = newPositionY;
            this.stop = Math.random() * (690 - 640) + 640;
        }
        setStyle() {
            this.setColor();
            this.radius = 4;
        }
        setColor() {
            let c = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "orange";
                    break;
                case 1:
                    this.color = "green";
                    break;
                case 2:
                    this.color = "red";
            }
        }
        //move
        move() {
            this.x += 0;
            this.y += 1;
            if (this.y > this.stop) {
                this.y = this.stop;
            }
        }
        //draw
        draw() {
            A11_canvas.crc2.fillStyle = this.color;
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            A11_canvas.crc2.closePath();
            A11_canvas.crc2.fill();
            A11_canvas.crc2.strokeStyle = "transparent";
            A11_canvas.crc2.stroke();
        }
    }
    A11_canvas.Food = Food;
})(A11_canvas || (A11_canvas = {})); //close namespace
//# sourceMappingURL=food.js.map