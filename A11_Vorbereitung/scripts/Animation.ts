namespace A11_Vorbereitung {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 15;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("lightgreen");
            stars.push(star);

            let rect: Rect = new Rect("lightblue");
            stars.push(rect);
        }


        animate();
    }

    function insertNewObject(_event: MouseEvent): void {
        let randomObject: number = Math.floor(Math.random() * 4);
        let newX: number = _event.clientX;
        let newY: number = _event.clientY;

        switch (randomObject) {
            case 0:
                let star: DavidStar = new DavidStar("green");
                star.x = newX;
                star.y = newY;
                stars.push(star);
                break;

            case 1:
                let rect: Rect = new Rect("salmon");
                rect.x = newX;
                rect.y = newY;
                stars.push(rect);
                break;

            case 2:
                let circle: Circle = new Circle("sandybrown");
                circle.x = newX;
                circle.y = newY;
                stars.push(circle);
                break;

            case 3:
                let triangle: Triangle = new Triangle("paleturquoise");
                triangle.x = newX;
                triangle.y = newY;
                stars.push(triangle);
                break;
        }
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

        function moveObjects(): void {
            for (let i: number = 0; i < stars.length; i++) {
                stars[i].move();
            }
        }
    
        function drawObjects(): void {
            for (let i: number = 0; i < stars.length; i++) {
                stars[i].draw();
            }
        }
}// namespace zu