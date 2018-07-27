namespace anger {
    export class FallingObjects {
        protected x: number;
        protected y: number;
        protected ySpeed: number;

        public constructor() {
            this.setRandomPosition();
        }

        private setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = 0;
            this.ySpeed = 1;
        }

        // declare method without keyword function
        public fall(): void {
            this.y += this.ySpeed;
            if (this.y > (crc2.canvas.height+100)){
                this.y = 0;
                }
        }
        
        
        public draw(): void {
           
        }
    }
}