/*
Aufgabe 2: Memory
Name: Laura Vogt
Matrikel: 254671
Datum: 15.Apr18
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Memory;
(function (Memory) {
    //_____________________________________________________________________________________________________________________
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        let pairs = promptPairs();
        console.log(pairs + " pairs");
        let player = promptPlayer();
        console.log(player + " player");
        createGame(pairs, player);
    }
    //_____________________________________________________________________________________________________________________    
    function promptPairs() {
        let pairs = prompt("Wie viele Kartenpaare (min5|max10)");
        let pairsSum = parseInt(pairs);
        // Number.isInteger()
        if (isNaN(pairsSum) || pairsSum < 5 || pairsSum > 10) {
            alert("Falsche Eingabe. Versuche es von vorne.");
            console.log("invalide input");
            init();
        }
        else {
            console.log("valide input");
            return pairsSum;
        }
    }
    function promptPlayer() {
        let player = prompt("Wie viele Spieler (min1|max4)");
        let playerSum = parseInt(player);
        if (isNaN(playerSum) || playerSum < 1 || playerSum > 4) {
            alert("Falsche Eingabe. Versuche es von vorne.");
            console.log("invalide input");
            init();
        }
        else {
            console.log("valide input");
            return playerSum;
        }
    }
    //_____________________________________________________________________________________________________________________    
    function createGame(_pairs, _player) {
        //header
        let head = document.createElement("header");
        document.body.appendChild(head);
        console.log("load head");
        //H1
        let h1 = document.createElement("h1");
        h1.innerText = "Memory";
        head.appendChild(h1);
        console.log("create headline");
        //main
        let main = document.createElement("main");
        document.body.appendChild(main);
        console.log("load main");
        //call functions
        createPlayerInfo(_player, main);
        createCardArea(_pairs, main);
        createFooter();
    }
    //_____________________________________________________________________________________________________________________   
    function createPlayerInfo(_player, _main) {
        console.log("#call createInfo");
        let infoSec = document.createElement("section");
        infoSec.id = "infoSec";
        _main.appendChild(infoSec);
        console.log("load Player Section");
        for (let i = 0; i < _player; i++) {
            let box = document.createElement("fieldset");
            infoSec.appendChild(box);
            let boxLegend = document.createElement("legend");
            boxLegend.innerHTML = "Spieler " + (i + 1) + ":";
            box.appendChild(boxLegend);
            let boxContent = document.createElement("p");
            boxContent.innerHTML = "Score: 0";
            box.appendChild(boxContent);
            console.log("create box for player " + (i + 1));
        }
    }
    //_____________________________________________________________________________________________________________________    
    function createCardArea(_pairs, _main) {
        console.log("#call createCardArea");
        let cardSec = document.createElement("section");
        cardSec.id = "cardSec";
        _main.appendChild(cardSec);
        console.log("load Card Section");
        //kompletter Kontent
        let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        console.log("total content " + cardContent);
        //neues array aus content in passender anzahl
        let cardContentNeeded = cardContent.slice(0, _pairs);
        console.log("needed content " + cardContentNeeded);
        //double
        doubleArray(cardContent, cardContentNeeded, _pairs);
        console.log("doubled | needed content " + cardContentNeeded);
        //shuffle
        /*andere art zu shuffeln...aber die schlechtere
        cardContentNeeded.sort(function(){return 0.5 - Math.random()});*/
        shuffleArray(cardContentNeeded);
        console.log("doubled | needed | randomized content " + cardContentNeeded);
        console.log("Items in cardContentNeeded : " + cardContentNeeded.length);
        //create cards
        for (let i = 0; i < cardContentNeeded.length; i++) {
            console.log(cardContentNeeded[i]);
            createCard(cardContentNeeded[i], cardSec, i);
        }
    }
    //_____________________________________________________________________________________________________________________
    function doubleArray(_cardContent, _cardContentNeeded, _pairs) {
        console.log("#call doubleArray");
        for (let i = 0; i < _pairs; i++) {
            _cardContentNeeded.splice(0, 0, _cardContent[i]);
            console.log("Pair " + (i + 1) + ": " + _cardContent[i] + " & " + _cardContent[i]);
        }
    }
    function shuffleArray(_array) {
        console.log("#call shuffleArray");
        let j = 0;
        let temp = null;
        for (let i = _array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
    }
    //_____________________________________________________________________________________________________________________    
    function createCard(_content, _main, _index) {
        console.log("#call createCard");
        let card = document.createElement("div");
        _main.appendChild(card);
        console.log("load card " + (_index + 1) + " to card area");
        let content = document.createElement("p");
        content.innerHTML = _content;
        card.appendChild(content);
        console.log("load content " + _content + " to card area");
        //SwitchCase Block
        switch (_content) {
            case "A":
            case "I":
                card.className = "taken";
                break;
            case "C":
            case "E":
            case "G":
                card.className = "open";
                break;
            default:
                card.className = "hidden";
        }
    }
    //_____________________________________________________________________________________________________________________
    function createFooter() {
        console.log("#call createFooter");
        let footer = document.createElement("footer");
        document.body.appendChild(footer);
        let footerP = document.createElement("p");
        footerP.innerHTML = "© Laura Vogt";
        footer.appendChild(footerP);
        let footerSpan = document.createElement("span");
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
})(Memory || (Memory = {})); //namespace ende        
//# sourceMappingURL=main.js.map