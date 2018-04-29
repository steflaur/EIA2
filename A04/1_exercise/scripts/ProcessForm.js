var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    let inputs = document.getElementsByTagName("input");
    let output = document.getElementsByTagName("textarea");
    function init(_event) {
        console.log("#call Init");
        let insertButton = document.getElementById("insert");
        insertButton.addEventListener("click", insert);
        let refreshButton = document.getElementById("refresh");
        refreshButton.addEventListener("click", refresh);
        let searchButton = document.getElementById("searchButt");
        searchButton.addEventListener("click", search);
    } //init
    function insert(_event) {
        console.log("#call insert");
        let genderButton = document.getElementById("male");
        let selectOpt = document.getElementById("select");
        let matrikel = inputs[2].value;
        let studi;
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
        L04_Interfaces.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        L04_Interfaces.studiSimpleArray.push(studi);
    } //insert
    function refresh(_event) {
        console.log("#call refresh");
        output[0].value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in L04_Interfaces.studiHomoAssoc) {
            let studi = L04_Interfaces.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.studies + ", " + studi.age + " Jahre ";
            line += studi.gender ? "(M)" : "(F)";
            output[0].value += line + "\n";
        } //for
        // zusätzliche Konsolenausgaben zur Demonstration
        console.group("Simple Array");
        console.log(L04_Interfaces.studiSimpleArray);
        console.groupEnd();
        console.group("Associatives Array (Object)");
        console.log(L04_Interfaces.studiHomoAssoc);
        console.groupEnd();
    } //function
    function search(_event) {
        console.log("#call search");
        output[1].value = "";
        let input = inputs[6].value;
        let studi = L04_Interfaces.studiHomoAssoc[input];
        let line = "Zur Matrikelnumer " + input;
        if (studi) {
            line += " sind folgende Daten gespeichert:\n";
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
    } //function
})(L04_Interfaces || (L04_Interfaces = {})); //namespace
//# sourceMappingURL=ProcessForm.js.map