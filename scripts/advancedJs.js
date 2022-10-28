//Classes in JS



class Person {
    //Mit  Hashtag definiere ich ein private Feld
    //Kann nur noch durch Klassen-Methoden auferufen werden und nicht direkt von außerhalb. 
    #age;

    constructor(firstName, lastName, age, gender) {
        //hier wird firstname, lastName und gender der Klasse Person hinzugefügt 
        this.firstName = firstName;
        this.lastName = lastName; 
        this.age = age;
        this.gender = gender;
    }

    //Get und Set für das #age

    set age(newAge) {
        console.log("setter wurde aufgerufen");
        if (newAge < this.age) {
            console.error("Man kann nicht jünger werden!");
        }
        else {
            //Alter wird neu gesetzt
            this.#age = newAge;
        }
    }

    get age() {
        console.log("Getter wurde aufgerufen");
        return this.#age;
    }

    //private Methoden werden auch mit dem Hashtag beschrieben
    #introduce() {
        return 'Hi my name is ${this.firstName} ';
    }

    introduceSelf() {
        return this.#introduce();
    }
}

//P1 ist ein Objekt und Person ist die Klasse 
const p1 = new Person("Max", "Musterfrau", 29, "male");



// Mit extends leiten wir eine Klasse von einer basis Klasse ab
class Student extends Person {

    constructor (firstName, lastName, age, gender, schoolClass) {
        //Schlüsselwort super gibt an, den Konstruktor von Person aufzurufen.
        super (firstName, lastName, age, gender);

        //Student bekommt die Property schoolClass, wird hier expliziet befüllt
        this.schoolClass = schoolClass;
    }

    //Klassenmethode
    showGrade () {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor?retiredLocale=de
        return Math.floor(Math.random() * 6) + 1;
    }

    //Methode wird überschrieben -> Anders gesagt, Student.introduceSelf ersetzt die introduceSelf Methode von Person 
    introduceSelf(){
        // // let output = super.introduceSelf();
        // output += ` I'm in class ${this.schoolClass}.`
        // console.log(output);
        // return output;
        console.log(`My name is ${this.firstName} and I'm in class ${this.schoolClass}`);
    }

    //Keine Überladungen sind möglich -> https://www.geeksforgeeks.org/function-overloading-in-javascript/
    //introduceSelf(test){
    //    console.log(`My name is ${this.firstName} and I'm in class ${this.schoolClass} ${test}`);
    //}





}

const s1 = new Student("Otto", "Walkes", 59, "male", "13b");

s1.introduceSelf


