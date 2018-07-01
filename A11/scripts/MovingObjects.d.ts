declare namespace A11_canvas {
    class MovingObjects {
        x: number;
        y: number;
        xSpeed: number;
        ySpeed: number;
        Start: number;
        End: number;
        constructor();
        move(): void;
        draw(): void;
    }
}
