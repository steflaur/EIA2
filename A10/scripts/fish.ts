/* 
Aufgabe 10: Canvas Animation
Name: Laura Vogt
Matrikel: 256056
Datum: 25Jun2018

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace A10_canvas {

    export class Fish {

        x: number;
        y: number;
        speed: number;
        c1: string;
        c2: string;
        c3: string;
        c4: string;
        c5: string;


        //declare methods
        move(): void {
            this.x -= this.speed;
            if (this.x < 0) {
                this.x = crc2.canvas.width + (this.x + 70);
            }//close if
        }//close move


        draw(): void {

            //Fisch
            //Flosse gross hinten
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 25, this.y + 20, this.x + 60, this.y - 10);
            crc2.quadraticCurveTo(this.x + 35, this.y + 25, this.x + 60, this.y + 60);
            crc2.quadraticCurveTo(this.x + 25, this.y + 30, this.x, this.y + 50);
            crc2.fillStyle = this.c2;
            crc2.fill();
            crc2.closePath();

            //Streifen
            crc2.beginPath();
            crc2.moveTo(this.x + 70, this.y - 15);
            crc2.quadraticCurveTo(this.x + 40, this.y + 15, this.x + 20, this.y + 12);
            crc2.strokeStyle = this.c4;
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.x + 70, this.y + 65);
            crc2.quadraticCurveTo(this.x + 40, this.y + 35, this.x + 20, this.y + 38);
            crc2.stroke();
            crc2.closePath();


            //Körper
            crc2.beginPath();
            crc2.moveTo(this.x + 20, this.y - 20);
            crc2.quadraticCurveTo(this.x - 32, this.y - 10, this.x - 42, this.y + 27);

            //Mund
            crc2.quadraticCurveTo(this.x - 38, this.y + 30, this.x - 30, this.y + 29);
            crc2.quadraticCurveTo(this.x - 32, this.y + 35, this.x - 42, this.y + 33);

            crc2.quadraticCurveTo(this.x - 40, this.y + 55, this.x + 20, this.y + 70);
            crc2.quadraticCurveTo(this.x - 5, this.y + 20, this.x + 20, this.y - 20);
            crc2.fillStyle = this.c1;
            crc2.fill();
            crc2.closePath();

            //Streifen klein
            crc2.beginPath();
            crc2.moveTo(this.x - 10, this.y + 60);
            crc2.quadraticCurveTo(this.x - 35, this.y + 20, this.x - 10, this.y - 10);
            crc2.quadraticCurveTo(this.x - 25, this.y + 20, this.x - 10, this.y + 60);
            crc2.fillStyle = this.c3;
            crc2.fill();
            crc2.closePath();

            //Streifen gross
            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y + 66);
            crc2.quadraticCurveTo(this.x - 20, this.y + 20, this.x + 5, this.y - 16);
            crc2.quadraticCurveTo(this.x - 10, this.y + 20, this.x + 5, this.y + 66);
            crc2.fill();
            crc2.closePath();


            //Augen
            //aussen
            crc2.beginPath();
            crc2.arc(this.x - 15, this.y + 10, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = this.c5;
            crc2.fill();
            crc2.closePath();

            //innen
            crc2.beginPath();
            crc2.arc(this.x - 15, this.y + 10, 2.5, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            //Wimper
            crc2.beginPath();
            crc2.moveTo(this.x - 18, this.y + 5);
            crc2.quadraticCurveTo(this.x - 15, this.y - 22, this.x + 30, this.y - 30);
            crc2.quadraticCurveTo(this.x - 7, this.y - 20, this.x - 18, this.y + 5);
            crc2.fillStyle = this.c2;
            crc2.fill();
            crc2.closePath();

            //vordere Flosse
            crc2.beginPath();
            crc2.moveTo(this.x - 17, this.y + 45);
            crc2.quadraticCurveTo(this.x - 20, this.y + 60, this.x, this.y + 75);
            crc2.closePath();
            crc2.fillStyle = this.c4;
            crc2.fill();

            //hintere Flosse
            crc2.beginPath();
            crc2.moveTo(this.x - 8, this.y + 50);
            crc2.quadraticCurveTo(this.x - 12, this.y + 63, this.x + 23, this.y + 84);
            crc2.closePath();
            crc2.fill();

        }//close draw

    }//close class
}//close namespace