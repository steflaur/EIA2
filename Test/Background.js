var anger;
(function (anger) {
    function drawStatics() {
        anger.crc2.fillStyle = "grey";
        anger.crc2.fillRect(0, 0, anger.crc2.canvas.width, anger.crc2.canvas.height);
        console.log("filled");
    }
    anger.drawStatics = drawStatics;
})(anger || (anger = {}));
//# sourceMappingURL=Background.js.map