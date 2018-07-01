declare namespace A11_canvas {
    function drawStaticBackground(_canvas: HTMLCanvasElement): void;
    function drawWater(_color1: string, _color2: string, _x: number, _y: number, _r1: number, _r2: number): void;
    function drawBottom(_color1: string, _color2: string, _nK: number, _x: number, _y: number): void;
    function drawStones(_colorF: string, _colorS: string, _x: number, _y: number, _r: number): void;
    function drawPlant(_color1: string, _color2: string, _color3: string, _x: number, _y: number): void;
    function drawBubbler(_color1: string, _color2: string, _x: number, _y: number): void;
}
