/* 
Aufgabe 2: Memory
Name: Laura Vogt
Matrikel: 254671
Datum: 11Apr18
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace Memory {

   document.addEventListener("DOMContentLoaded", init);
    
function init(): void {
    
    let pairs : string = prompt("Wie viele Kartenpaare (min5|max10)")
    let pairsSum : number = parseInt(pairs)
    
    if (isNaN(pairsSum) || pairsSum < 5 || pairsSum > 10) {
        alert("FALSCH")
        init();    
    }
    
        else {
            
            console.log("correct input");
            let player : string = prompt("Wie viele Spieler (min1|max4)")
            let playerSum : number = parseInt(player)
        
            if (isNaN(playerSum) || playerSum < 1 || playerSum > 4) {
                alert("FALSCH")
                init();    
            }
            
            else {
                console.log("correct input");
                createGame(pairsSum,playerSum);
                }
        }
}//init close

function createGame(_pairs: number, _player: number) : void {
    
    //header
    let head : HTMLElement = document.createElement("header")
    document.body.appendChild(head);
    console.log("load head");
    
    //H1
    let h: HTMLHeadingElement = document.createElement("h1");
    h.innerText = "Memory";
    head.appendChild(h);
    console.log("create headline");
    
    
    createMainboard(_pairs);
    
    createAside(_player);
    
    createFooter();
    
}//function game close

 
 
function createMainboard (_pairs : number) : void {

    //main
    let mainboard : HTMLElement = document.createElement("main")
    document.body.appendChild(mainboard);
    console.log("load main");
    
    //kompletter Kontent
    let cardContent : string[] = ["a","b","c","d","e","f","g","h","i","j"];
    console.log("total content " + cardContent);
    
    //neues array aus content in passender anzahl
    let cardContentNeeded : string [] = cardContent.slice(0, _pairs); 
    console.log("needed content " + cardContentNeeded); 
    
    //call doubleArray
    doubleArray(cardContent,cardContentNeeded,_pairs);
    console.log("doubled | needed content " + cardContentNeeded); 
    
    //shuffle
    cardContentNeeded.sort(function(){return 0.5 - Math.random()});
    console.log("doubled | needed | randomized content " + cardContentNeeded); 
    console.log(cardContentNeeded.length);
    
    
    //create Card WARUUUUUUUUUM
    for (let i : number = 0; i > (cardContentNeeded.length-1); i++){
        console.log("createCard()");
    }
    
        console.log(cardContentNeeded.length);
        
}//create Main close

function doubleArray ( _cardContent : string[], _cardContentNeeded : string[], _pairs : number) : void {
    let i: number = 0; //counter
    //let n: number = 0; //orderer
    while(i<_pairs){   
    _cardContentNeeded.splice( 0, 0, (_cardContent[i]));   
    console.log("Kartenpaar " + (i+1) + ": " + _cardContent[i] + " & " + _cardContent[i]);  
        i++; 
    //n=n+2;
    }//while
}//double Array
        
function createCard () : void {
    console.log("callCard");
}
     

function createAside (_player : number) : void {
     
    //aside
    let info : HTMLElement = document.createElement("aside")
    document.body.appendChild(info);
    console.log("load aside");
    
}//create Aside close 
    

    
function createFooter () : void {
    
    //footer
    let footer : HTMLElement = document.createElement("footer")
    document.body.appendChild(footer);
    console.log("load footer");
    
}//create Footer close    
    
   
    
} //namespace ende        