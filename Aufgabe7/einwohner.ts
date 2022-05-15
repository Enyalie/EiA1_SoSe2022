namespace Aufgabe7 {
    const land1: string = "Deutschland";
    const de2010 : number = 81000000;
    const de2022 : number = 83756658;
    const land2: string = "Frankreich";
    const fr2010 : number= 65000000;
    const fr2022 : number= 65790152;
    const land3: string = "Italien";
    const it2010 : number = 59000000;
    const it2022 : number = 60591668;
    const land4: string = "Schweiz";
    const schw2010 : number = 7825000;
    const schw2022 : number = 8824554;
    const eu5: string = "EU";
    const eu2021: number = 447000001;      //letztes aktuelles ergebniss(https://de.statista.com/statistik/daten/studie/14035/umfrage/europaeische-union-bevoelkerung-einwohner/)
    const eu2010: number = 440000066;
    const jahr: number = 2022;
    const europa5: string = "Europa";
    const europa2022: number = 750832535;
    
    function gesamtzahl(land: string, land2022: number): void {
        console.log("Gesamtzahl Einwohneris in " + land + " " + jahr + ": " + land2022 + " Mio.");
    }

    gesamtzahl(land1, de2022);
    gesamtzahl(land2, fr2022);
    gesamtzahl(land3, it2022);
    gesamtzahl(land4, schw2022);
    gesamtzahl(eu5, eu2021);

    function anteilEu2022(land: string, jahr: number, land2022: number): void {
        const ersteBerechnung: number = land2022 / eu2021 * 100;
        console.log("Im Verhältnis zur Gesamtzahl in der EU " + " in " + land + jahr + ": " + ersteBerechnung + " %");
    }

    anteilEu2022(land1, jahr, de2022);
    anteilEu2022(land2, jahr, fr2022);
    anteilEu2022(land3, jahr, it2022);
    anteilEu2022(land4, jahr, schw2022);

    function anteilEuropa2022(land: string, jahr: number, europa2022: number): void {
        const euBerechnung: number = eu2021 / europa2022 * 100;
        console.log("Im Verhältnis zur Gesamtzahl in der EU " + " in " + europa5 + jahr + ": " + euBerechnung + " %");
    }

    anteilEuropa2022(eu5, jahr, europa2022);

    function wachstum(land: string, land2022: number, land2008: number): void {
        const zweiteBerechnung: number = land2022 - land2008;
        const drittteBerechnung: number = zweiteBerechnung / land2022 * 100;
        console.log("Wachstumsrate in " + land + " seit 2008: " + drittteBerechnung + " %");
    }

    wachstum(land1, de2022, de2010);
    wachstum(land2, fr2022, fr2010);
    wachstum(land3, it2022, it2010);
    wachstum(land4, schw2022, schw2010);
    wachstum(eu5, eu2021, eu2010);

    function wachstumGesamt(land: string, land2022: number, land2008: number): void {
        const zweiteBerechnung: number = land2022 - land2008;
        console.log("Wachstumsrate gesamt in " + land + " zwischen 2008 und 2022: " + zweiteBerechnung + " Mio.");
    }

    wachstumGesamt(land1, de2022, de2010);
    wachstumGesamt(land2, fr2022, fr2010);
    wachstumGesamt(land3, it2022, it2010);
    wachstumGesamt(land4, schw2022, schw2010);
    wachstumGesamt(eu5, eu2021, eu2010);

    document.querySelector("#deutschland")
        .addEventListener("click", function (): void {
            document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Deutschland";
            document.querySelector(".gesamtzahlEinwohneris").innerHTML = "" + ((de2022)) + " Mio.";
            document.querySelector(".text").innerHTML = "Gesamtzahl Einwohneris in Deutschland 2022";
            document.querySelector(".verhältnisZurGesamtzahl").innerHTML = "" + ((de2022 / eu2021 * 100)).toFixed(2) + "%";
            document.querySelector(".wachstumsrateProzent").innerHTML = "" + ((de2022 - de2010) / de2022 * 100).toFixed(2) + "%";
            document.querySelector(".wachstumsrateZahl").innerHTML = "" + ((de2022 - de2010)).toFixed(2) + " Mio.";
            document.querySelector(".chart").setAttribute("style", "height: " +  (de2022 / eu2021 * 100) + "%");
        });

    document.querySelector("#frankreich")
        .addEventListener("click", function (): void {
            document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Frankreich";
            document.querySelector(".gesamtzahlEinwohneris").innerHTML = "" + ((fr2022)) + " Mio.";
            document.querySelector(".text").innerHTML = "Gesamtzahl Einwohneris in Frankreich 2022";
            document.querySelector(".verhätlnisZurGesamtzahl").innerHTML = "" + ((fr2022 / eu2021 * 100)).toFixed(2) + "%";
            document.querySelector(".wachstumsrateProzent").innerHTML = "" + ((fr2022 - fr2010) / fr2022 * 100).toFixed(2) + "%";
            document.querySelector(".wachstumsrateZahl").innerHTML = "" + ((fr2022 - fr2010)).toFixed(2) + " Mio.";
            document.querySelector(".chart").setAttribute("style", "height: " +  (fr2022 / eu2021 * 100) + "%");
        });

    document.querySelector("#italien")
        .addEventListener("click", function (): void {
            document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Italien";
            document.querySelector(".gesamtzahlEinwohneris").innerHTML = "" + ((it2022)) + " Mio.";
            document.querySelector(".text").innerHTML = "Gesamtzahl Einwohneris in Italien 2022";
            document.querySelector(".verhätlnisZurGesamtzahl").innerHTML = "" + ((it2022 / eu2021 * 100)).toFixed(2) + "%";
            document.querySelector(".wachstumsrateProzent").innerHTML = "" + ((it2022 - it2010) / it2022 * 100).toFixed(2) + "%";
            document.querySelector(".wachstumsrateZahl").innerHTML = "" + ((it2022 - it2010)).toFixed(2) + " Mio.";
            document.querySelector(".chart").setAttribute("style", "height: " +  (it2022 / eu2021 * 100) + "%");
        });

    document.querySelector("#luxemburg")//weil Schweiz nicht zur Auswahl steht, ich aber zu dumm war das letztes mal zu begreifen:)
        .addEventListener("click", function (): void {
            document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in der Schweiz";
            document.querySelector(".gesamtzahlEinwohneris").innerHTML = "" + ((schw2022)) + " Mio.";
            document.querySelector(".text").innerHTML = "Gesamtzahl Einwohneris in der Schweiz 2022";
            document.querySelector(".verhätlnisZurGesamtzahl").innerHTML = "" + ((schw2022 / eu2021 * 100)).toFixed(2) + "%";
            document.querySelector(".wachstumsrateProzent").innerHTML = "" + ((schw2022 - schw2010) / schw2022 * 100).toFixed(2) + "%";
            document.querySelector(".wachstumsrateZahl").innerHTML = "" + ((schw2022 - schw2010)).toFixed(2) + " Mio.";
            document.querySelector(".chart").setAttribute("style", "height: " +  (schw2022 / eu2021 * 100) + "%");
        });

    document.querySelector("#eurosterne")
        .addEventListener("click", function (): void {
            document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in der europäischen Union";
            document.querySelector(".gesamtzahlEinwohneris").innerHTML = "" + ((eu2021)) + " Mio.";
            document.querySelector(".text").innerHTML = "Gesamtzahl Einwohneris in der europäischen Union 2022";
            document.querySelector(".text2").innerHTML = "Relativ zur Gesamtzahl in Europa";
            document.querySelector(".verhätlnisZurGesamtzahl").innerHTML = "" + ((eu2021 / europa2022 * 100)).toFixed(2) + "%";
            document.querySelector(".wachstumsrateProzent").innerHTML = "" + ((eu2021 - eu2010) / eu2021 * 100).toFixed(2) + "%";
            document.querySelector(".wachstumsrateZahl").innerHTML = "" + ((eu2021 - eu2010)).toFixed(2) + " Mio.";
            document.querySelector(".chart").setAttribute("style", "height: " +  (eu2021 / europa2022 * 100) + "%");
        });
}