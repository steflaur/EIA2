declare namespace monkeyBusiness {
    class MovingObjects {
        x: number;
        y: number;
        borderS: number;
        borderE: number;
        speed: number;
        img: HTMLImageElement;
        typ: string;
        constructor(_src: string, _typ: string);
        update(): void;
        move(): void;
        draw(): void;
    }
}
