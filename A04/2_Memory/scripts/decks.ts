/* 
Aufgabe 4: Memory
Name: Laura Vogt
Matrikel: 254671
Datum: 06.Mai18
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace A4_Memory {
    // Interface einer Karte bestimmen
    export interface CardDeck {
        deckName: string;
        cardContent: string[];
        cardColor: string;
        borderColor: string;
        fontColor: string;
        cardFont: string;

        cardMax: number;
        cardMin: number;
    }

    export let deck: CardDeck;

    export interface CardDecks {
        [deckName: string]: CardDeck;
    };

    export let decks: CardDecks = {};
    deck = {
        deckName: "ABC",
        cardContent: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        cardColor: "blue",
        borderColor: "",
        fontColor: "",
        cardFont: "sans-serif",
        cardMax: 26,
        cardMin: 2
    };
    decks["ABC"] = deck;

    deck = {
        deckName: "123",
        cardContent: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
        cardColor: "green",
        borderColor: "",
        fontColor: "",
        cardFont: "sans-serif",
        cardMax: 10,
        cardMin: 2
    };
    decks["123"] = deck;

    deck = {
        deckName: "flower",
        cardContent: ["Tulpe", "Lilie", "Rose", "Sonnenblume", "Calla", "Klatschmohn", "Orchidee", "MaiglÃ¶ckchen", "LÃ¶wenmaul", "Christrose ", "Primel", "Hibiskus", "EdelweiÃŸ"],
        cardColor: "red",
        borderColor: "",
        fontColor: "",
        cardFont: "sans-serif",
        cardMax: 13,
        cardMin: 2
    };
    decks["flower"] = deck;

    deck = {
        deckName: "sign",
        cardContent: ["cancer", "taurus", "gemini", "pisces", "aries", "libra", "aquarius", "capricorn", "scorpio", "virgo ", "sagittarius", "leo"],
        cardColor: "black",
        borderColor: "",
        fontColor: "white",
        cardFont: "sans-serif",
        cardMax: 12,
        cardMin: 2
    };
    decks["sign"] = deck;

    
    
    
} //namespace