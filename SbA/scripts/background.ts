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

    export class Background {

        x: number;
        y: number;
        img: HTMLImageElement;

        constructor(_src: string, _x: number, _y: number) {
            this.img = new Image();
            this.img.src = _src;
            this.x = _x;
            this.y = _y;

        }
        
        draw(): void {
            crc2.beginPath();
            //Himmel
            var gradient = crc2.createLinearGradient(this.x, this.y, this.x, crc2.canvas.height);
            gradient.addColorStop(0, "azure");
            gradient.addColorStop(0.3, "lightcyan");
            gradient.addColorStop(0.6, "powderblue");
            gradient.addColorStop(0.8, "lightblue");
            gradient.addColorStop(0.9, "lightskyblue");
            gradient.addColorStop(1, "skyblue");
            crc2.fillStyle = gradient;
            crc2.fillRect(this.x, this.y, crc2.canvas.width, crc2.canvas.height);

            //Palmen png
            crc2.drawImage(this.img, this.x, this.y);
            crc2.closePath();
        }

    }
}