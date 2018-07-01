namespace A11_Vorbereitung {
    export class Triangle extends DavidStar {

        r: number;

        constructor(_color: string) {
            super(_color);
        }

        move(): void {
            this.y -= 2;
            if (this.y < (0 - 20)) {
                this.y = crc2.canvas.height + 20;
                this.x = Math.random() * crc2.canvas.width;
            }
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 30);
            crc2.lineTo(this.x + 20, this.y + 20);
            crc2.lineTo(this.x - 20, this.y + 20);
            crc2.closePath();
            crc2.fill();
        }

    }// class zu
}// namespace zu