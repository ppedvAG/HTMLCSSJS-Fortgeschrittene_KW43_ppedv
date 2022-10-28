const worker = new Worker("./scripts/worker.js");
console.info(worker);
// Nested Worker sind inzwischen in den meisten großen Browsern unterstützt
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
// https://chromestatus.com/feature/6080438103703552

//document.querySelector("#generate").addEventListener("click", methodeABC);


//Wenn auf Button #generate geklickt, wird der Body der annonymen Methode ausgeführt
document.querySelector("#generate").addEventListener("click", ()=> {
    
    //1000.000 wird aus dem text ausgelesen 
    const quota = document.querySelector("#quota").value;

    //hier kommunizieren wir mit unserem Worker
    //message Event wir geworfen
    worker.postMessage(
        {
            command: "generatePrimes",
            quota: quota
        }
    );
});