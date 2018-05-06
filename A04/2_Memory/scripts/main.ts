/* 
Aufgabe 4: Memory
Name: Laura Vogt
Matrikel: 254671
Datum: 06.Mai18
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace A4 {

    document.addEventListener("DOMContentLoaded", init);

    function init(): void {

        document.getElementById("start-Game").addEventListener("click", game);

        document.getElementById("select-Deck").addEventListener("change", createSlider);
        document.getElementById("player-Stepper").addEventListener("change", createInput);

        let selectOpt: HTMLSelectElement = <HTMLSelectElement>document.getElementById("select");

    }

    function createSlider() {

    }

    function createInput() {

    }

    //_____________________________________________________________________________________________________________________     
    function game(): void {
        console.log("#call game")
        document.getElementById("formSec").style.display = "none";
        console.log("invisible Form");
        document.getElementById("infoSec").style.display = "block";
        document.getElementById("cardSec").style.display = "block";

        //createGame(/*parameters*/);
    }

    //_____________________________________________________________________________________________________________________    
    function createGame(_pairs: number, _player: number): void {

        let main: HTMLElement = document.getElementById("main");

        //call functions
        createPlayerInfo(_player, main);

        createCardArea(_pairs, main);
    }
    //_____________________________________________________________________________________________________________________    
    function createPlayerInfo(_player: number, _main: HTMLElement): void {
        console.log("#call createInfo");

        let infoSec: HTMLElement = document.getElementById("infoSec");
        console.log("load Player Section");

        for (let i: number = 0; i < _player; i++) {
            let box: HTMLFieldSetElement = document.createElement("fieldset");
            infoSec.appendChild(box);

            let boxLegend: HTMLLegendElement = document.createElement("legend");
            boxLegend.innerHTML = "Spieler " + (_player + i) + ":";
            box.appendChild(boxLegend);

            let boxContent: HTMLParagraphElement = document.createElement("p");
            boxContent.innerHTML = "Score: ";
            box.appendChild(boxContent);
            console.log("create box for player " + (_player + i));
        }
    }
    //_____________________________________________________________________________________________________________________     
    function createCardArea(_pairs: number, _main: HTMLElement): void {
        console.log("#call createCardArea");

        let cardSec: HTMLElement = document.getElementById("cardSec");
        console.log("load Card Section");

        //kompletter Kontent
        let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        console.log("total content " + cardContent);

        //neues array aus content in passender anzahl
        let cardContentNeeded: string[] = cardContent.slice(0, _pairs);
        console.log("needed content " + cardContentNeeded);

        //double
        cardContentNeeded = cardContentNeeded.concat(cardContentNeeded);
        console.log("doubled | needed content " + cardContentNeeded);

        //shuffle
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

        let cardDiv: HTMLDivElement = document.createElement("div");
        cardDiv.setAttribute("content", _content);
        cardDiv.className = "hidden";
        cardDiv.addEventListener("click", cardInteraction);
        _cardSec.appendChild(cardDiv);
        console.log("load card " + (_index + 1) + " to card area");

        let content: HTMLParagraphElement = document.createElement("p");
        content.innerHTML = _content;

        cardDiv.appendChild(content);
        console.log("load content " + _content + " to card area");
    }
    //__________________________________________________________________________________________________________________       
    function cardInteraction(_event: Event): void {
        console.log("#call card event");
        //cardDiv wird im event zu clCard
        let cardSec = document.getElementById("cardSec");

        let cardCl: HTMLDivElement = <HTMLDivElement>_event.target;
        let cardsOpen: number = cardSec.getElementsByClassName("open").length;

        if (cardCl.className == "hidden") {
            switch (cardsOpen) {
                case 0: cardCl.className = "open";
                    console.log((cardsOpen + 1) + "st clicked -card " + cardCl.title + "-");
                    break;
                case 1: cardCl.className = "open";
                    console.log((cardsOpen + 1) + "st clicked -card " + cardCl.title + "-");
                    setTimeout(checkContent, 1500);
            }
        }
    }

    function checkContent(): void {
        console.log("#call check");

        let cardSec = document.getElementById("cardSec");
        console.log(cardSec.getElementsByClassName("open"));

        let card1: Element = cardSec.getElementsByClassName("open")[0];
        let card2: Element = cardSec.getElementsByClassName("open")[1];

        if (card1.getAttribute("content") == card2.getAttribute("content")) {

            card1.setAttribute("class", "taken");
            card1.removeEventListener("click", cardInteraction);
            card2.setAttribute("class", "taken");
            card2.removeEventListener("click", cardInteraction);

            console.log("Paar gefunden");
            console.log(cardSec.getElementsByClassName("taken").length);
            console.log(cardSec.getElementsByClassName("open").length);

            if (cardSec.getElementsByClassName("hidden").length == 0) {
                alert("Herzlichen Glückwunsch!\n👑\nAlle Pärchen wurden gefunden!")
                location.reload();
            }
            else {
                alert("🎉Herzlichen Glückwunsch🎉\nDu hast ein Pärchen gefunden!")
            }
        }
        else {
            card1.setAttribute("class", "hidden");
            card2.setAttribute("class", "hidden");
            alert("❌Leider kein Pärchen gefunden❌")

            console.log("kein Paar")
            console.log(cardSec.getElementsByClassName("open").length);
        }
    }

} //namespace ende        