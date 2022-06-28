var course = document.getElementById("course");
var game = document.getElementById("game");
var end = document.getElementById("end");
var points = 0;
var acurrentPoints = 0;
var currentPositioninCourse = null;
var numberSentencesActive = 0;
var gemishterSpanischerSatz;
var saetzePars = [
    {
        satzDeutsch: 'ich heiße Emily'.split(''),
        satzSpanisch: 'Holla me Ilamo Emily'.split(''),
    },
    {
        satzDeutsch: 'ich liebe Katzen'.split(''),
        satzSpanisch: 'Holla me gustoan los Gatos'.split(''),
    },
    {
        satzDeutsch: 'Liebe Bewohner von Bikini Bottom'.split(''),
        satzSpanisch: 'Estimados residentes de Fondo de Bikini Bottom'.split(''),
    },
    {
        satzDeutsch: 'man hat Sie alle'.split(''),
        satzSpanisch: 'uno los tiene todos'.split(''),
    },
    {
        satzDeutsch: 'belogen und betrogen'.split(''),
        satzSpanisch: 'mintió y engañó'.split(''),
    },
    {
        satzDeutsch: 'die Arbeiterschaft darf nicht'.split(''),
        satzSpanisch: 'la mano de obra no puede'.split(''),
    },
    {
        satzDeutsch: 'unter der unersättlichen gier'.split(''),
        satzSpanisch: 'bajo la codicia insaciable'.split(''),
    },
    {
        satzDeutsch: 'von Mr Krabs leiden'.split(''),
        satzSpanisch: 'sufrir de Don Cangrejo'.split(''),
    },
    {
        satzDeutsch: 'ich werde der vereinigten'.split(''),
        satzSpanisch: 'me convierto en el unido'.split(''),
    },
    {
        satzDeutsch: 'Arbeiterschaft ihre würde zurückgeben'.split(''),
        satzSpanisch: 'mano de obra su dignidad devolver'.split(''),
    },
    {
        satzDeutsch: 'ich werde ihre Brutstätte'.split(''),
        satzSpanisch: 'Me convierto en su caldo de cultivo'.split(''),
    },
    {
        satzDeutsch: 'der Ausbeutung niederreißen'.split(''),
        satzSpanisch: 'de explotación demoler'.split(''),
    },
    {
        satzDeutsch: 'balken für balken'.split(''),
        satzSpanisch: 'haz por haz'.split(''),
    },
    {
        satzDeutsch: 'wir werden das großkapital in '.split(''),
        satzSpanisch: 'seremos el gran capital en'.split(''),
    },
    {
        satzDeutsch: 'seinen grundfesten erschütern'.split(''),
        satzSpanisch: 'sacudir mismos cimientos'.split(''),
    },
];
function schuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var m = Math.floor(Math.random() * (i + 1));
        [array[i], array[m] = [array[m], array[i]]];
    }
}
schuffleArray(saetzePars);
game.classList.add("hidden");
end.classList.add("hidden");
document.getElementById("easy").onclick = function () {
    numberSentencesActive = 5;
    course.classList.add("hidden");
    game.classList.remove("hidden");
    newSentence();
};
document.getElementById("medium").onclick = function () {
    numberSentencesActive = 10;
    course.classList.add("hidden");
    game.classList.remove("hidden");
    newSentence();
};
document.getElementById("hard").onclick = function () {
    numberSentencesActive = 10;
    course.classList.add("hidden");
    game.classList.remove("hiiden");
    newSentence();
};
function newSentence() {
    document.getElementById("deutscherSatz").innerHTML = "";
    document.getElementById("spanischerSatz").innerHTML = "";
    document.getElementById("wörterSpanischAuswahl").innerHTML = "";
    if (currentPositioninCourse == null)
        currentPositioninCourse = 0;
    else
        currentPositioninCourse = currentPositioninCourse + 1;
    document.getElementById("deutscherSatz").innerHTML = saetzePars[currentPositioninCourse].satzDeutsch.join("");
    var Spain = [...saetzePars[currentPositioninCourse].satzSpanisch];
    schuffleArray(Spain);
    gemishterSpanischerSatz = Spain;
    for (var i = 0; i < Spain.length; i++) {
        let word = document.createElement("span");
        word.onclick = function () {
            wordClick(word.innerHTML);
        };
        word.innerHTML = Spain[i];
        document.getElementById("currentPositioninCourse").appendChild(word);
    }
    document.getElementById("currentPositioninCourse").innerHTML = currentPositioninCourse + "/" + numberSentencesActive;
    if (currentPositioninCourse == numberSentencesActive) {
        game.classList.add("hidden");
        end.classList.remove("hidden");
        document.getElementById("courseEnd").innerHTML = points + "currentPoints";
    }
}
function wordClick(word) {
    var rigthWords = document.getElementById("wörterSpanischAuswahl").childElementCount;
    if (word == saetzePars[currentPositioninCourse].satzSpanisch[rigthWords]) {
        var span = document.createElement("span");
        span.innerHTML = word;
        document.getElementById("wörterSpanischAuswahl").appendChild(span);
        points = points + 1;
        for (var i = 0; i < gemishterSpanischerSatz.length; i++) {
            if (gemishterSpanischerSatz[i] == word) {
                gemishterSpanischerSatz.splice(i, 1);
            }
        }
        document.getElementById("spanischerSatz").innerHTML = "";
        for (var i = 0; i < gemishterSpanischerSatz.length; i++) {
            let word = document.createElement("span");
            word.innerHTML = gemishterSpanischerSatz[i];
            word.onclick = function () {
                wordClick(word.innerHTML);
            };
            document.getElementById("spanischerSatz").appendChild(word);
        }
        if (rigthWords === saetzePars[currentPositioninCourse].satzSpanisch.length - 1)
            newSentence();
    }
    else {
        alert("Wrong Word");
        if (points > 0)
            points = points - 1;
    }
    document.getElementById("currentPoints").innerHTML = points + "cuttentPoints";
}
//jaa so Isses
//# sourceMappingURL=course.js.map