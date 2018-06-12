/*
Aufgabe 09: Canvas
Name: Laura Vogt
Matrikel: 256056
Datum:

Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A09_canvas;
(function (A09_canvas) {
    window.addEventListener("load", init);
    function init() {
        console.log("#call init");
        let canvas = document.getElementsByTagName("canvas")[0];
        let ctx = canvas.getContext("2d");
        console.log("CanvasRendering2d active");
    } //close init
})(A09_canvas || (A09_canvas = {})); //close namespace
//# sourceMappingURL=main.js.map