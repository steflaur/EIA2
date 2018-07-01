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
        constructor(xPosition, yPosition) {
            super();
            this.setPosition(xPosition, yPosition);
            this.setStyle();
        }
        //set Position & Style
        setPosition(xPosition, yPosition) {
            this.x = xPosition;
            this.y = yPosition;
            this.speed = 1;
            //this.drift = (0-0.2) + Math.random() * 0.2;
            this.stop = 580 + Math.random() * 15;
        }
        setStyle() {
            this.setColor();
            this.radius = 2 + Math.random() * 4;
        }
        setColor() {
            let colorSet = Math.floor(Math.random() * 6);
            switch (colorSet) {
                case 0:
                    this.color = "Bisque";
                    break;
                case 1:
                    this.color = "DarkOliveGreen";
                    break;
                case 2:
                    this.color = "Chocolate";
                    break;
                case 3:
                    this.color = "DarkKhaki";
                    break;
                case 4:
                    this.color = "IndianRed";
                    break;
                case 5:
                    this.color = "DarkGoldenRod";
                    break;
            } //switch
        }
        //move
        move() {
            this.x += 0.2;
            this.y += this.speed;
            if (this.y > this.stop) {
                this.y = this.stop;
                this.x -= 0.2;
            }
        } //move close
        //draw
        draw() {
            A11_canvas.crc2.fillStyle = this.color;
            A11_canvas.crc2.beginPath();
            A11_canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            A11_canvas.crc2.closePath();
            A11_canvas.crc2.fill();
        } //draw close
    }
    A11_canvas.Food = Food; //close class
})(A11_canvas || (A11_canvas = {})); //close namespace
//# sourceMappingURL=food.js.map