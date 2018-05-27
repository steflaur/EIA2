declare namespace A4_Memory {
    interface Player {
        name: string;
        id: string;
        numb: number;
        score: string;
    }
    interface allPlayer {
        [id: string]: Player;
    }
    let playerSimple: Player[];
    let playerAssoc: allPlayer;
}
