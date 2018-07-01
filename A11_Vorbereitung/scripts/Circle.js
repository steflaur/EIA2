var A11_Vorbereitung;
(function (A11_Vorbereitung) {
    class Circle extends A11_Vorbereitung.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.x += 1;
            this.y += 0.5;
            if (this.x > (A11_Vorbereitung.crc2.canvas.width + 20)) {
                this.x = (0 - 20);
                this.y = Math.random() * A11_Vorbereitung.crc2.canvas.height;
            }
        }
        draw() {
            A11_Vorbereitung.crc2.fillStyle = this.color;
            A11_Vorbereitung.crc2.beginPath();
            A11_Vorbereitung.crc2.arc(this.x - 30, this.y - 30, 20, 0, 2 * Math.PI);
            A11_Vorbereitung.crc2.closePath();
            A11_Vorbereitung.crc2.fill();
        }
    }
    A11_Vorbereitung.Circle = Circle; // class zu
})(A11_Vorbereitung || (A11_Vorbereitung = {})); // namespace zu
//# sourceMappingURL=Circle.js.map