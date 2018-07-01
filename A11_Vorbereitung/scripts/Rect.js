var A11_Vorbereitung;
(function (A11_Vorbereitung) {
    class Rect extends A11_Vorbereitung.DavidStar {
        constructor(_color) {
            super(_color);
        }
        move() {
            this.x += 1;
            this.y -= 1;
            if (this.y < (0 - 20)) {
                this.x = Math.random() * A11_Vorbereitung.crc2.canvas.width;
                this.y = A11_Vorbereitung.crc2.canvas.height + 20;
            }
        }
        draw() {
            A11_Vorbereitung.crc2.fillStyle = this.color;
            A11_Vorbereitung.crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }
    }
    A11_Vorbereitung.Rect = Rect; // class zu
})(A11_Vorbereitung || (A11_Vorbereitung = {})); // namespace zu
//# sourceMappingURL=Rect.js.map