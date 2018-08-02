declare namespace monkeyBusiness {
    class FallingObjects extends MovingObjects {
        constructor(_src: string, _typ: string);
        setParameter(): void;
        update(): void;
        catching(): void;
        move(): void;
        newX(): void;
    }
}
