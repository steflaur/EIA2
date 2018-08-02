declare namespace monkeyBusiness {
    class CollectorObject extends MovingObjects {
        constructor(_src: string, _typ: string);
        setParameter(): void;
        move(): void;
        moveRight(): void;
        moveLeft(): void;
    }
}
