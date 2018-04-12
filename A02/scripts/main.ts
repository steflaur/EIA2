/* 
Aufgabe 2: Memory
Name: Laura Vogt
Matrikel: 254671
Datum: 11Apr18
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace memory {


//global lets


    

function init(): void {
    
    let pairs : string = prompt("Wie viele Kartenpaare (min5|max10)")
    let pairsSum : number = parseInt(pairs)
    
    if (isNaN(pairsSum) || pairsSum < 5 || pairsSum > 10) {
        alert("FALSCH")
        init();    
    }
    
        else {
        
            let player : string = prompt("Wie viele Spieler (min1|max4)")
            let playerSum : number = parseInt(player)
        
            if (isNaN(playerSum) || playerSum < 1 || playerSum > 4) {
                alert("FALSCH")
                init();    
            }
            
            else {
                createGame(pairsSum,playerSum);
                }
        }
}//init close

function createGame(_pairs: number, _player: number) : void {
    
    //header
    let head : HTMLElement = document.createElement("header")
    document.body.appendChild(head);
    
    //H1
    let h: HTMLHeadingElement = document.createElement("h1");
    h.innerText = "Memory";
    head.appendChild(h);
    
    
    createMainboard();
    
    createAside();
    
    createFooter();
    
}//function game close

 
 
function createMainboard () : void {

    //main
    let mainboard : HTMLElement = document.createElement("main")
    document.body.appendChild(mainboard);
    
}//create Main close

    
    
function createAside () : void {
    
    //aside
    let info : HTMLElement = document.createElement("aside")
    document.body.appendChild(info);
    
}//create Aside close 
    

    
function createFooter () : void {
    
    //footer
    let footer : HTMLElement = document.createElement("footer")
    document.body.appendChild(footer);
    
}//create Footer close    
    
   
    
}//namespace ende        
        
        
    
        
 
    
    