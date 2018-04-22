/* 
Aufgabe 2: Memory
Name: Laura Vogt
Matrikel: 254671
Datum: 22.Apr18
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace Memory {
    
    let pairs: number;
    let pairsInput: string;
    let pairsSum: number;
    
    let player: number;
    let playerInput: string;
    let playerSum: number;
    
    let head: HTMLElement;
    let h1: HTMLHeadingElement;
    let main: HTMLElement
    
    let infoSec: HTMLElement;
    let box: HTMLFieldSetElement;
    let boxLegend: HTMLLegendElement;
    let boxContent: HTMLParagraphElement;
    let score: number = 0;
    let playerArray: string[] = [];
    
    let cardSec: HTMLElement;
    let cardContent: string[];
    let cardContentNeeded: string[];
    
    let cardDiv: HTMLDivElement;
    let content: HTMLParagraphElement;
    
    let footer: HTMLElement;
    let footerP: HTMLParagraphElement;
    let footerSpan: HTMLSpanElement;
    let userLink: HTMLAnchorElement;
    let projectLink: HTMLAnchorElement;
    
    
    //_____________________________________________________________________________________________________________________

    document.addEventListener("DOMContentLoaded", init);

    function init(): void {

        pairs = promptPairs();
        console.log(pairs + " pairs");

        player = promptPlayer();
        console.log(player + " player");

        createGame(pairs, player);

    }
    //_____________________________________________________________________________________________________________________    

    function promptPairs() {
        pairsInput = prompt("Wie viele Kartenpaare (min5|max10)");
        pairsSum = parseInt(pairsInput);


        if (isNaN(pairsSum) || pairsSum < 5 || pairsSum > 10) {
            alert("Falsche Eingabe. Versuche es von vorne.")
            console.log("invalide input");
            init();
        }

        else {
            console.log("valide input");
            return pairsSum;
        }
    }

    function promptPlayer() {
        playerInput = prompt("Wie viele Spieler (min1|max4)")
        playerSum = parseInt(playerInput)

        if (isNaN(playerSum) || playerSum < 1 || playerSum > 4) {
            alert("Falsche Eingabe. Versuche es von vorne.")
            console.log("invalide input");
            init();
        }

        else {
            console.log("valide input");
            return playerSum;
        }
    }
    //_____________________________________________________________________________________________________________________     
    function createGame(_pairs: number, _player: number): void {

        //header
        head = document.createElement("header")
        document.body.appendChild(head);
        console.log("load head");

        //H1
        h1 = document.createElement("h1");
        h1.innerText = "Memory";
        head.appendChild(h1);
        console.log("create headline");

        //main
        main = document.createElement("main");
        document.body.appendChild(main);
        console.log("load main");

        //call functions
        createPlayerInfo(player, main);

        createCardArea(pairs, main);

        createFooter();

    }

    //_____________________________________________________________________________________________________________________    
    function createPlayerInfo(_player: number, _main: HTMLElement): void {
        console.log("#call createInfo");

        infoSec = document.createElement("section");
        infoSec.id = "infoSec";
        _main.appendChild(infoSec);
        console.log("load Player Section");
        
        playerArray = ["1", "2", "3", "4"];
        playerArray = playerArray.slice(0, player);
        console.log(playerArray);
        
        for (let i: number = 0; i < playerArray.length; i++) {
            box = document.createElement("fieldset");
            infoSec.appendChild(box);

            boxLegend = document.createElement("legend");
            boxLegend.innerHTML = "Spieler " + playerArray[i] + ":";
            box.appendChild(boxLegend);

            boxContent = document.createElement("p");
            boxContent.innerHTML = "Score: " + score;
            box.appendChild(boxContent);
            console.log("create box for player " + playerArray[i]);
        }
    }

    //_____________________________________________________________________________________________________________________     
    function createCardArea(_pairs: number, _main: HTMLElement): void {
        console.log("#call createCardArea");

        cardSec = document.createElement("section");
        cardSec.id = "cardSec";
        _main.appendChild(cardSec);
        console.log("load Card Section");


        //kompletter Kontent
        cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        console.log("total content " + cardContent);
        
        //neues array aus content in passender anzahl
        cardContentNeeded = cardContent.slice(0, pairs);
        console.log("needed content " + cardContentNeeded);

        //double
        cardContentNeeded = cardContentNeeded.concat(cardContentNeeded);
        console.log("doubled | needed content " + cardContentNeeded);

        //shuffle
        /*andere art zu shuffeln...aber die schlechtere
        cardContentNeeded.sort(function(){return 0.5 - Math.random()});*/
        shuffleArray(cardContentNeeded);
        console.log("doubled | needed | randomized content " + cardContentNeeded);
        console.log("Items in cardContentNeeded : " + cardContentNeeded.length);

        //create cards
        for (let i: number = 0; i < cardContentNeeded.length; i++) {
            console.log(cardContentNeeded[i]);
            createCard(cardContentNeeded[i], cardSec, i);
        }
    }



    //__________________________________________________________________________________________________________________    
   
    function shuffleArray(_array: string[]): void {
        console.log("#call shuffleArray");

        let j: number = 0
        let temp: any = null

        for (let i: number = _array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = _array[i]
            _array[i] = _array[j]
            _array[j] = temp
        }
    }

    //_____________________________________________________________________________________________________________________     
    function createCard(_content: string, _cardSec: HTMLElement, _index: number): void {
        console.log("#call createCard");

        cardDiv = document.createElement("div");
        cardDiv.title = _content;
        cardDiv.className = "hidden";
        cardDiv.addEventListener("click", cardInteraction);
        _cardSec.appendChild(cardDiv);
        console.log("load card " + (_index + 1) + " to card area");

        content = document.createElement("p");
        content.innerHTML = _content;
        
        cardDiv.appendChild(content);
        console.log("load content " + _content + " to card area");        

    }

     //__________________________________________________________________________________________________________________       
    
    function cardInteraction(_event: Event): void {
        console.log("#call card event");
        //cardDiv wird im event zu clCard
        let cardCl: HTMLDivElement = <HTMLDivElement>_event.target;
        let cardsOpen : number = cardSec.getElementsByClassName("open").length;
        
        if (cardCl.className == "hidden"){
            switch(cardsOpen) {
                case 0: cardCl.className = "open";
                                console.log( (cardsOpen + 1) + "st clicked -card " + cardCl.title + "-");
                                break;
                case 1: cardCl.className = "open";
                                console.log( (cardsOpen + 1) + "st clicked -card " + cardCl.title + "-"); 
                                setTimeout(checkContent, 2000);     
            }
        }
        
    }
    
    function checkContent() : void{
        console.log("#call check");
        console.log(cardSec.getElementsByClassName("open"));
        
        let card1 = cardSec.getElementsByClassName("open")[0];
        let card2 = cardSec.getElementsByClassName("open")[1];
        
        if(card1.getAttribute("title") == card2.getAttribute("title")){
            
            //overlay("Succeed");
            card1.setAttribute("class", "taken");
            card1.removeEventListener("click", cardInteraction);
            
            card2.setAttribute("class", "taken");
            card2.removeEventListener("click", cardInteraction);
            
            console.log("Paar gefunden");
            console.log(cardSec.getElementsByClassName("taken").length);
            console.log(cardSec.getElementsByClassName("open").length);
            }
        
            else{
            //overlay("Fail");
            card1.setAttribute("class", "hidden");
            card2.setAttribute("class", "hidden");
            scoreEvent();
            end();
            console.log("kein Paar")
            console.log(cardSec.getElementsByClassName("open").length);

            }
        }
    
    //war bis jetzt funtionslos, muss noch angepasst werden
    function scoreEvent(): void {
        
        }
    
    //diese function definiert das ende des spiels, soll, wenn alles fertig ist, 
    //einen alert ausgeben und man soll das spiel neu starten können
    function end(): void {
        
        if (cardSec.getElementsByClassName("hidden").length == 0){
           //overlay("Triumph");
            init(); 
        }
        
    }
    //Zukünfitge alerts (.css fehlt noch und die onclick = off() Funktion)
    /*function overlay(_status: string): void{
        
        let overlay: HTMLDivElement = document.createElement("div");
        overlay.id = "overlay" + _status;
        cardSec.appendChild(overlay);
        
        let h2: HTMLHeadingElement = document.createElement("h2");
        overlay.appendChild(h2); 
        let h3: HTMLHeadingElement = document.createElement("h3");
        overlay.appendChild(h3); 
        let p: HTMLParagraphElement = document.createElement("p");
        overlay.appendChild(p); 
        
            switch(_status) {
                case "Succeed": h2.innerHTML="Passendes Pärchen!";
                                
                                h3.style.display = "none";
    
                                p.innerHTML="";
                                break;
                    
                case "Fail":    h2.innerHTML="Keine Übereinstimmung";
                                
                                h3.style.display = "none";
    
                                p.innerHTML="";
                                break;
                    
                case "Triumph": h2.innerHTML="Herzlichen Glückwunsch!";
                                
                                h3.style.display = "default";
                                h3.innerHTML="";
                                
                                p.innerHTML=""; 
                                break;       
            }
        }*/
    
    //__________________________________________________________________________________________________________________    
    function createFooter(): void {
        console.log("#call createFooter");

        footer = document.createElement("footer")
        document.body.appendChild(footer);

        footerP = document.createElement("p");
        footerP.innerHTML = "© Laura Vogt";
        footer.appendChild(footerP);

        footerSpan = document.createElement("span");
        footer.appendChild(footerSpan);

        userLink = document.createElement("a");
        userLink.href = "https://steflaur.github.io";
        userLink.target = "_blank";
        userLink.innerText = "Userpage";
        footerSpan.appendChild(userLink);

        projectLink = document.createElement("a");
        projectLink.href = "https://steflaur.github.io/EIA2";
        projectLink.target = "_blank";
        projectLink.innerText = "Projectpage";
        footerSpan.appendChild(projectLink);

        console.log("load footer");


    }

    //_____________________________________________________________________________________________________________________
    

    
    //_____________________________________________________________________________________________________________________     
} //namespace ende        