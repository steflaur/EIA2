namespace L04_Interfaces {
    window.addEventListener("load", init);

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
    let output: NodeListOf<HTMLTextAreaElement> = document.getElementsByTagName("textarea");

    function init(_event: Event): void {
        console.log("#call Init");

        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
                insertButton.addEventListener("click", insert);
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
                refreshButton.addEventListener("click", refresh);
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("searchButt");
               searchButton.addEventListener("click", search);

    }//init

    function insert(_event: Event): void {
        console.log("#call insert");

        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let selectOpt: HTMLSelectElement = <HTMLSelectElement>document.getElementById("select");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            studies: selectOpt.value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked
        };

        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);

        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;

        // nur um das auch noch zu zeigen...
        studiSimpleArray.push(studi);
    }//insert

    function refresh(_event: Event): void {
        console.log("#call refresh");

        output[0].value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in studiHomoAssoc) {  // Besonderheit: Type-Annotation nicht erlaubt, ergibt sich aus der Interface-Definition

            let studi: Studi = studiHomoAssoc[matrikel];
            let line: string = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.studies + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";

            output[0].value += line + "\n";
        }//for

        // zusätzliche Konsolenausgaben zur Demonstration
        console.group("Simple Array");
        console.log(studiSimpleArray);
        console.groupEnd();

        console.group("Associatives Array (Object)");
        console.log(studiHomoAssoc);
        console.groupEnd();
        
    }//function

    function search(_event: Event): void {
        console.log("#call search");

        output[1].value = "";
        let input: string = inputs[6].value;
        let studi: Studi = studiHomoAssoc[input];
        let line: string = "Zur Matrikelnumer " + input;

        if (studi) {
            line += " sind folgende Daten gespeichert:\n"
            line += studi.name + ", " + studi.firstname + ", " + studi.studies + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            console.log(studi);
        }
            else {
                line += " ist kein Datensatz gespeichert!";
                console.log(input + " invalide");
            }

        output[1].value += line + "\n";
        console.log("generate output txt.f2");

    }//function

}//namespace