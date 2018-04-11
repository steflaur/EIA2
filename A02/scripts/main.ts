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
let pairsSumInput : number;
let playersSumInput : number;
    

function init(): void {
    
    let pairsSum : string = prompt("Wie viele Kartenpaare (min5|max10)")
    pairsSumInput = parseInt(pairsSum)
    
    if (isNaN(pairsSumInput) || pairsSumInput <= 5 || pairsSumInput >=10) {
        alert("FALSCH")
        init();    
    }
    
        else {
        
            let playersSum : string = prompt("Wie viele Spieler (min2|max4)")
            playersSumInput = parseInt(playersSum)
        
            if (isNaN(playersSumInput) || playersSumInput >= 2 || playersSumInput <=4) {
                alert("FALSCH")
                init();    
            }
            
            else {
                createBrett(pairsSumInput,playersSumInput);
                }
        
        }
}

function createBrett(pairs: number, player: number) : void {
    
    //header
    let head : HTMLElement = document.createElement("header")
    document.body.appendChild(head);
    
    //H1
    let h: HTMLHeadingElement = document.createElement("h1");
    h.innerText = "Memory";
    head.appendChild(h);
    
    //main
    let mainboard : HTMLElement = document.createElement("main")
    document.body.appendChild(mainboard);
    createMainboard();
    
    //aside
    let info : HTMLElement = document.createElement("aside")
    document.body.appendChild(info);
    
    let content : string;
    
    for (var i : number = 0; i < playersSumInput; i++) {
        
        content = "";
        content += "<fieldset>";
        
        content += "<legend>";
        content += "Player "+ i++; //damit nicht player 0
        content += "</legend>";
        
        content += "<p>";
        content += "Score: ";
        content += "9347503"; //variable...
        content += "</p>";
        
        content += "</fieldset>";
        
        }
    
    info.innerHTML = content;
    
    //footer
    
}//function brett

    
    //array inhalte
    []
    let divs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
    
    for (let i : number = 0; i > pairsSumInput; i++) {
       
        //Variablen machen
       // let card1: HTMLDivElement = document.createElement("div");
       // let card2: HTMLDivElement = document.createElement("div");
       
        
       //klasse zuweisen 
       // card1.class += "Paar" + i 
       // card2.class += "Paar" + i
        
        //Inhalt
        // card1.innerText += i
        // card2.innerText += i
      }  
 
function createMainboard () : void {
  //array
    
    let cardContent : string[] =
            ["A","B","C","I","E",
             "F","G","H","I","J"];
    
    
    let cardA: HTMLDivElement;
    let cardB: HTMLDivElement;
    let lines : number = 0;
    
        for (var i : number = 0; i < pairsSumInput; i++) {
         let cardA = document.createElement("div");
         let cardB = document.createElement("div");
  //      mainboard.appendChild(cardA,cardB);   
               
            
        
        
    }
    
    
} 
    
}//namespace ende        
        
        
    
        
 
    
    