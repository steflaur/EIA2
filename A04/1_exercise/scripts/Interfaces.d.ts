declare namespace L04_Interfaces {
    interface Studi {
        name: string;
        firstname: string;
        studies: string;
        matrikel: number;
        age: number;
        gender: boolean;
    }
    interface Studis {
        [matrikel: string]: Studi;
    }
    let studiSimpleArray: Studi[];
    let studiHomoAssoc: Studis;
}
