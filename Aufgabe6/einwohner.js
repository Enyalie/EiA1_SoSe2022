const eu2022 = 750832535;
const fr2010 = 65000000;
const fr2022 = 65790152;
let verhältnisFR = (fr2022 / eu2022) * 100.0;
let wachstumFR = (fr2022 - fr2010) / fr2010 * 100.0;
let wachstumFRges = (fr2022 - fr2010);
console.log("[FR] Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022: " + fr2022 + " Mio.");
console.log("[FR] Im Verhältnis zur Gesamtzahl in der EU: " + verhältnisFR.toFixed(2) + "%");
console.log("[FR] Wachstumsrate in Frankreich seit 2010: " + wachstumFR.toFixed(2) + "%");
console.log("[FR] Wachstumsrate gesamt in Frankreich seit 2010: " + wachstumFRges + " Mio.");
const it2010 = 59000000;
const it2022 = 60591668;
let verhältnisIT = (it2022 / eu2022) * 100.0;
let wachstumIT = (it2022 - it2010) / it2010 * 100.0;
let wachstumITges = (it2022 - it2010);
console.log("[IT] Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022: " + it2022 + " Mio.");
console.log("[IT] Im Verhältnis zur Gesamtzahl in der EU: " + verhältnisIT.toFixed(2) + "%");
console.log("[IT] Wachstumsrate in Italien seit 2010 : " + wachstumIT.toFixed(2) + "%");
console.log("[IT] Wachstumsrate gesamt in Italien seit 2010: " + wachstumITges + " Mio.");
const de2010 = 81000000;
const de2022 = 83756658;
let verhältnisDE = (de2022 / eu2022) * 100.0;
let wachstumDE = (de2022 - de2010) / de2010 * 100.0;
let wachstumDEges = (de2022 - de2010);
console.log("[DE] Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022: " + de2022 + " Mio.");
console.log("[DE] Im Verhältnis zur Gesamtzahl in der EU: " + verhältnisDE.toFixed(2) + "%");
console.log("[DE] Wachstumsrate in Deutschland seit 2010: " + wachstumDE.toFixed(2) + "%");
console.log("[DE] Wachstumsrate gesamt in Deutschland seit 2010: " + wachstumDEges + " Mio.");
const schw2010 = 7825000;
const schw2022 = 8824554;
let verhältnisSCHW = (schw2022 / eu2022) * 100.0;
let wachstumSCHW = (schw2022 - schw2010) / schw2010 * 100.0;
let wachstumSCHWges = (schw2022 - schw2010);
console.log("[SCHW] Gesamtzahl Einwohnerinnen und Einwohner in der Schweiz in 2022: " + schw2022 + " Mio.");
console.log("[SCHW] Im Verhältnis zur Gesamtzahl in der EU: " + verhältnisSCHW.toFixed(2) + "%");
console.log("[SCHW] Wachstumsrate in der Schweiz seit 2010 : " + wachstumSCHW.toFixed(2) + "%");
console.log("[SCHW] Wachstumsrate gesamt in der Schweiz seit 2010: " + wachstumSCHWges + " Mio.");
//# sourceMappingURL=einwohner.js.map