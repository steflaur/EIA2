declare namespace A11_canvas {
    class Food extends MovingObjects {
        radius: number;
        color: string;
        stop: number;
        constructor(xPosition: number, yPosition: number);
        setPosition(xPosition: number, yPosition: number): void;
        setStyle(): void;
        setColor(): void;
        move(): void;
        draw(): void;
    }
}
