declare namespace A4_Memory {
    interface CardDeck {
        deckName: string;
        cardContent: string[];
        cardColor: string;
        borderColor: string;
        fontColor: string;
        cardFont: string;
        cardMax: number;
        cardMin: number;
    }
    let deck: CardDeck;
    interface CardDecks {
        [deckName: string]: CardDeck;
    }
    let decks: CardDecks;
}
