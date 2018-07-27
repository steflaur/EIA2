var anger;
(function (anger) {
    class FallingObjects {
        constructor() {
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * anger.crc2.canvas.width;
            this.y = 0;
            this.ySpeed = 1;
        }
        // declare method without keyword function
        fall() {
            this.y += this.ySpeed;
            if (this.y > (anger.crc2.canvas.height + 100)) {
                this.y = 0;
            }
        }
        draw() {
        }
    }
    anger.FallingObjects = FallingObjects;
})(anger || (anger = {}));
//# sourceMappingURL=Superklasse.js.map