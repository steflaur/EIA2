/* 
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 24Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A10_canvas {
    window.addEventListener("load", init);

    export let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    export let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log("CanvasRendering2d active");

    export let b: string = "black";

    let fishs1: Fish[] = [];
    let n1: number = 10;
    let fishs2: Fish[] = [];
    let n2: number = 10;
    let bubbles: Bubble[] = [];
    let n3: number = 20;




    function init(): void {
        console.log("#call init");

        ctx.strokeStyle = b;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        //For schleife Fische1
        for (let i: number = 0; i < n1; i++) {
            let fish1: Fish = new Fish();
            fish1.x = Math.random() * 800;
            fish1.y = 50 + Math.random() * 400;
            fish1.c1 = "blue";
            fish1.c2 = "darkblue";
            fish1.c3 = "yellow";
            fish1.c4 = "gold";
            fish1.c5 = "whitesmoke";
            fishs1.push(fish1);
        }

        //For schleife fische2
        for (let i: number = 0; i < n2; i++) {
            let fish2: Fish = new Fish();
            fish2.x = Math.random() * 800;
            fish2.y = 50 + Math.random() * 400;
            fish2.c1 = "PaleVioletRed";
            fish2.c2 = "MediumVioletRed";
            fish2.c3 = "Thistle";
            fish2.c4 = "Thistle";
            fish2.c5 = "whitesmoke";
            fishs2.push(fish2);
        }

        //for schleife bubble
        for (let i: number = 0; i < n2; i++) {
            let bubble: Bubble = new Bubble();
            bubble.x = 120 + Math.random() * 200;
            bubble.y = Math.random() * 120;
            bubble.r = 5;
            bubble.c1 = "skyblue";
            bubble.c2 = "whitesmoke";
            bubbles.push(bubble);
        }

        animate();
    }

    function animate(): void {
        console.log("#call animate");
        window.setTimeout(animate, 10);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        console.log("#call move");

        //For schleife Fische

        for (let i: number = 0; i < fishs1.length; i++) {
            fishs1[i].move();
        }

        for (let i: number = 0; i < fishs2.length; i++) {
            fishs2[i].move();
        }

        //For schleife Blubber

        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }

    }

    function drawObjects(): void {
        console.log("#call draw");

        //Wasser
        drawWater("lightblue", "skyblue", canvas.width, canvas.height, 10, 400);

        //Boden
        drawBottom("burlywood", "peru", 700, 0, 400);

        //Schatzkiste
        drawBubbler("saddlebrown", "#5a2d0c", 350, 520);

        //Pflanzen
        drawPlant("green", "darkgreen", "brown", 85, 400);
        drawPlant("green", "darkgreen", "brown", 700, 500);


        //Fische 
        for (let i: number = 0; i < fishs1.length; i++) {
            fishs1[i].move();
        }

        for (let i: number = 0; i < fishs2.length; i++) {
            fishs2[i].move();
        }

        //For schleife Blubber

        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }

    }

}//namespace