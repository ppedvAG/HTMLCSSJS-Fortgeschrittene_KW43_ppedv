//Wir greifen auf die Text-Eingabe unseres Passwortes

//Wir können via querySelector im DOM (HTML-Seite mit allen Elementen im Arbeitsspeicher)
const passwordInp = document.querySelector("#password");


//Wir wollen mitbekommen, wenn wir in der Eingabe des Textfeldes "Password" uns befinden 
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus

passwordInp.addEventListener("focus", function (ev) {
    if (passwordInp.validity.valueMissing) {
        passwordInp.setCustomValidity("Das Passwort darf nicht leer sein.");
        passwordInp.reportValidity();
    } else {
        passwordInp.setCustomValidity("");
    }
});

// Mögliche validity Props
/*
    patternMismatch - Inhalt stimmt nicht mit pattern überein
    tooLong - Inhalt ist zu lang
    tooShort - Inhalt ist zu kurz
    rangeOverflow - Wert höher ist als im max-Attribut bestimmt
    rangeunderflow - Wert niedriger ist als im min-Attribut bestimmt
    typeMismatch - Wert ist nicht der richtige Typ, z.B. email ohne @
    valid - Gibt true zurück, wenn alles gültig ist
    valueMissing - Wenn das Input-Element das Attribut required hat und das Feld leer ist
*/

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup_html
passwordInp.addEventListener("keyup", function (ev) {
    if (passwordInp.validity.tooShort) {
        passwordInp.setCustomValidity(`Das Passwort muss mindestens 8 Zeichen lang sein. Gerade hat es ${passwordInp.value.length} Zeichen.`);
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInp.reportValidity();
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
    } else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInp.setCustomValidity("");
    }
})

//Das Formular hat ein Event, dass sich submit nennt. -> In diesem Beispiel schauen wir, wenn der Button 'Absenden' geklickt wird, dass wir das mitbekommen
document.querySelector("form").addEventListener("submit", function (ev) {
    // Auf die Form angewendet verhindert event.preventDefault() das Neuladen der Seite bei senden der Form
    ev.preventDefault();
})

//Zugriff auf die HTML-Element
const zipCode = document.querySelector("#zipCode");
const country = document.querySelector("#country"); //ComboBox wird selektiert (Länderauswahl)

function checkPLZ() {
     // Hier legen wir unsere Einschränkungen fest, in diesem Fall wie dei PLZ aufgebaut sind
     const constraints = {
        // Zwei \ um den zweiten \ zu escapen
        ch: ['^(CH-)?\\d{4}$', "Schweizerische PLZ müssen aus genau 4 Zeichen bestehen: e.g. CH-1950 or 1950"],
        fr: ['^(F-)?\\d{5}$', "Französische PLZ müssen aus genau 5 Zeichen bestehen: e.g. F-75012 or 75012"],
        de: ['^(D-)?\\d{5}$', "Deutsche PLZ müssen aus genau 5 Zeichen bestehen: e.g. D-12345 or 12345"]
    }

    //Werte werden abgerufen
    const countryValue = country.value;
    const zipCodeValue = zipCode.value;

    //// Hier wird eine konkrete Einschränkung ausgewählt basierend auf dem ausgewählten Land
    //Wir verwenden hier JavaScript OOP -> Klasse wird instanziiert
    //PLZ Muster wird ausgelesen
    const constraint = new RegExp(constraints[countryValue][0],"");


    // Hier wird geprüft ob die PLZ mit der RegEx aus constraint übereinstimmt
    if (constraint.test(zipCodeValue)) {
        //Wenn es übereinstimmt 
        // Falls ja wird die CustomValidity auf ein leeren String gesetzt => Input ist gültig
        zipCode.setCustomValidity("");
    }
    else {
        // Falls es nicht mit der RegEx übereinstimmt, setzen wir die Fehlermeldung auf die im Array enthaltene
        zipCode.setCustomValidity(constraints[countryValue][1]); //Wenn für Frankreich eine falsche PLZ eingegeben wurde, wird diese Nachricht ausgegeben -> "Französische PLZ müssen aus genau 5 Zeichen bestehen: e.g. F-75012 or 75012"
        zipCode.reportValidity();
    }
}

zipCode.addEventListener("input", checkPLZ);
country.addEventListener("input", checkPLZ);



const password = document.querySelector("#passwordEx");
const confirmation = document.querySelector("#confirmation");
const submitBtn = document.querySelector("#pwSubmit");

function checkPassword() {

    // === Prüft ob Typ und Wert gleich sind
    // !== Prüft ob Typ oder Wert ungleich sind

    if (password.value === confirmation.value) {
        confirmation.setCustomValidity("");

        submitBtn.removeAttribute("disabled");
    }
    else
    {
        confirmation.setCustomValidity("Die Passwörter stimmen nicht überein");
        confirmation.reportValidity("");
        submitBtn.setAttribute("disabled", "");
    }
}

password.addEventListener("keyup", checkPassword);

confirmation.addEventListener("change", checkPassword);
