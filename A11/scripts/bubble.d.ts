declare namespace A11_canvas {
    class Bubble extends MovingObjects {
        speed: number;
        radius: number;
        c1: string;
        c2: string;
        constructor();
        setPosition(): void;
        setStyle(): void;
        move(): void;
        draw(): void;
    }
}
