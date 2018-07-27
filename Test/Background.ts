namespace anger {
    export function drawStatics(): void {
        crc2.fillStyle = "grey";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log("filled");
    }
}