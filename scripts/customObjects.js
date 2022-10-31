// Objects

// An sich eine Sammlung von Schlüssel:Wert Paaren
// Diese Schlüssel nenn wir Properties
// Außer wenn es sich bei den Werten dieser properties um Funktionen handelt 
// Dann sprechen wir von Methoden

// Wie initialisiere ich Objekte?
// 3 versch. Möglichkeiten:
// 1. object literal
const objectLiteral = {
    "name" : "Max Mustermann",
    "age": 15,
    "employed": true,
    "cityOfOrigin": "Munich"
};
// Property-Namen können auch ohne "" oder '' definiert werden
// Anführungszeichen sind erst absolut notwendig wenn es sich beim prop-Namen nicht um einen gültigen JS Identifier handelt
// Kann mit oder ohne trailing Komma definiert werden

// 2. constructor
const constructedObject = new Object();
// Erstellt ein bis dato leeres Objekt

// 3. shorthand
// Gibt es ES6

let person2Name = "Erika Musterfrau";
let person2Age = 22;
let person2Employed = true;
let person2CityofOrigin = "Vienna";

const shorthandObject = {
    person2Name,
    person2Age,
    person2Employed,
    person2CityofOrigin
};

// Beim shorthand wird nun der Identifier der Variable zum Namen des Props und der Wert der Variable wird der Wert des Props

// Wie greife ich auf Props eines Objektes zu?
// 1. Bracket-Notation
// Objekte verfügen nicht über indizes
console.log(objectLiteral["name"]); // => Max Mustermann
console.log(shorthandObject["person2Name"]) // => Erika Musterfrau
// Die Bracket Notation funktioniert immer, auch wenn es sich beim Namen des Props um keinen gültigen Identifier handelt, z.B. wenn dieser leerzeichen enthält

// 2. dot-Notation
console.log(objectLiteral.cityOfOrigin); // => Munich
console.log(shorthandObject.person2Age); // => 22
// Die dot-Notation funktioniert nur mir Prop-Namen, die gültige JS-Identifier sind
// console.log(objectLiteral.city of Origin);
// Würde nicht gehen,da Leerzeichen im Prop-Namen enthalten sind

// Wie erstelle ich dynamische Props?
// dynamische Props sind Props, die wir nach der Erstellung des Objektes hinzufügen
constructedObject.name = "Test Testmann";
constructedObject.age = 45;
constructedObject.employed = false;
constructedObject["cityOfOrigin"] = "Berlin";
// Wir weisen einfach einem Prop einen Wert zu
// Falls das prop noch nicht exisitiert wird es neuerstellt
// Falls es bereits existiert wird es überschrieben

// Wie erstelle ich einen Objekt-Constructor?
// Constructor sind fast normale funktionen
// Die Besonderheiten: this und kein return

// Einschub Methoden anfügen
function introduce() {
    console.log(`Hallo! Mein Name ist ${this.name} und ich bin ${this.age} Jahre alt.`);
}

// Person-Constructor:
// Constructor werden normalerweise mit großbuchstaben benannt
function Person(nameProp, age, employed, cityOfOrigin) {
    this.name = nameProp;
    this.age = age;
    this.employed = employed;
    this.cityOfOrigin = cityOfOrigin;
    this.introduceSelf = introduce;
};

// Wie rufe ich diesen Constructor auf?
// Bei Constructors brauchen wir das new Keyword

const person1 = new Person("Christian Lindner", 49, true, "Cologne");
const person2 = new Person("Luke Skywalker", 24, false, "Tattooin");
// Ohne das new-Keyword wird undefined zurückgegeben, da wir keinen return haben
// d.h. damit der Construcotr wie gewollt funktioniert benötigen wir das new-Keyword

console.log(person1.name);
console.log(person2.cityOfOrigin);

// Wie füge ich bei Constructor-Funktionen Methoden hinzu?
// SIehe Zeile 70

// Moderne Variante des Konstruktors:
// Ist syntactic Sugar, d.h. es ist eine rein sytnaktische Verbesserung mit keiner Änderung an der Funktionalität

// Mit dem Keyword class:

class PersonAlt {
    xyz = 124;
    constructor (nameProp, age, employed, cityOfOrigin) {
        this.name = nameProp;
        this.age = age;
        this.employed = employed;
        this.cityOfOrigin = cityOfOrigin;
    }
    introduceSelf() {
        console.log(`Hallo mein Name ist ${this.name} und ich bin ${this.age} Jahre alt`);
    }
}

const person3 = new PersonAlt("Christian Lindner", 49, true, "Cologne");


// Übung:
// Erstelle eine Klasse Auto
// Sie soll folgende Props besitzen:
// marke
// modell
// motorStatus (boolean)
// derzeitigeGeschw
// maximaleGeschw

// derzeitige Geschwindigkeit soll bei der erstellung immer 0 sein
// motorStatus soll bei der Erstellung immer false sein

// Methoden:
// anAbschalten
// Die Methode soll nur den motorStatus ändern
// Beschleunige(neueGeschw)
// Diese Methode soll die derzeitige Geschwindigkeit auf neueGeschw setzen, außer wenn diese die maximale Geschwindigkeit überschreiten würde

class Auto {
    constructor(marke, modell, maxSpeed) {
        this.marke = marke;
        this.modell = modell;
        this.maxSpeed = maxSpeed;
        this.currSpeed = 0;
        this.engineStatus = false;
    }
    onOff() {
        this.engineStatus = !this.engineStatus;
        console.log(`Motor ist jetzt ${this.engineStatus ? "an" : "aus"}`);
    }
    accelerate(newSpeed) {
        if (this.engineStatus) {
            if (newSpeed <= this.maxSpeed) {
                this.currSpeed = newSpeed;
        }
            else {
                console.error("Zu hohe Geschwindigkeit");
            }
        }
        else {
            console.log("Motor ist nicht an")
        }
    }
}

// person1 instanceof Person
// instanceOf prüft ob ein Objekt eine Instanz einer Klasse ist
// Syntax:
// objekt instanceof klasse
console.log(person1 instanceof Person); // true, da der Konstruktor Person benutzt wurde
console.log(person1 instanceof Object); // true, da Person von Object erbt
console.log(person1 instanceof PersonAlt); // false, da ein anderer Constructor benutzt wurde

// in
// in prüft ob ein prop in einem Objekt enthalten ist
console.log("age" in person1); // true, da person1 ein Prop namens age enthält

// for in Schleife
// Sonderform der for Schleife

for (prop in person3) {
    console.log(`Prop-Name: ${prop} | Wert: ${person3[prop]}`);
};

// console.table(objekt) stellt uns unser Objekt und dessen Eigenschaften in einer Tabelle dar

console.table(person3);
