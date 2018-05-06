/*
Aufgabe 4: Memory
Name: Laura Vogt
Matrikel: 254671
Datum: 06.Mai18
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A4;
(function (A4) {
    ;
    A4.decks = {};
    A4.deck = {
        deckName: "ABC",
        cardContent: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        cardColor: "blue",
        borderColor: "",
        fontColor: "",
        cardFont: "sans-serif",
        cardMax: 26,
        cardMin: 2
    };
    A4.decks["ABC"] = A4.deck;
    A4.deck = {
        deckName: "123",
        cardContent: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        cardColor: "green",
        borderColor: "",
        fontColor: "",
        cardFont: "sans-serif",
        cardMax: 10,
        cardMin: 2
    };
    A4.decks["123"] = A4.deck;
    A4.deck = {
        deckName: "flower",
        cardContent: ["Tulpe", "Lilie", "Rose", "Sonnenblume", "Calla", "Klatschmohn", "Orchidee", "Maiglöckchen", "Löwenmaul", "Christrose ", "Primel", "Hibiskus", "Edelweiß"],
        cardColor: "red",
        borderColor: "",
        fontColor: "",
        cardFont: "sans-serif",
        cardMax: 13,
        cardMin: 2
    };
    A4.decks["flower"] = A4.deck;
    A4.deck = {
        deckName: "sign",
        cardContent: ["cancer", "taurus", "gemini", "pisces", "aries", "libra", "aquarius", "capricorn", "scorpio", "virgo ", "sagittarius", "leo"],
        cardColor: "black",
        borderColor: "",
        fontColor: "white",
        cardFont: "sans-serif",
        cardMax: 12,
        cardMin: 2
    };
    A4.decks["sign"] = A4.deck;
})(A4 || (A4 = {}));
//# sourceMappingURL=decks.js.map