/*
Aufgabe 00: Miniseite
Name: Laura Vogt
Matrikel: 256056
Datum: 22.Mrz18

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
function Greeter() {
    let name = prompt("Wer klopft?", "knockknock");
    let text = document.getElementById("txt").innerHTML;
    if (name == null || name == "knockknock") {
        text = "Schade!";
    } //if close
    else {
        text = "Hallo " + name + "! Wie geht es dir?";
    } //else close
    document.getElementById("txt").innerHTML = text;
} //funktion close
//# sourceMappingURL=main.js.map