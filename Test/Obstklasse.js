var anger;
(function (anger) {
    class Obst extends anger.FallingObjects {
        constructor() {
            super();
        }
        draw() {
            anger.crc2.fillStyle = "blue";
            anger.crc2.beginPath();
            anger.crc2.arc(this.x - 30, this.y - 30, 20, 0, 2 * Math.PI);
            anger.crc2.closePath();
            anger.crc2.fill();
        }
    }
    anger.Obst = Obst;
})(anger || (anger = {}));
//# sourceMappingURL=Obstklasse.js.map