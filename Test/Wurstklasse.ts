namespace anger {
    export class Wurst extends FallingObjects {

        public constructor() {
            super();
        }

        public draw(): void {
            crc2.fillStyle = "red";
            crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }
    }
}