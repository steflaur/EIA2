declare namespace A11_Vorbereitung {
    class DavidStar {
        x: number;
        y: number;
        color: string;
        constructor(_color: string);
        setRandomPosition(): void;
        move(): void;
        draw(): void;
    }
}
