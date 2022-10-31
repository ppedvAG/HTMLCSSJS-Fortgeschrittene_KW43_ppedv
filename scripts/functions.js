// Funktionen
// Syntax:
// function identifier(optional Parameter) { code_Block }
// Funktionen, die zu einem Objekt gehören nennen wir Methoden, z.b. console.log()
// Funktionen werden aufgerufen indem wir ihren Identifier schreiben und runde Klammern anhängen und dabei wenn nötig Parameter übergeben
console.log("Hallo Welt!"); // Funktionsaufruf mit Parameter
console.clear(); // Funktionsaufruf ohne Parameter
// Löscht den Verlauf der Konsole

// Erstellen einer einfachen Funktion ohne Rückgabe:
// Solche Funktionen geben in JS standardmäßig undefined zurück
function greeter() {
    console.log("Hallo Welt!");
}

greeter();

// Erstellen einer einfachen Funktion mit Rückgabe:

function greetPerson(name) {
    return "Hello " + name;
}

// Funktionne können auch anderen FUnktionen als Parameter übergeben werden
console.log(greetPerson("Max Mustermann"));

function mutliplier(numOne, numTwo) {
    return numOne * numTwo;
}

let ergebnis1 = mutliplier(5, 25);
let ergebnis2 = mutliplier(8, 98);

// Variablen können auch eine Funktion als Wert erhalten
let testX = mutliplier;
console.log(testX(12, 44));
// Hier wird der identifier der Variable zum Alias der Funktion

// default-Werte
// Falls eine Funktion mit zu wenigen Parametern aufgerufen wird, können wir sie mit default-Parametern, also Fallback werten

function divide(numOne = 1, numTwo = 1) {
    return numOne / numTwo;
}

// Kontrollstrukturen
// if
// Bedingter Block
// Syntax:
// if (Bedingung) {Code_Block}
// Können bleiebig verschachtelt werden
// Der Blockinhalt wird nur ausgeführt, falls die Bedingung wahr ist
let numberOne = 20;
let numberTwo = 30;

if (numberOne < numberTwo) {
    console.log(`${numberOne} ist kleiner als ${numberTwo}`);
}
// else if muss immer auf if folgen
else if (numberOne > numberTwo) {
    console.log(`${numberOne} ist größer als ${numberTwo}`);
}
// else wird ausgeführt falls der vorangehende if Block oder else if block falsch war
else {
    console.log(`${numberOne} ist gleich groß wie ${numberTwo}`);
}

// Vergleichs-Operatoren in JS:

// == selber Wert
// === selber Wert und selber Typ
// != ungleicher Wert
// !== ungleicher Wert oder Typ
// Empfehlung zu === und !==
// < kleiner als
// > größer als
// <= kleiner gleich
// >= größer gleich

// Logische Operatoren:
// && logisches und 1 < 2 && 1 < 3 => Nur true wenn beide bedingungen zutreffen
// || logische oder 1 < 4 || 1 < -10 => true sobald eine der Bedingungne wahr ist

// Übung:
// Schreibe eine Funktion, die prüft ob eine Zahl gerade oder ungerade ist
// Rückgabe soll true oder false sein

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// Ternary Operator
// Kurzschreibweise für if-Blöcke
// Syntax: (Bedingung) ? code-Block falls Wahr : code-Block falls falsch

// isEven mit Ternary:
// function isEven(number) {
//     return (number % 2 === 0) ? true :false;
// }

// Noch kürzer:
function isEven(number) {
    return number % 2 === 0;
}

// switch-Case
// Vergleicht den Wert einer Variable oder direkt einen Wert mit mehreren Möglichkeiten

//Syntax:
/* switch(variable) {
    case 1:
        code Fall 1;
        break;
    case 2:
        code Fall 2;
        break;
    default:
        code Falls kein Fall eintrat
}
*/

switch (numberOne) {
    case 10:
        console.log("Zahl ist 10");
        break; // Ist wichtig, da sonst alles nach dem ersten eingetretenen Fall ausgeführt wird
    case 20:
        console.log("Zahl ist 20");
        break;
    case 30:
        console.log("Zahl ist 30");
        break;
    default:
        console.log("Zahl hat einen unerwarteten Wert");
    // Beim default benötigen wir kein break, da danach nichts mehr kommt
}

// Loops | Schleifen in JS
// Ermöglichen das mehrfache ausführen eines Code-Blocks bis ein bestimmte Bedingung eintritt
// Kopfgesteuerte Schleife
// for
// while
// Bedingung der Schleife steht in der Kopfzeile
// Kann sein, dass die Schleife gar nicht ausgeführt wird

// Fußgesteuerte Schleife:
// do...while
// Bedingung erst in der Fußzeile geprüft
// Schleife wird immer mindestens einmal ausgeführt

// for-Schleife
// Syntax:
/* 
for(zähler, Bedingung, In/Dekrement) {
    Code-Block
}
*/
function countTo(limit) {
    console.log("Schleife startet:");
    for (let i = 0; i <= limit; i++) {
        console.log(i);
        // console.log("Test"); Würde nach jeder Zahl ausgegeben werden
    }
    console.log("Schleife beendet");
}

countTo(10);

// Verschachtelte Schleifen:

function clock() {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 60; j++) {
            for (let k = 0; k < 60; k++) {
                console.log(`${i}:${j}:${k}`);
            }
        }
    }
}
// Funktionieren wie eine Uhr
// Bevor der Stunden zeiger eins weiter tickt muss der Minuten Zeiger eine Umdrehung machen und bevor der Minuten Zeiger eins weiter tickt muss der Skeunden Zeiger einen ganzen Durchlauf machen

// FizzBuzz
// Jede Zahl die nur durch 3 teilbar ist wird mit Fizz betitelt
// Jede Zahl die nur durch 5 teilbar ist wird mit Buzzz betitelt
// Zahlen die sowohl durch 3 als auch 5 teilbar sind werden mit FizzBuzz betitelt
// Alle anderen Zahlen werden normal ausgegeben
// Wir wollen nun eine Funktion schreiben, die eine Obergrenze übergeben bekommt bis zu der gezählt werden soll
// und jede dieser Zahlen soll dann auf ihre Teilbarkeit durch 3 und 5 geprüft werden und nach den obigen Regeln in der Konsole ausgegeben werden

function FizzBuzz(limit) {
    let answ = "";
    for (let i = 0; i <= limit; i++) {
        answ = "";
        if (i % 3 === 0) {
            answ += "Fizz";
        }
        if (i % 5 === 0) {
            answ += "Buzz";
        }
        if (answ === "") {
            console.log(i)
        }
        else {
            console.log(answ)
        }
    }
}

// while Schleife:
/*
let zähler;
Syntax while(Bedingung) {
    code-Block
    inkrementieren/dekrementieren
}
*/

function fizzBuzzWhile(limit) {
    let counter = 0;
    let answ = "";
    while (counter <= limit) {
        answ = "";
        if (counter % 3 === 0) {
            answ += "Fizz";
        }
        if (counter % 5 === 0) {
            answ += "Buzz";
        }
        if (answ === "") {
            console.log(counter)
        }
        else {
            console.log(answ)
        }
        counter ++; // Ist wichtig, da wir sonst in eine endlosschleife laufen
    }
}

// do..while Schleife
/* Syntax:
    let zähler;
    do {
        code-Block
        inkrement
    }
    while(Bedingung)
*/

for(let i = 20; i < numberOne; i++) {
    console.log(i);
}

let counter = 20;
do {
    console.log(counter);
    counter++;
}
while(counter < numberOne);

// break & continue

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log("Iteration wird übersprungen");
        continue;
        // Überspringt die derzeitige iteration des Blockes, aber führt das inkrementieren/dekrementieren aus
    }
    else if (i === 7) {
        console.log("Schleife wird beendet");
        break;
        // beendet die derzeitige Schleife vorzeitig
    }
    console.log(i);
}

// Schreibe eine Funktion die das gesamte kleine ein mal eins ausführt
// Es soll kein Wert zurückgeben werden, sondern die Berechnungen sollen direkt in der Konsole angezeigt werden

// Erwartete Output:
// 1er Einmaleins:
// 1 x 1 = 1
//.... 1 x 10 = 10
// 2er Einmaleins:
// 2 x 1 = 2
//... 2 x 10 = 20

function multiplicationTable() {
    for (let i = 1; i < 11; i++) {
        console.log(`${i}er Einmaleins`)
        for(let j = 1; j < 11; j++) {
            console.log(`${i} x ${j} = ${i*j}`)
                        }
    }
}

// Rekursiven Funktionen
// Funktionen, die sich in ihrem Körper selbst aufrufen
// Müssen immer eine BEdingung enthalten, damit es keine endlos Schleife wird
// Können schnell inneffizient werden, da es viele Funktionsaufrufe sind

function faculty(limit) {
    if (limit < 2) {
        return 1;
    }
    else {
        return limit * faculty(limit - 1);
    }
}

// Lambda-Funktionen:
// Alternativen zu den anonymen Funktionen

// Anonyme Funkten sind Funktionen ohne identifier
// Weißt man im normalfall einer Variable zu, damit sie wiederverwendbar sind
// Einfache anonyme Funktion

let sum = function (numOne, numTwo) {return numOne + numTwo};
let ergebnis3 = sum(8,9);

// Sind identisch zu normalen Funktionen

// Lambdas sind die kompakte Alternative zu den anonymen Funktionen
// Pfeilfunktionen

let quadruple = (a) => a*4;
let square = (a) => a*a;

function vervierfachen (a) {
    return a * 4;
}

function quadrieren (a) {
    return a * a;
}

// Lambdas werden meistens als Parameter für andere Funktionen benutzt 

// wenn eine Lambda Funktion mehrzeilig wird, verliert sie einige ihrer Vorteile
let mehrzeilig = (a, b) => {
    a *=2;
    b *=2;
    return a *b;
}
// Wir brauchen dann wieder die geschweiften Klammern und das return Keyword
