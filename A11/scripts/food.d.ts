declare namespace A11_canvas {
    class Food extends MovingObjects {
        radius: number;
        color: string;
        stop: number;
        constructor(newPositionX: number, newPositionY: number);
        setPosition(newPositionX: number, newPositionY: number): void;
        setStyle(): void;
        setColor(): void;
        move(): void;
        draw(): void;
    }
}
