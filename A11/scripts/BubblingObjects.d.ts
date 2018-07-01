declare namespace A11_canvas {
    class BubblingObjects extends MovingObjects {
        radius: number;
        color1: string;
        color2: string;
        constructor();
        setSpeed(): void;
        setStyle(): void;
        move(): void;
        draw(): void;
    }
}
