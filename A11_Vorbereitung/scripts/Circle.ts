namespace A11_Vorbereitung {
    export class Circle extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }

        move(): void {
            this.x += 1;
            this.y += 0.5;
            if (this.x > (crc2.canvas.width + 20)) {
                this.x = (0 - 20);
                this.y = Math.random() * crc2.canvas.height;
            }
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x - 30, this.y - 30, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

    }// class zu
}// namespace zu