namespace Aufgabe89{
// click listener anlegen, sobald die Seite geladen wurde
window.addEventListener("load", addClickListenersDrumpad);

// funktion spielt Ton von der gegebenen Sound-Quelle ab
// soundQuelle ist der Pfad zur Sound-Datei
function play(soundQuelle: string): void {
  var sound: HTMLAudioElement = new Audio(soundQuelle);
  sound.play()
}

// Funktion fügt den Buttons ihre Click listener hinzu
function addClickListenersDrumpad(): void {
    //töne
    document.querySelector("#button1").addEventListener("click", function (): void { soundClick("assets/A.mp3")});
    document.querySelector("#button2").addEventListener("click", function (): void { soundClick("assets/C.mp3"); });
    document.querySelector("#button3").addEventListener("click", function (): void { soundClick("assets/F.mp3"); });
    document.querySelector("#button4").addEventListener("click", function (): void { soundClick("assets/G.mp3"); });
    document.querySelector("#button5").addEventListener("click", function (): void { soundClick("assets/hihat.mp3"); });
    document.querySelector("#button6").addEventListener("click", function (): void { soundClick("assets/laugh-1.mp3"); });
    document.querySelector("#button7").addEventListener("click", function (): void { soundClick("assets/laugh-2.mp3"); });
    document.querySelector("#button8").addEventListener("click", function (): void { soundClick("assets/snare.mp3"); });
    document.querySelector("#button9").addEventListener("click", function (): void { soundClick("assets/kick.mp3"); });
    //funktionen
    document.querySelector(".play").addEventListener("click", function (): void { playClick(); });
    document.querySelector(".shuffle").addEventListener("click", function (): void { remix(); });
    document.querySelector(".delete").addEventListener("click", function (): void { beatLoeschen(); });
    document.querySelector(".record").addEventListener("click", function (): void { recordClick(); });
}

// Liste mit den Beat-Tönen, die abgespiel werden wenn der Beat abgespielt wird
var toeneBeat: string[] = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3"];

// Liste mit allen verfügbaren Tönen
var alleToene: string[] = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/F.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/leer.mp3"];

// Indikator ob der beat aktuell abgespielt wird oder nicht
var playing: boolean = false;

// Indikator ob der Aufnahmemodus aktiv ist
var aufnahmeAktiv: boolean = false;

// Variable in die die Interval-ID abgelegt wirdbeim spielen des beats
var intervalId: number;

//Funktion die ausgeführt wird, wenn einer der Sound-Buttons geklickt wird
// soundQuelle ist der Pfad zur Sound-Datei
function soundClick(soundQuelle: string): void {
    play(soundQuelle);

    // prüfen ob Aufnahmemodus aktiv ist
    if (aufnahmeAktiv) {
        toeneBeat.push(soundQuelle);
    }
}

//Funktion die ausgeführt wird, wenn Stop Button geklickt wird
function playClick(): void {
    if (playing === false) {
        startBeat();
    } else {
        stopBeat();
    }
}

// Abspielen des Beats starten und aus Play-Button einen Stop-Button machen
function startBeat(): void {
    // Aufnahmemodus beenden, wenn dieser aktiv sein sollte
    if (aufnahmeAktiv === true) {
        stopAufnahme();
    }
    playing = true;
    var zaehler: number = 0;

    // Interval anlegen damit alle 500ms ein Ton aus der Liste abgespielt wird
    intervalId = setInterval(function (): void {
        play(toeneBeat[zaehler]);
        zaehler = zaehler + 1;
        if (zaehler === toeneBeat.length) {
            zaehler = 0;
        }
    },                       500);

    // aus play button stop button machen
    // fa-play Klasse entfernen
    document.querySelector(".play i").classList.remove("fa-play");
    // fa-stop Klasse hinzufügen
    document.querySelector(".play i").classList.add("fa-stop");
}

// Abspielen des Beats stoppen und aus Stop-Button einen Play-Button machen
function stopBeat(): void {
    document.querySelector(".play i").classList.add("fa-play");
    document.querySelector(".play i").classList.remove("fa-stop");
    clearInterval(intervalId);
    // Indikator, dass der Beat abgespielt wird, wird auf "false" gesetzt
    playing = false;
}

//Remix erstellen
function remix(): void {
    console.log("remix");
    toeneBeat = [];
    var i: number = 0;
    var toeneTotal: number = 3;
    while (i < toeneTotal) {
        var item: string = alleToene[Math.floor(Math.random() * alleToene.length)];
        toeneBeat.push(item);
        i = i + 1;
    }
}

//Beat löschen
function beatLoeschen(): void {
    toeneBeat = [];
}

function recordClick(): void {
    // prüfen ob aufnahmemodus aktiv ist
    if (aufnahmeAktiv === true) {
        // wenn aufnahmemodus aktiv ist, wird dieser gestoppt
        stopAufnahme();
    } else {
        // Wenn Aufnahmemodus nicht aktiv, wird dieser gestartet
        startAufnahme();
    }
}

//Aufnahmemodus starten
function startAufnahme(): void {
    //alten beat löschen
    beatLoeschen();
    // aktuellen beat stoppen
    if (playing === true) {
        stopBeat();
    }
    aufnahmeAktiv = true;
    document.querySelector(".record i").classList.add("record-active");
}

// Aufanhmemodus stoppen
function stopAufnahme(): void {
    aufnahmeAktiv = false;
    document.querySelector(".record i").classList.remove("record-active");
}
}