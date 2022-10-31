// Vordefinierte Objekte
// string
// arrays
// Math
// Date

// strings
// Ist an sich eine Sonderform des Arrays
// Ist eine aneinanderreihung(array) von Buchstaben/Zeichen

let testString = "Ich bin ein Teststring";

// Eigenschaften/Properties:
testString.length; // => Die Anzahl der Zeichen die im String enthalten sind
console.log(testString.length);

// WIe spreche ich einzelne Buchstaben eines Strings an?
// Wir können dafür die s.g. Bracket-Notation benutzen
// testString[index]
// Gibt uns den Buchstaben an der entsprechenden Stelle des Strings zurück
testString[0]; // => I
// letzte Stelle des Strings:
testString[testString.length - 1];
testString[21]; // => g
// String Indizes fangen bei 0 an zu zählen und enden bei length - 1

// Methoden des Stringobjektes
// idetifier.toUpperCase()
// identifier.toLowerCase()
// Gibt den String komplett groß oder kleingeschrieben zurück
// Verändert den bestehenden String nicht

// identifier.slice(startpunkt, ?ende);
// Es wird ein neuer String zurückgegeben der bei index Startpunkt beginnt und 1 Stelle vor Ende endet
// Wenn ende nicht übergeben wird, wird der String vom Startpunkt bis zum endes des strings zurückgegeben
// Wenn weder start noch ende definiert werden, wird der String komplett zurückgegeben
let part1String = testString.slice(0, 12);
// part1String besteht aus den Zeichen von testString[0] bis testString[11];
let part2String = testString.slice(12);
//part2String besteht aus den Zeichen von testString[12] geht bis zum ende des testStrings
let part3String = testString.slice();
// Enthält den kompletten Inhalt von testString

// identifier.split(?Seperator)
// Trennt den String in ein Array, wobei jeweils beim Seperator getrennt wird und der Seperator selbst ist nicht im Array enthalten
// Wenn kein seperator übergeben wird, wird der gesamte String als ein Array Element zurückgegeben
// Verändert den originalen String nicht
let stringArr = testString.split(" ");
stringArr = testString.split("i");

// identifier.charCodeAt(index)
// Gibt uns den Unicode-Wert des Buchstabens an Indexstelle index zurück
let unicodeC = testString.charCodeAt(1);

// identifier.charAt(index);
// Gibt uns den Buchstaben an der Stelle zurück

// identifier.indexOf(suchbegriff, ?starposition)
// identifier.lastIndexOf(suchbegriff, ?startposition)
// indexOf gibt die erste gefundene Indexstelle des suchbegriffes zurück
// lastIndexOf() gibt die letzte gefunden Stelle zurück
// Falls der suchbegriff nicht enthalten ist geben beide -1 zurück

// Wir wollen eine Funktion schrieben, die einen String als Parameter erhält und uns in der Konsole ausgibt wie viele klein und großbuchstaben in dem String enthalten sind
// Bsp: "Ich" => "Groß: 1 | Klein: 2"


function countCase(inputString) {
    let countLower = 0;
    let countUpper = 0;
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char.toUpperCase() === char.toLowerCase())
            continue;
        else if (char.toUpperCase() === char) {
            countUpper++;
        }
        else {
            countLower++;
        }
    }
    console.log(`Groß: ${countUpper} | Klein: ${countLower}`)
}

function countCaseAlt(inputString) {
    let countLower = 0;
    let countUpper = 0;
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (char.toUpperCase() !== char.toLowerCase()) {
            if (char.toUpperCase() === char) {
                countUpper++;
            }
            else {
                countLower++;
            }
        }

    }
    console.log(`Groß: ${countUpper} | Klein: ${countLower}`)
}

// Array
// Sammlung von mehreren Werten innerhalb einer Variable
// Können mit dem array literal oder mit dem Constructor arbeiten
// Können verschiedene Datentypen halten

// array literal
let literalArr = [1, 2, 3, "Werte", true, [1, 5, 10]]; // Bsp. für ein zweidimensionales Array

// Constructor
let constructedArr = new Array(1, 2, 3, 4, 5, 6);

// Ansprechen einzelner Elemente über die Bracket-Notation
console.log(literalArr[5]); // => [1, 5, 10]
console.log(literalArr[5][2]); // => 10
console.log(constructedArr[5]); // => 6

// Auch das Array verüfgt über ein prop
console.log(literalArr.length); // => 6
console.log(literalArr[5].length); // => 3

// Können Werte eines Arrays neuzuweisen
literalArr[0] = 40;
console.log(literalArr[0]); // => 40 
literalArr[0] = "Hallo";
console.log(literalArr[0]); // => "Hallo"

// Methoden des Array Objekts

// Zusammenfügen von Arrays

// arrayIdentifier.concat(arr2, arr3, ...);

let concatArr = literalArr.concat(constructedArr, literalArr[5]);
console.log(concatArr);
console.log(concatArr.length);

// arr.indexOf(Suchwert, ?Start)
// arr.lastIndexOf(Suchwert, ?Start)
// Nicht geeignet für Objekte 

let objectArr = [{ "name": "Test", "age": 20 }, { "name": "Test", "age": 15 }];
let testObj = { "name": "Test", "age": 20 }; // => -1
console.log(objectArr.indexOf({ "name": "Test", "age": 20 })); // -1

console.log(objectArr.findIndex(object => {
    return object.name === "Test" && object.age === 15;
}))

// Für Objekte:
// arr.findIndex(function)
// Am einfachsten mit lambdas
// Iteriert über jedes Element im Array
// https://bobbyhadz.com/blog/javascript-array-find-index-of-object-by-property

console.log(objectArr.findIndex(object => {
    return object.name === "Test" && object.age === 15;
}));

// arr.join(seperator)
// Gibt uns einen neuen String zurück der aus den Array Elementen getrennt vom Seperator besteht
// Falls wir keinen Seperator übergeben wird ein , benutzt
console.log(concatArr.join(" "));

// arr.reverse()
// Dreht die reihenfolge des Arrays um
//! Verändert das bestehende Array
literalArr.reverse()
console.log(literalArr);

// arr.sort(?function)
// Sortiert das Array anhand der Funktion
//! Verändert das bestehende Array
//! Wird erst alles in strings umwandeln und dann dementsprechend alphabetisch sortieren

let numberArray = [1, 900, 1000, 999];
numberArray.sort();
console.log(numberArray); // => 1, 1000, 900, 999

numberArray.sort(
    (a, b) => b - a // sortiert absteigend
)
console.log(numberArray); // 1000, 999, 900, 1
// a - b würde aufsteigend sortieren

// Hinzufügen neuer Elemente in das Array

// arr.unshift(el1, el2, el3....elN);
// Fügt die Elemente am Anfang des Arrays ein
// Gibt die neue Länge des Arrays zurück
//! Verändert das bestehende Array
console.log(numberArray.unshift(10000, 5000, 2500)); // => 7

// arr.push(el1, el2, el3....elN)
// Fügt die Elemente am Ende des Arrays an
// Gibt die neue Länge des Arrays zurück
//! Verändert das bestehende Array

console.log(numberArray.push(0, -1, -25)); // => 10

// Entfernen von Elementen
//! Beide verändern das bestehende Array

// arr.shift()
// Entfernt das erste Element aus dem Array und gibt dieses Zurück

console.log(numberArray.shift()); // => 10000

// arr.pop()
// Entfernt das letzte Element aus dem Array und gibt dieses zurück

console.log(numberArray.pop()); // => -25

// arr.splice(?startposition, ?löschAnzahl, el1, el2, ...elN);
// Es wird beginnend bei startposition so viele Elemente entfernt wie in löschAnzahl definiert und neue Elemente werden an der Stell eingefügt, falls welche übergeben wurden
// Gibt die entfernten Elemente zurück
//! Verändert das bestehende Array

console.log(numberArray.splice(2, 4, 5, 12, 16, 28)); // => [1000, 999, 900, 1]

// arr.slice(?start, ?ende)
// Gibt ein neues Array zurück, das bei Index start beginnt und bei Index ende - 1 endet
let numberCopy = numberArray.slice(0, 7); // Gibt nur die ersten 7 Elemente des Arrays zurück

// Fals start und Ende weglassen wird das Array 1:1 kopiert
// Falls wir nur start übergeben beginnt das neue Array bei Index start und geht bis zum Ende des ursprünglichen Arrays
numberCopy = numberArray.slice(5);

// arr.toString()
// Methode gibt einen String zurück der aus den einzelnen Elemente des Arrays getrennt mit Komma besteht
// arr.toString() == arr.join()

console.log(numberCopy.toString());


// Übung:
// Erstelle eine Funktion, die ein beliebig langes Array aus Zahlen erhalten kann und uns dann nur die höchste Zahl aus dem Array zurückgibt

function highestNumberInArray(arr) {
    let highestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (highestNum < arr[i]) {
            highestNum = arr[i];
        }
    }
    return highestNum;
}

function returnHighestWithSort(arr) {
    let copy = arr.slice();
    copy.sort((a, b) => {
        return b - a;
    })
    return copy[0];
}

// Erstelle eine Funktion, die ein zwei Dimensionales Array als Parameter erhält
// Die enthaltenen Arrays bestehen wieder nur aus Zahlen
// Die Funktion soll am Ende in der Konsole ausgeben das wie vielte Arrays das längste ist und welche Zahl die höchste ist

function multiHighest(arr) {
    let longestArr = 0;
    let highestNumber = arr[0][0];
    let currentMax;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > arr[longestArr].length) {
            longestArr = i;
            currentMax = returnHighestWithSort(arr[i])
        }
        if (highestNumber < currentMax) {
            highestNumber = currentMax
        }
    }
    console.log(`Das ${longestArr + 1}te Array ist das längste. Die höchste Zahl in den Arrays ist ${highestNumber}`);
}

function multiHighestAlt(arr) {
    let longestArr = 0;
    let highestNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > arr[longestArr].length) {
            longestArr = i;
        }
        for (let j = 0; j < arr[i].length; j++) {
            if (highestNumber < arr[i][j])
                highestNumber = arr[i][j]
        }
    }
    console.log(`Das ${longestArr + 1}te Array ist das längste. Die höchste Zahl in den Arrays ist ${highestNumber}`);
}

let array2 = [[1, 2, 3, 12], [4, 5, 6, 67, 55], [7, 8, 9]];



Dimension2Handler(array2);

function Dimension2Handler(array2) {
    console.log(array2.length);
    let highestNumber = undefined;
    for (i = 0; i < array2.length; i++) {
        let innerArrayLength = array2[i].length;
        for (inner = 0; inner < innerArrayLength; inner++) {
            if (highestNumber === undefined) {
                highestNumber = array2[i][inner];
            }
            else if (highestNumber < array2[i, inner]) {
                highestNumber = array2[i][inner];
            }
        }
    }
    console.log(highestNumber);
}

// Math
// Stellt uns einige mathematische Funktionen und Konstanten zur Verfügung
// Konstanten
// Math.E => Eulerische Zahl
// Math.LN2 => Natürliche Logarithmus von 2
// Math.LN10 => Natürliche Logarithmus von 10
// Math.PI => Pi
// Math.SQRT2 => Quadratwurzel von 2

// Häufigstens Methoden von Math 

// Rundungsfunktionen
// Math.round(number) => Rundet auf die nächste Ganzzahl
// Kaufmännische runden
console.log(Math.round(2.5), Math.round(2.4));

// Math.ceil(number) => Rundet auf nächsthöhere oder gleiche Ganzzahl
console.log(Math.ceil(2.1), Math.round(3.0));

// Math.floor(number) => rundet auf die nächst niedrigere oder gleiche Ganzzahl
console.log(Math.floor(2.99), Math.floor(2.0));

// Math.pow(x,y) => x^y
console.log(Math.pow(2, 4)); // => 16

// Math.sqrt(number) => Quadratwurzel von number
console.log(Math.sqrt(16)); // => 4 

// Math.abs(number) => Gibt Betrag von number zurück
console.log(Math.abs(-5), Math.abs(12)); // 5 12

// Math.min()
// Math.max()
// Gibt uns jeweils die höchste bzw kleinste der übergebenen Zahlen zurück
console.log(Math.min(12, 8, -1), Math.max(100, 50, 230)); // -1 230
// Akzeptiert keine Arrays als Input
// => Spread-Operator
// Anhand der vorherigen Übung:

function returnMaxSpread(arr) {
    return Math.max(...arr);
    // ... ist der Spreadoperator
    // Löst das Array in seine Bestandteile auf und übergibt sie einzeln der Funktion
}

let biggerNumberArray = [...numberArray, 5, 20, 580, 682];
let copyNumber = [...numberArray];
// Erlaubt es uns auch Arrays zu kopieren bzw. zu verlängern

// Math.random()
// Gibt uns eines zufällige Zahl zwischen 0 und 0.999999... zurück

function randomNumberGenerator(maxNum) {
    return Math.floor((Math.random() * maxNum) + 1);
    // Generiert zufällige Zahlen zwischen 1 und maxNum
}

// Number
// Erlaubt es uns Strings in Zahlen umzuwandeln
// Und zusätzlich lässt es uns einige Randbedingungen prüfen

// Number.isNaN(variable)
// Gibt einfach true oder false zurück jenachdem ob NaN übergeben wurde

// Number.isFinite(number)
// Prüft ob die Zahl endlich ist
// Number.isInteger(number)
// Prüft ob die Zahl ganzzahlig ist

// Number.parseFloat(variable)
// Gibt die Eingabe als Gleitkommzahl zurück
// Number.parseInt(Variable)
// Gibt die Zahl als Ganzzahl zurück
// Falls die Zahl nicht umgewandelt werden kann wird NaN zurückgegeben
// Seperator muss ein . sein, ansonten wird alles danach abgetrennt
// Wenn eine Textfolge mit einer Zahl beginnt wird die Zahl erfolgreich umgewandelt und der Text abgetrennt
// Falls die Zeichenfolge mit Text beginnt und Zahlen enthält wird NaN zurückgegebn

// Date in JS
// Zählt intern mit ms, die seit dem 01.01.1970 vergangen sind

// Date Erstellung

let today = new Date();
// Gibt das heutige Datum inklusive Timezone zurück

// Spezifisches Datum erstellen
// new Date(jahr, monat,?tag, ?stunden, ?minuten, ?sekunden, ?milisekunden)

let trialDate = new Date(2022);
// Wenn nur ein Parameter übergeben wird, wird es als Millisekunden seit dem 01.01.1970 gerechnet
// Mit zwei Parametern definieren wir jahr und monat
let trialDate2 = new Date(2022, 6)
// Monat beginnt bei 0

// Mittels Datumstring:
let trialDate3 = new Date("07-05-2022"); // 05.07.2022
// yyyy-MM-dd klappt in jedem Browser
// MM-dd-yyyy klappt in chrome, aber nicht in firefox

// Methoden mit get und set
// Jahr
trialDate.getFullYear(); // => Jahr als vierstellige Zahl
trialDate.setFullYear(2021); // Ändert das Jahr auf 2021
// Monat
trialDate.getMonth(); // => Monat zwischen 0 und 11

// Tag
trialDate.getDate(); // => Tag zwischen 1 und 31

// Stunden
trialDate.getHours(); // => Stunden zwischen 0 und 23

// Minuten
trialDate.getMinutes(); // => Minuten zwischen 0 und 59

// Sekunden
trialDate.getSeconds(); // => Sekunden zwischen 0 und 59



// Millisekunden
trialDate.getMilliseconds(); // Millisekunden zwischen 0 999
trialDate.getTime(); // => Milisekunden seit 01.01.1970

// Ohne set

// Wochentag
trialDate.getDay(); // => Gibt uns eine Zahl zwischen 0 und 6
// Sonntag = 0 | Samstag = 6

// Date.now()
Date.now(); // Gibt das derzeitige Datum als ms seit dem 01.01.1970 zurück