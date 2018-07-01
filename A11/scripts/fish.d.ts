declare namespace A11_canvas {
    class Fish extends MovingObjects {
        color1: string;
        color2: string;
        color3: string;
        color4: string;
        color5: string;
        constructor();
        setPosition(): void;
        setSpeed(): void;
        setBorders(): void;
        setColors(): void;
        move(): void;
        draw(): void;
    }
}
