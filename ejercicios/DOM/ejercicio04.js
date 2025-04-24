let centesimas = 0;
let intervalo;

function start() {
    intervalo = setInterval(() => {
        centesimas++;
        let hh = Math.floor(centesimas / 360000);
        let mm = Math.floor((centesimas % 360000) / 6000);
        let ss = Math.floor(((centesimas % 360000) % 6000) /100);
        let cc = ((centesimas % 360000) % 6000) % 100;
        document.getElementById("crono").innerText =
            String(hh) + ":" +
            String(mm) + ":" +
            String(ss) + "." +
            String(cc);
    }, 10);
}

function stop() {
    clearInterval(intervalo);
}

function reset() {
    clearInterval(intervalo);
    tiempo = 0;
    document.getElementById("crono").innerText = "00:00:00.00";
}