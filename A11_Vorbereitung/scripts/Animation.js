var A11_Vorbereitung;
(function (A11_Vorbereitung) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 15;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        A11_Vorbereitung.crc2 = canvas.getContext("2d");
        console.log(A11_Vorbereitung.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new A11_Vorbereitung.DavidStar("lightgreen");
            stars.push(star);
            let rect = new A11_Vorbereitung.Rect("lightblue");
            stars.push(rect);
        }
        animate();
    }
    function insertNewObject(_event) {
        let randomObject = Math.floor(Math.random() * 4);
        let newX = _event.clientX;
        let newY = _event.clientY;
        switch (randomObject) {
            case 0:
                let star = new A11_Vorbereitung.DavidStar("green");
                star.x = newX;
                star.y = newY;
                stars.push(star);
                break;
            case 1:
                let rect = new A11_Vorbereitung.Rect("salmon");
                rect.x = newX;
                rect.y = newY;
                stars.push(rect);
                break;
            case 2:
                let circle = new A11_Vorbereitung.Circle("sandybrown");
                circle.x = newX;
                circle.y = newY;
                stars.push(circle);
                break;
            case 3:
                let triangle = new A11_Vorbereitung.Triangle("paleturquoise");
                triangle.x = newX;
                triangle.y = newY;
                stars.push(triangle);
                break;
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        A11_Vorbereitung.crc2.clearRect(0, 0, A11_Vorbereitung.crc2.canvas.width, A11_Vorbereitung.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(A11_Vorbereitung || (A11_Vorbereitung = {})); // namespace zu
//# sourceMappingURL=Animation.js.map