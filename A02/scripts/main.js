/*
Aufgabe 2: Memory
Name: Laura Vogt
Matrikel: 254671
Datum: 11Apr18
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Memory;
(function (Memory) {
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        let pairs = prompt("Wie viele Kartenpaare (min5|max10)");
        let pairsSum = parseInt(pairs);
        if (isNaN(pairsSum) || pairsSum < 5 || pairsSum > 10) {
            alert("FALSCH");
            init();
        }
        else {
            console.log("correct input");
            let player = prompt("Wie viele Spieler (min1|max4)");
            let playerSum = parseInt(player);
            if (isNaN(playerSum) || playerSum < 1 || playerSum > 4) {
                alert("FALSCH");
                init();
            }
            else {
                console.log("correct input");
                createGame(pairsSum, playerSum);
            }
        }
    } //init close
    function createGame(_pairs, _player) {
        //header
        let head = document.createElement("header");
        document.body.appendChild(head);
        console.log("load head");
        //H1
        let h = document.createElement("h1");
        h.innerText = "Memory";
        head.appendChild(h);
        console.log("create headline");
        createMainboard(_pairs);
        createAside(_player);
        createFooter();
    } //function game close
    function createMainboard(_pairs) {
        //main
        let mainboard = document.createElement("main");
        document.body.appendChild(mainboard);
        console.log("load main");
        //kompletter Kontent
        let cardContent = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        console.log("total content " + cardContent);
        //neues array aus content in passender anzahl
        let cardContentNeeded = cardContent.slice(0, _pairs);
        console.log("needed content " + cardContentNeeded);
        //call doubleArray
        doubleArray(cardContent, cardContentNeeded, _pairs);
        console.log("doubled | needed content " + cardContentNeeded);
        //shuffle
        cardContentNeeded.sort(function () { return 0.5 - Math.random(); });
        console.log("doubled | needed | randomized content " + cardContentNeeded);
        console.log(cardContentNeeded.length);
        //create Card WARUUUUUUUUUM
        for (let i = 0; i > (cardContentNeeded.length - 1); i++) {
            console.log("createCard()");
        }
        console.log(cardContentNeeded.length);
    } //create Main close
    function doubleArray(_cardContent, _cardContentNeeded, _pairs) {
        let i = 0; //counter
        //let n: number = 0; //orderer
        while (i < _pairs) {
            _cardContentNeeded.splice(0, 0, (_cardContent[i]));
            console.log("Kartenpaar " + (i + 1) + ": " + _cardContent[i] + " & " + _cardContent[i]);
            i++;
        } //while
    } //double Array
    function createCard() {
        console.log("callCard");
    }
    function createAside(_player) {
        //aside
        let info = document.createElement("aside");
        document.body.appendChild(info);
        console.log("load aside");
    } //create Aside close 
    function createFooter() {
        //footer
        let footer = document.createElement("footer");
        document.body.appendChild(footer);
        console.log("load footer");
    } //create Footer close    
})(Memory || (Memory = {})); //namespace ende        
//# sourceMappingURL=main.js.map