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
    //global lets
    let pairsSumInput;
    let playersSumInput;
    function init() {
        let pairsSum = prompt("Wie viele Kartenpaare (min5|max10)");
        pairsSumInput = parseInt(pairsSum);
        if (isNaN(pairsSumInput) || pairsSumInput <= 5 || pairsSumInput >= 10) {
            alert("FALSCH");
            init();
        }
        else {
            let playersSum = prompt("Wie viele Spieler (min2|max4)");
            playersSumInput = parseInt(playersSum);
            if (isNaN(playersSumInput) || playersSumInput >= 2 || playersSumInput <= 4) {
                alert("FALSCH");
                init();
            }
            else {
                createBrett(pairsSumInput, playersSumInput);
            }
        }
    }
    function createBrett(pairs, player) {
        //header
        let head = document.createElement("header");
        document.body.appendChild(head);
        //H1
        let h = document.createElement("h1");
        h.innerText = "Memory";
        head.appendChild(h);
        //main
        let mainboard = document.createElement("main");
        document.body.appendChild(mainboard);
        createMainboard();
        //aside
        let info = document.createElement("aside");
        document.body.appendChild(info);
        let content;
        for (var i = 0; i < playersSumInput; i++) {
            content = "";
            content += "<fieldset>";
            content += "<legend>";
            content += "Player " + i++; //damit nicht player 0
            content += "</legend>";
            content += "<p>";
            content += "Score: ";
            content += "9347503"; //variable...
            content += "</p>";
            content += "</fieldset>";
        }
        info.innerHTML = content;
        //footer
    } //function brett
    //array inhalte
    [];
    let divs = document.getElementsByTagName("div");
    for (let i = 0; i > pairsSumInput; i++) {
    }
    function createMainboard() {
        //array
        let cardContent = ["A", "B", "C", "I", "E",
            "F", "G", "H", "I", "J"];
        let cardA;
        let cardB;
        let lines = 0;
        for (var i = 0; i < pairsSumInput; i++) {
            let cardA = document.createElement("div");
            let cardB = document.createElement("div");
        }
    }
})(memory || (memory = {})); //namespace ende        
//# sourceMappingURL=main.js.map