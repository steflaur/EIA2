/* 
Abschlussaufgabe Monkey Business
Name: Laura Vogt
Matrikel: 256056
Datum: 09Jul2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurdeF
nicht kopiert und auch nicht diktiert. 
*/

namespace monkeyBusiness {

    window.addEventListener("load", init);//init!!

    export let crc2: CanvasRenderingContext2D;

    //Globale Variablen____________________________
    let imgData: ImageData;
    let startButtImg: HTMLImageElement;
    let canvas: HTMLCanvasElement;
    let bg: Background;
    let monkey: CollectorObject;
    let scoreC: CounterObjects;
    let lifeC: CounterObjects;

    let score: number = 0;
    let life: number = 5;

    let nB: number = 7;
    let nC: number = 4;

    //Arrays__________________________________________
    let mObj: MovingObjects[] = [];
    let fObj: FallingObjects[] = [];
    let cObj: CounterObjects[] = [];


    function init(): void {
        document.getElementById('gamePage').style.display = "none";
        document.getElementById('startPage').style.display = "block";
        startButtImg = <HTMLImageElement>document.getElementById("startButtImg");


        document.getElementById('monkeyButt').addEventListener("mouseover", overButton);
        document.getElementById('monkeyButt').addEventListener("mouseout", outButton);
        document.getElementById('monkeyButt').addEventListener("click", startGame);
        document.body.addEventListener("keydown", pressSpace);

    }
    //__________________Start_GAME________________
    function startGame(): void {
        console.log("START");
        document.body.removeEventListener("keydown", pressSpace);

        //Display
        document.getElementById('gamePage').style.display = "block";
        document.getElementById('startPage').style.display = "none";

        //addEventListener restart
        document.getElementById('restartButt').addEventListener("click", restart);

        //canvas get CanvasRenderingContext2D
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //BG
        bg = new Background("img/bg.png", 0, 0);

        //Score
        scoreC = new CounterObjects(330, 25, "img/score.png", score);
        cObj.push(scoreC);

        //Lifes
        lifeC = new CounterObjects(410, 25, "img/life.png", life);
        cObj.push(lifeC);

        //Monkey Collector
        monkey = new CollectorObject("img/monkey.png", "collector");
        mObj.push(monkey);

        //generate Banana
        for (let i: number = 0; i < nB; i++) {
            let banana: FallingObjects = new FallingObjects("img/banana.png", "gain");
            mObj.push(banana);
            fObj.push(banana);
        }

        //generate Coco
        for (let i: number = 0; i < nC; i++) {
            let coco: FallingObjects = new FallingObjects("img/coconut.png", "destroy");
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
    function animate(): void {
        console.log("#call animate");

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        bg.draw();
        scoreC.draw();
        lifeC.draw();

        for (let i: number = 0; i < mObj.length; i++) {
            mObj[i].update();

            for (let j: number = 0; j < fObj.length; j++) {
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
    function scoreEvent(): void {
        console.log("catch!");
        score++;
        scoreC.update(score);
        console.log("SCORE " + score);
    }

    function lifeEvent(): void {
        console.log("crash!");
        life--;
        lifeC.update(life);
        console.log("LIFE " + life);
    }

    //______________________Events______________________
    function overButton(): void {
        let random: number = Math.floor(Math.random() * 3);
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

    function outButton(): void {
        startButtImg.src = "img/monkeyDefault.png";
    }

    function pressSpace(_event: KeyboardEvent): void {
        if (_event.keyCode = 32) {
            //document.body.removeEventListener("keydown", pressSpace);
            startGame();
        }
        else {
        }
    }

    function keyEvent(_e: KeyboardEvent): void {
        switch (_e.keyCode) {
            case 37:
                monkey.moveLeft();
                break;
            case 39:
                monkey.moveRight(); 0
                break;
        }
    }

    function touchEvent(_e: TouchEvent): void {
        for (let i: number = 0; i = _e.touches.length; i++) {
            let clientX = _e.touches[i].clientX;
            let clientY = _e.touches[i].clientY;

            if (clientX > (crc2.canvas.width * 0.5)) {
                monkey.moveRight();
            }
            else {
                monkey.moveLeft();
            }
        }
    }

    //_______________End_&_restart_____________________

    function gameEnd(): void {
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

    function restart(): void {
        location.reload();
    }

}
