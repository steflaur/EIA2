var A11_Vorbereitung;
(function (A11_Vorbereitung) {
    class DavidStar {
        constructor(_color) {
            this.setRandomPosition();
            this.color = _color;
        }
        setRandomPosition() {
            this.x = Math.random() * A11_Vorbereitung.crc2.canvas.width;
            this.y = Math.random() * A11_Vorbereitung.crc2.canvas.height;
        }
        // declare method without keyword function
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
            if (this.y > (A11_Vorbereitung.crc2.canvas.height + 20) || this.x > (A11_Vorbereitung.crc2.canvas.width + 20) || this.x < (0 - 20) || this.y < (0 - 20)) {
                this.x = Math.random() * A11_Vorbereitung.crc2.canvas.width;
                this.y = Math.random() * A11_Vorbereitung.crc2.canvas.height;
            }
        }
        draw() {
            A11_Vorbereitung.crc2.beginPath();
            A11_Vorbereitung.crc2.moveTo(this.x, this.y - 20);
            A11_Vorbereitung.crc2.lineTo(this.x + 20, this.y + 10);
            A11_Vorbereitung.crc2.lineTo(this.x - 20, this.y + 10);
            A11_Vorbereitung.crc2.closePath();
            A11_Vorbereitung.crc2.moveTo(this.x, this.y + 20);
            A11_Vorbereitung.crc2.lineTo(this.x + 20, this.y - 10);
            A11_Vorbereitung.crc2.lineTo(this.x - 20, this.y - 10);
            A11_Vorbereitung.crc2.closePath();
            A11_Vorbereitung.crc2.fillStyle = this.color;
            A11_Vorbereitung.crc2.strokeStyle = this.color;
            A11_Vorbereitung.crc2.stroke();
            A11_Vorbereitung.crc2.fill();
        }
    }
    A11_Vorbereitung.DavidStar = DavidStar; // class zu
})(A11_Vorbereitung || (A11_Vorbereitung = {})); // namespace zu
//# sourceMappingURL=DavidStar.js.map