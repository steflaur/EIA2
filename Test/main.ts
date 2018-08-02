namespace anger {
    window.addEventListener("load", startGame);//init!!

    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let food: FallingObjects[] = [];
    let n: number = 20;

    function init(): void {
        document.getElementById('gamePage').style.display = "none";
        document.getElementById('startPage').style.display = "block";

        document.getElementById('startButt').addEventListener("click", startGame);

    }

    function startGame(): void {
        //set time start
        document.getElementById('gamePage').style.display = "block";
        document.getElementById('startPage').style.display = "none";

        document.getElementById('restartButt').addEventListener("click", restart);

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        drawStatics();

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //collector zeichnen

        for (let i: number = 0; i < n; i++) {
            let wurst: Wurst = new Wurst();
            food.push(wurst);
            let obst: Obst = new Obst();
            food.push(obst);
        }

        //first fall

        

        //danach! generate rndm obj

        animate();

        //collector key und touch events
        //put image data
    }

    function firstFall(): void {
        //function auswahl essig öl oder zitrone
        //if a (a=true) if b (b true) else (nochmal)
        //a?b:c
        //definiere let richtwert : boolean als true
        //clear img
    }




    function generateRandomObjects(): void {
        let randomObject: number = Math.floor(Math.random() * 8);

        switch (randomObject) {
            case 0:
                let wurstA: Wurst = new Wurst(/*bildsrc*/);
                food.push(wurstA);
                break;
            case 1:
                let wurstB: Wurst = new Wurst(/*bildsrc*/);
                food.push(wurstB);
                break;
            case 2:
                let cheese: Wurst = new Wurst(/*bildsrc*/);
                food.push(cheese);
                break;
            case 3:
                let onion: Wurst = new Wurst(/*bildsrc*/);
                food.push(onion);
                break;
            case 4:
                let apple: Obst = new Obst(/*bildsrc*/);
                food.push(apple);
                break;
            case 5:
                let banana: Obst = new Obst(/*bildsrc*/);
                food.push(banana);
                break;
            case 6:
                let berry: Obst = new Obst(/*bildsrc*/);
                food.push(berry);
                break;
            case 7:
                let grape: Obst = new Obst(/*bildsrc*/);
                food.push(grape);
                break;
        }
    }

    function catchObject(): void {

        //was ist fangen? => koordinaten

        //if boolean=true ++punkt

        //else --lives
        //if lives kleiner 1 => gameEnd(dead)

    }


    function gameEnd(_reason: string): void {

        switch (_reason) {
            case "dead":
                //alert game over
                //punkteanzeige
                //lustiges statement
                //evtl mongo formS
                break;
            case "time":
                //alert zeit over
                //punkteanzeige
                //congrats
                //evtl mongo form
                break;
        }
    }

    function restart(): void {
        window.location.reload(true);
    }


    //______________________________________________________
    function animate(): void {
        
        //get time "start"
        //if time größer als richtwert= game end(timesUp)
        
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        //catch object

        moveObjects();
        drawObjects();

        //check location object
    }

    function moveObjects(): void {
        for (let i: number = 0; i < food.length; i++) {
            food[i].fall();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < food.length; i++) {
            food[i].draw();
        }
    }
    
    function locateObject(): void {
        //check location for
        //if object y<0 => object aus fallingObjects array löschen food.splice
    }

}