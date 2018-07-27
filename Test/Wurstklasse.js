var anger;
(function (anger) {
    class Wurst extends anger.FallingObjects {
        constructor() {
            super();
        }
        draw() {
            anger.crc2.fillStyle = "red";
            anger.crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }
    }
    anger.Wurst = Wurst;
})(anger || (anger = {}));
//# sourceMappingURL=Wurstklasse.js.map