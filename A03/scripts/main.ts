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
    
    document.addEventListener("DOMContentLoaded", init);

    function init(): void {
        let pairs: number = promptPairs();
        console.log(pairs + " pairs");

        let player: number = promptPlayer();
        console.log(player + " player");

        createGame(pairs, player);
    }
//_____________________________________________________________________________________________________________________    

    function promptPairs() {
        let pairs: string = prompt("Wie viele Kartenpaare (min5|max10)");
        let pairsSum: number = parseInt(pairs);


        if (isNaN(pairsSum) || pairsSum < 5 || pairsSum > 10) {
            alert("Falsche Eingabe. Versuche es von vorne.")
            console.log("invalide input");
            location.reload();
        }
        else {
            console.log("valide input");
            return pairsSum;
        }
    }

    function promptPlayer() {
        let player: string = prompt("Wie viele Spieler (min1|max4)")
        let playerSum: number = parseInt(player)

        if (isNaN(playerSum) || playerSum < 1 || playerSum > 4) {
            alert("Falsche Eingabe. Versuche es von vorne.")
            console.log("invalide input");
            location.reload();
        }
        else {
            console.log("valide input");
            return playerSum;
        }
    }
//_____________________________________________________________________________________________________________________     
    function createGame(_pairs: number, _player: number): void {
        //header
        let head: HTMLElement = document.createElement("header");
        document.body.appendChild(head);
        console.log("load head");

        //H1
        let h1: HTMLHeadingElement = document.createElement("h1");
        h1.innerText = "Memory";
        head.appendChild(h1);
        console.log("create headline");

        //main
        let main: HTMLElement = document.createElement("main");
        document.body.appendChild(main);
        console.log("load main");

        //call functions
        createPlayerInfo(_player, main);

        createCardArea(_pairs, main);

        createFooter();
    }
//_____________________________________________________________________________________________________________________    
    function createPlayerInfo(_player: number, _main: HTMLElement): void {
        console.log("#call createInfo");

        let infoSec: HTMLElement = document.createElement("section");
        infoSec.id = "infoSec";
        _main.appendChild(infoSec);
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

        let cardSec: HTMLElement = document.createElement("section");
        cardSec.id = "cardSec";
        _main.appendChild(cardSec);
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
//__________________________________________________________________________________________________________________    
    function createFooter(): void {
        console.log("#call createFooter");

        let footer: HTMLElement = document.createElement("footer")
        document.body.appendChild(footer);

        let footerP: HTMLParagraphElement = document.createElement("p");
        footerP.innerHTML = "© Laura Vogt";
        footer.appendChild(footerP);

        let footerSpan: HTMLSpanElement = document.createElement("span");
        footer.appendChild(footerSpan);

        let userLink = document.createElement("a");
        userLink.href = "https://steflaur.github.io";
        userLink.target = "_blank";
        userLink.innerText = "Userpage";
        footerSpan.appendChild(userLink);

        let projectLink = document.createElement("a");
        projectLink.href = "https://steflaur.github.io/EIA2";
        projectLink.target = "_blank";
        projectLink.innerText = "Projectpage";
        footerSpan.appendChild(projectLink);

        console.log("load footer");
    }

} //namespace ende        