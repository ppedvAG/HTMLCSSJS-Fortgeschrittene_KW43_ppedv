// Lambdas
// sind kürzere alternativen zu den anonymen Funktionen
// Nennt man auch Pfeil oder Arrow Functions
// Werden häufig als Parameter für anderen Funktionen benutzt
// Sparen function Keyword, Klammern und return ein solange sie einzeilig sind (kompaktere Schreibweise)

//Ausgeschriebene Funktion
function addieren(num1, num2) {
    return num1 + num2;
}


//kompaktere Schreibweise
//Einszeilig anonyme Methode + Methoden Parameter (num1 und num2)
const add = (num1, num2) => num1 + num2;

//Merhzeilige anonyme Methode
const add1 = ((num1, num2) => { 
    num1 + num2
});

let sum = add(5,8); 
console.log(sum);

//array-hörere Funktionen
const numArr = [1,2,3,4,5,6,7,8,9, 10];

function logNumber(num) {
    console.log(num);
}

// Parameterwerte werden vom Array abgeleitet und intervallweise wird logNumber mit dem aktuellen Array-Wert aufgerufen 
numArr.forEach(logNumber); 

console.log("Jetzt mit Lambda");

numArr.forEach((num, index) => {
    //Mehrzeilige annonyme Methode
    console.log("Nummer: " + num + "| Index: " + index);
});

let evenNums = numArr.filter((num) => num % 2 === 0);
let oddNums = numArr.filter((num) => num % 2 !== 0);



https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?retiredLocale=de

//Verdoppeln die Werte einer Array-Liste -> Orginale Array wurde manipuliert -> Das Ergebnis wird dann zurück gegeben 
evenNums = evenNums.map((num) => num * 2);



//reduce
// arr.reduce(callback(mit zwei Parametern))
// Iteriert über das Array und gibt einen einzigen Wert zurück

sum = numArr.reduce((sum, number) => sum + number); //wird intern ein yield verwendet?
console.log(sum);



//Generators in JavaScript

function* numGenerator(limit) {
    for (let i = 0; i < limit; i++) {
        yield i;
    }
} //Wir verlassen hier die Methode 


const numbers = numGenerator(10);

// Um auf Werte zuzugreifen muss der Generator gestartet werden
let step = numbers.next(); //Next = nächster For-Interval

// step ist nun ein Objekt mit value: 1 und done: false
console.log(step);
console.log(step.value);

// Können nun so lange numbers.next() aufurufen bis die Endbedingung erreicht ist
// Ab dann ist das objekt value: undefined und done: true
// Anwendungsfall: id-Generator