declare namespace A11_canvas {
    class Fish extends MovingObjects {
        speed: number;
        c1: string;
        c2: string;
        c3: string;
        c4: string;
        c5: string;
        constructor();
        setPosition(): void;
        setStyle(): void;
        move(): void;
        draw(): void;
    }
}
