var A11_Vorbereitung;
(function (A11_Vorbereitung) {
    class Triangle extends A11_Vorbereitung.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.y -= 2;
            if (this.y < (0 - 20)) {
                this.y = A11_Vorbereitung.crc2.canvas.height + 20;
                this.x = Math.random() * A11_Vorbereitung.crc2.canvas.width;
            }
        }
        draw() {
            A11_Vorbereitung.crc2.fillStyle = this.color;
            A11_Vorbereitung.crc2.beginPath();
            A11_Vorbereitung.crc2.moveTo(this.x, this.y - 30);
            A11_Vorbereitung.crc2.lineTo(this.x + 20, this.y + 20);
            A11_Vorbereitung.crc2.lineTo(this.x - 20, this.y + 20);
            A11_Vorbereitung.crc2.closePath();
            A11_Vorbereitung.crc2.fill();
        }
    }
    A11_Vorbereitung.Triangle = Triangle; // class zu
})(A11_Vorbereitung || (A11_Vorbereitung = {})); // namespace zu
//# sourceMappingURL=Triangle.js.map