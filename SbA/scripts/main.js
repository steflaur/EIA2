/*
Abschlussaufgabe Monkey Business
Name: Laura Vogt
Matrikel: 256056
Datum: 09Jul2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert.
*/
var monkeyBusiness;
(function (monkeyBusiness) {
    window.addEventListener("load", init); //init!!
    //Globale Variablen____________________________
    let imgData;
    let startButtImg;
    let canvas;
    let bg;
    let monkey;
    let scoreC;
    let lifeC;
    let score = 0;
    let life = 5;
    let nB = 7;
    let nC = 4;
    //Arrays__________________________________________
    let mObj = [];
    let fObj = [];
    let cObj = [];
    function init() {
        document.getElementById('gamePage').style.display = "none";
        document.getElementById('startPage').style.display = "block";
        startButtImg = document.getElementById("startButtImg");
        document.getElementById('monkeyButt').addEventListener("mouseover", overButton);
        document.getElementById('monkeyButt').addEventListener("mouseout", outButton);
        document.getElementById('monkeyButt').addEventListener("click", startGame);
        document.body.addEventListener("keydown", pressSpace);
    }
    //__________________Start_GAME________________
    function startGame() {
        console.log("START");
        document.body.removeEventListener("keydown", pressSpace);
        //Display
        document.getElementById('gamePage').style.display = "block";
        document.getElementById('startPage').style.display = "none";
        //addEventListener restart
        document.getElementById('restartButt').addEventListener("click", restart);
        //canvas get CanvasRenderingContext2D
        canvas = document.getElementsByTagName("canvas")[0];
        monkeyBusiness.crc2 = canvas.getContext("2d");
        console.log(monkeyBusiness.crc2);
        imgData = monkeyBusiness.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //BG
        bg = new monkeyBusiness.Background("img/bg.png", 0, 0);
        //Score
        scoreC = new monkeyBusiness.CounterObjects(330, 25, "img/score.png", score);
        cObj.push(scoreC);
        //Lifes
        lifeC = new monkeyBusiness.CounterObjects(410, 25, "img/life.png", life);
        cObj.push(lifeC);
        //Monkey Collector
        monkey = new monkeyBusiness.CollectorObject("img/monkey.png", "collector");
        mObj.push(monkey);
        //generate Banana
        for (let i = 0; i < nB; i++) {
            let banana = new monkeyBusiness.FallingObjects("img/banana.png", "gain");
            mObj.push(banana);
            fObj.push(banana);
        }
        //generate Coco
        for (let i = 0; i < nC; i++) {
            let coco = new monkeyBusiness.FallingObjects("img/coconut.png", "destroy");
            mObj.push(coco);
            fObj.push(coco);
        }
        console.log(mObj);
        //addEventListener 2moveMonkey mit <-- -->
        document.body.addEventListener("keydown", keyEvent);
        document.body.addEventListener("touchstart", touchEvent);
        animate();
    }
    //______________ANIMATE________________________________________
    function animate() {
        console.log("#call animate");
        monkeyBusiness.crc2.clearRect(0, 0, monkeyBusiness.crc2.canvas.width, monkeyBusiness.crc2.canvas.height);
        monkeyBusiness.crc2.putImageData(imgData, 0, 0);
        bg.draw();
        scoreC.draw();
        lifeC.draw();
        for (let i = 0; i < mObj.length; i++) {
            mObj[i].update();
            for (let j = 0; j < fObj.length; j++) {
                let item = fObj[j];
                if (monkey.x - 40 < item.x && item.x < monkey.x + 120 && monkey.y - 40 < item.y && item.y < monkey.y + 60) {
                    item.catching();
                    switch (item.typ) {
                        case "gain":
                            scoreEvent();
                            break;
                        case "destroy":
                            lifeEvent();
                            break;
                    }
                    if (score == 50 || life < 1) {
                        gameEnd();
                    }
                    else {
                        continue;
                    }
                }
                else {
                    continue;
                }
            }
        }
        window.setTimeout(animate, 25);
    }
    //________________Score++__Life--____________________    
    function scoreEvent() {
        console.log("catch!");
        score++;
        scoreC.update(score);
        console.log("SCORE " + score);
    }
    function lifeEvent() {
        console.log("crash!");
        life--;
        lifeC.update(life);
        console.log("LIFE " + life);
    }
    //______________________Events______________________
    function overButton() {
        let random = Math.floor(Math.random() * 3);
        switch (random) {
            case 0:
                startButtImg.src = "img/monkey0.png";
                break;
            case 1:
                startButtImg.src = "img/monkey1.png";
                break;
            case 2:
                startButtImg.src = "img/monkey2.png";
                break;
        }
    }
    function outButton() {
        startButtImg.src = "img/monkeyDefault.png";
    }
    function pressSpace(_event) {
        if (_event.keyCode = 32) {
            //document.body.removeEventListener("keydown", pressSpace);
            startGame();
        }
        else {
        }
    }
    function keyEvent(_e) {
        switch (_e.keyCode) {
            case 37:
                monkey.moveLeft();
                break;
            case 39:
                monkey.moveRight();
                0;
                break;
        }
    }
    function touchEvent(_e) {
        for (let i = 0; i = _e.touches.length; i++) {
            let clientX = _e.touches[i].clientX;
            let clientY = _e.touches[i].clientY;
            if (clientX > (monkeyBusiness.crc2.canvas.width * 0.5)) {
                monkey.moveRight();
            }
            else {
                monkey.moveLeft();
            }
        }
    }
    //_______________End_&_restart_____________________
    function gameEnd() {
        switch (score == 50) {
            case true:
                console.log("end full score");
                alert("\t🙊\t\n\tCoco ist vollgefressen!\t\n\tDu hast es geschafft, ihn mit\t\n\t50 🍌\t\n\tzu füttern und du hast sogar noch\t\n\t" + life + " ❤️ übrig!\t");
                location.reload();
                break;
            case false:
                console.log("end no life");
                alert("\t🙈\t\n\tDu hast leider all deine ❤️ verloren,\t\n\tbevor sich der Affe satt fressen konnte.\t\n\tEr konnte " + score + " 🍌 fangen.\t\n\tVersuche es doch noch einmal.\t");
                location.reload();
                break;
        }
    }
    function restart() {
        location.reload();
    }
})(monkeyBusiness || (monkeyBusiness = {}));
//# sourceMappingURL=main.js.map