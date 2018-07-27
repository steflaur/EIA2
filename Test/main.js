var anger;
(function (anger) {
    window.addEventListener("load", startGame); //init!!
    let imgData;
    let food = [];
    let n = 20;
    function init() {
        document.getElementById('gamePage').style.display = "none";
        document.getElementById('startPage').style.display = "block";
        document.getElementById('startButt').addEventListener("click", startGame);
    }
    function startGame() {
        //set time start
        document.getElementById('gamePage').style.display = "block";
        document.getElementById('startPage').style.display = "none";
        document.getElementById('restartButt').addEventListener("click", restart);
        let canvas = document.getElementsByTagName("canvas")[0];
        anger.crc2 = canvas.getContext("2d");
        console.log(anger.crc2);
        anger.drawStatics();
        imgData = anger.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //collector zeichnen
        for (let i = 0; i < n; i++) {
            let wurst = new anger.Wurst();
            food.push(wurst);
            let obst = new anger.Obst();
            food.push(obst);
        }
        //first fall
        //danach! generate rndm obj
        //if lives<1 oder time => game end
        animate();
        //collector key und touch events
        //put image data
    }
    function firstFall() {
        //function auswahl essig öl oder zitrone
        //if a (a=true) if b (b true) else (nochmal)
        //a?b:c
        //definiere let richtwert : boolean als true
        //clear
    }
    function generateRandomObjects() {
        let randomObject = Math.floor(Math.random() * 8);
        switch (randomObject) {
            case 0:
                let wurstA = new anger.Wurst();
                food.push(wurstA);
                break;
            case 1:
                let wurstB = new anger.Wurst();
                food.push(wurstB);
                break;
            case 2:
                let cheese = new anger.Wurst();
                food.push(cheese);
                break;
            case 3:
                let onion = new anger.Wurst();
                food.push(onion);
                break;
            case 4:
                let apple = new anger.Obst();
                food.push(apple);
                break;
            case 5:
                let banana = new anger.Obst();
                food.push(banana);
                break;
            case 6:
                let berry = new anger.Obst();
                food.push(berry);
                break;
            case 7:
                let grape = new anger.Obst();
                food.push(grape);
                break;
        }
    }
    function catchObject() {
        //was ist fangen? => koordinaten
        //if boolean=true ++punkt
        //else --lives
    }
    function gameEnd() {
        //alert game over
        //punkteanzeige
        //lustiges statement
        //alert zeit over
        //punkteanzeige
    }
    function restart() {
        anger.crc2.clearRect(0, 0, anger.crc2.canvas.width, anger.crc2.canvas.height);
        anger.crc2.putImageData(imgData, 0, 0);
        startGame();
    }
    //______________________________________________________
    function animate() {
        window.setTimeout(animate, 10);
        anger.crc2.clearRect(0, 0, anger.crc2.canvas.width, anger.crc2.canvas.height);
        anger.crc2.putImageData(imgData, 0, 0);
        //catch object
        moveObjects();
        drawObjects();
        //delete object
    }
    function moveObjects() {
        for (let i = 0; i < food.length; i++) {
            food[i].fall();
        }
    }
    function drawObjects() {
        for (let i = 0; i < food.length; i++) {
            food[i].draw();
        }
    }
    function deleteObject() {
        //if object verschwindet => object aus fallingObjects array löschen
    }
})(anger || (anger = {}));
//# sourceMappingURL=main.js.map