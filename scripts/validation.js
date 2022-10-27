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