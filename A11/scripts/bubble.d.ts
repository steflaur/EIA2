declare namespace A11_canvas {
    class Bubble extends MovingObjects {
        radius: number;
        color1: string;
        color2: string;
        constructor();
        setPosition(): void;
        setSpeed(): void;
        setBorders(): void;
        setStyle(): void;
        move(): void;
        draw(): void;
    }
}
