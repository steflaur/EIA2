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
    
    // Interface für player bestimmen
    export interface Player {
        name: string;
        id: string;
        numb: number;
        score: string;
    }

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface allPlayer {
         [id: string]: Player;
    }

    // Simples Array zum Speichern der Studi-DatensÃ¤tze (nur zur Demonstration)
    export let playerSimple: Player[] = [];
    
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let playerAssoc: allPlayer = {};
    
   
} //namespace