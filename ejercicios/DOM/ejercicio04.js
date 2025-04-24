let centesimas = 0;
let intervalo;

function start() {
    if (intervalo == null)
        intervalo = setInterval(() => {
            centesimas++;
            let hh = Math.floor(centesimas / 360000);
            let mm = Math.floor((centesimas % 360000) / 6000);
            let ss = Math.floor(((centesimas % 360000) % 6000) /100);
            let cc = ((centesimas % 360000) % 6000) % 100;
            document.getElementById("crono").innerText =
                String(hh).padStart(2, "0") + ":" +
                String(mm).padStart(2, "0") + ":" +
                String(ss).padStart(2, "0") + "." +
                String(cc).padStart(2, "0");
        }, 10);
}

function stop() {
    clearInterval(intervalo);
    intervalo = null;
}

function reset() {
    clearInterval(intervalo);
    tiempo = 0;
    document.getElementById("crono").innerText = "00:00:00.00";
    intervalo = null;
}