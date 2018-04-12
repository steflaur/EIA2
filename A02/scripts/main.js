/*
Aufgabe 2: Memory
Name: Laura Vogt
Matrikel: 254671
Datum: 11Apr18
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var memory;
(function (memory) {
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        let pairs = prompt("Wie viele Kartenpaare (min5|max10)");
        let pairsSum = parseInt(pairs);
        if (isNaN(pairsSum) || pairsSum < 5 || pairsSum > 10) {
            alert("FALSCH");
            init();
        }
        else {
            let player = prompt("Wie viele Spieler (min1|max4)");
            let playerSum = parseInt(player);
            if (isNaN(playerSum) || playerSum < 1 || playerSum > 4) {
                alert("FALSCH");
                init();
            }
            else {
                createGame(pairsSum, playerSum);
            }
        }
    } //init close
    function createGame(_pairs, _player) {
        //header
        let head = document.createElement("header");
        document.body.appendChild(head);
        //H1
        let h = document.createElement("h1");
        h.innerText = "Memory";
        head.appendChild(h);
        createMainboard(_pairs);
        createAside(_player);
        createFooter();
    } //function game close
    function createMainboard(_pairs) {
        //main
        let mainboard = document.createElement("main");
        document.body.appendChild(mainboard);
        let cardContent = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        let cardContentNeeded = [];
        //werte verdoppeln und in neues array speichern
        for (let i = 0; i >= _pairs; i++) {
            let transferElement = cardContent[i];
            cardContentNeeded.push(transferElement);
            cardContentNeeded.push(transferElement);
        } //for close
        console.log(cardContentNeeded);
        for (let i = 0; i >= _pairs * 2; i++) {
            let min = 0;
            let max = cardContentNeeded.length;
            let zufall = Math.random() * (max - min) + min;
            let content = cardContentNeeded[zufall];
            createCard(content);
        } //for close
    } //create Main close
    function createCard(_content) {
        console.log(_content);
    }
    function createAside(_player) {
        //aside
        let info = document.createElement("aside");
        document.body.appendChild(info);
    } //create Aside close 
    function createFooter() {
        //footer
        let footer = document.createElement("footer");
        document.body.appendChild(footer);
    } //create Footer close    
})(memory || (memory = {})); //namespace ende        
//# sourceMappingURL=main.js.map