
//IndexedDB befindet sich im Object window
if (window.indexedDB != null) {
    
    
    //Öffnen der Datenbank 
    let openRequest = indexedDB.open("TestDb", 1);

    let db = openRequest.result;
    //Spichern einen Wert in die DB
    var objectStorage = db.createObjectStore('person', {name: 'kevin'}); 


    //Erstellen eines Indexes -> für schnelle Suchergebnisse
    objectStorage.createIndex("person", "person", {unique: false});

    //Auslesen 
}
