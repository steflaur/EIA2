namespace anger {
    export class Obst extends FallingObjects {

        public constructor() {
            super();
        }

        public draw(): void {
            crc2.fillStyle = "blue";
            crc2.beginPath();
            crc2.arc(this.x - 30, this.y - 30, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
}