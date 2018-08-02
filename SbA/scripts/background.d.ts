declare namespace monkeyBusiness {
    class Background {
        x: number;
        y: number;
        img: HTMLImageElement;
        constructor(_src: string, _x: number, _y: number);
        draw(): void;
    }
}
