function locate() {
    const output = document.querySelector("#output");
    const position = document.querySelector("#position");

    // Gibt uns einen einmaligen standort zurück
    navigator.geolocation.getCurrentPosition(
        (location) => {
            output.innerText =  `Latidude: ${location.coords.latitude} Longitude: ${location.coords.longitude} Accuracy ${location.coords.accuracy}`;
            position.href = `https://www.openstreetmap.org/#map=18/${location.coords.latitude}/${location.coords.longitude}`;
        },
        (error) => {
            output.innerText = error.message + " " + error.code;
        }
    )
}

const button = document.querySelector("#allow");
button.addEventListener("click", locate);