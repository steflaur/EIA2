declare namespace anger {
    class FallingObjects {
        protected x: number;
        protected y: number;
        protected ySpeed: number;
        constructor();
        private setRandomPosition();
        fall(): void;
        draw(): void;
    }
}
