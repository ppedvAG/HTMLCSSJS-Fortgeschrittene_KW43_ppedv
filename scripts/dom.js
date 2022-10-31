// Wie benutze ich die Dom?

// Im Browser einfach über die Dev-Tools ein Element auswählen dieses Element ist dann in der Konsole immer über $0 ansprechbar

// Im Code:
// Wir nennen das auswählen eines Elementes auch traversing the dom, da wir den Baum durchsteigen
// Die folgenden Methoden sind auf jede node anwendbar, wobei die ausgewählte node dann als startpunkt genommen wird
// AM Anfang haben wir noch keine eigenen nodes
// Wir müssen auf das document Object zurückgreifen
// Das document Object ist unser html-Tag

// Die Methoden zum traversen lassen sich in zwei Gruppen aufteilen
// 1. querySelectors
// Die querySelecors arbeiten mit der css Selector Syntax
// document/node.querySelector("css-Selector"); => Gibt uns eine einzelne Node zurück und nimmt immer die, die als erstes gefunden wurde
// document/node.querySelectorAll("css-Selector"); => Gibt uns ein Array von einzelnen Elementen zurück, also alle gefundenen

let firstLi = document.querySelector("li"); // GIbt mir das erste li-Element zurück
let mainHeading = document.querySelector("#main-heading"); // Gibt mir das Element mit der id main-heading zurück
let list = document.querySelector(".list"); // => Gibt mir das erste Element mit der Klasse list zurück

// Wie speichere ich alle list-Items in einer Variable?
let allLi = document.querySelectorAll("li");

// Im Idealfall weiß ich welche ELemente ich benötige und gebe ihnen eine id damit ich sie leicht ansprechen kann

// 2. getElement/sBy...
firstLi = document.getElementsByTagName("li")[0]; // Gibt uns eigentliche alle li ELemente zurück, mit [0] greifen wir auf das erste zu
allLi = document.getElementsByTagName("li"); // gibt uns alle lis zurück
mainHeading = document.getElementById("main-heading"); // Gibt uns das Element mit der ID  main-heading zurück

// Wenn wir alle ELemente mit einer Klasse erhalten wollen:
list = document.getElementsByClassName("list"); // Kriegen ein Array mit allen Mitgliedern der Klasse zurück
// Wenn wir nur das erste ELement mit der Klasse benötigen
list = list[0];

// Node Eigenschaften:
// node.children => Gibt uns ein Array mit allen direkten Nachfolger-Elementen der node zurück
// node.childNodes Gibt alle Child-Nodes, auch Zeilenumbrüche und Kommentare zurück

console.log(list.children); // => Array mit allen li's

// Direkte Nachbarn:
// node.nextElementSibling
// node.previousElementSibling
// Geben uns den nächsten oder vorherigen Nachbarn zurück
// Falls der nicht exisitiert wird null zurückgegeben

let nextLi = firstLi.nextElementSibling; // => li mit "Parent"
let previousLi = firstLi.previousElementSibling; // => null

// Parent-Node
// node.parentElement
console.log(firstLi.parentElement); // => ul

// Node-Name
// node.nodeName
console.log(firstLi.nodeName); // => LI

// Textinhalt der node
// node.innerHTML => Gesamter Textinhalt inklusive der HTML-Tags, Kommentare und Zeilenumbrüche
// node.TextContent => Gesamte Textinhalt ohne Kommentare und HTML-Tags
// node.innerText => Nur der gerenderte Textinhalt
// In den meisten Fällen reicht innerText
// Können auch neuzugewiesen werden um den Text der Seite zu verändern

// node.style.CssAtribute
// So können wir jegliche Style-Regelen anpassen
//! Achtung: CSS-Attribute werden in camelCase geändert
// z.B. wird aus font-size => fontSize

firstLi.style.fontSize = "42px"; // => ändert die Schriftgröße des Elements auf 42px

// Klassen und Id ändern
mainHeading.id = ""; 
// Entfernt die ID von h1 id="main-heading"
firstLi.id = "firstListObject";

// Klassen:
console.log(list.classList); // Gibt uns die Klassen als Array zurück

// Klasse hinzufügen:
list.classList.add("test2"); // fügt die Klasse test2 hinzu

// Klasse entfernen
list.classList.remove("test"); // Klasse test wird entfernt

// Prüfen ob eine Klasse vorhanden ist
console.log(list.classList.contains("test")); // Gibt true oder false aus


// Elemente hinzufügen oder löschen

// Vorbedingung:
// Ich brauche die Node die gelöscht wird
// Ich brauche ihre Parent Node
// parentNode.removeChild(zuLöschendesElement)

list.removeChild(firstLi); // Wird das erste Listen Element löschen

// Falls ich den parent einer Node nicht als Variable gespeichert habe, kann ich das parent Attribut nutzen
allLi[4].parentElement.removeChild(allLi[4]);

// Hinzufügen eines neuen Elementes:
// 1. Erstellen des Elementes
// document.createElement("tagName") => gibt ein neues HTML-Element zurück
let newLi = document.createElement("li");
// 2. Text bzw Attribute src,... hinzufügen
newLi.innerText = "Ich bin das neue ListItem";
// 3. Das tatsächliche hinzufügen des Elementes
// VOrbedingungen:
// Ich brauche das neue Element
// Ich brauche den Parent dem es hinzugefügt werden soll
// (optional das Element vor dem es eingefügt werden soll)
// Syntax: parentNode.appendChild(neuesElement)
// Fügt das Element als neues Child ganz unten an
list.appendChild(newLi);
// Wenn wir präziser bestimmen wollen wo es eingefügt wird:
// parentNode.insertbefore(neuesElement, referenzElement);
list.insertBefore(newLi, allLi[2]);
// Fügt das neue li vor dem 3. Element der ul an

// Wenn wir ein Element durch ein anderes Ersetzen wollen
// Syntax: parentNode.replaceChild(neueElement, zuErsetzendeElement)
newLi = document.createElement("li");
newLi.innerText = "Ich bin auch neu!";
list.replaceChild(newLi, allLi[1]); // ersetzt die li mit "Child..." durch die neue li