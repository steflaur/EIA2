namespace A11_Vorbereitung {
    export class Rect extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }

        move(): void {
            this.x += 1;
            this.y -= 1;
            if (this.y < (0 - 20)) {
                this.x = Math.random() * crc2.canvas.width;
                this.y = crc2.canvas.height + 20;
            }
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }

    }// class zu
}// namespace zu