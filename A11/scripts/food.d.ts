declare namespace A11_canvas {
    class Food extends MovingObjects {
        radius: number;
        color: string;
        constructor(xPosition: number, yPosition: number);
        setPositions(xPosition: number, yPosition: number): void;
        setBorders(): void;
        setStyle(): void;
        setColor(): void;
        move(): void;
        draw(): void;
    }
}
