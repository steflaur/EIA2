declare namespace monkeyBusiness {
    class CounterObjects {
        x: number;
        y: number;
        img: HTMLImageElement;
        counter: string;
        constructor(_x: number, _y: number, _src: string, _counter: number);
        update(_counter: number): void;
        draw(): void;
        newCounter(_counter: number): void;
    }
}
