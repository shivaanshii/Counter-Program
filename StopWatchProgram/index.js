// STOPWATCH PROGRAM

const display= document.getElementById("display")
let timer=0
let startTime=0;
let elapsedTime=0
let isRunning= false;

function start() {
    if (!isRunning) {
        startTime= Date.now() - elapsedTime; //time right now in ms
        timer= setInterval(update,10);
        isRunning= true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer)
        elapsedTime= Date.now() -startTime;
        isRunning= false;
    }
}

function reset() {
    clearInterval(timer)
    elapsedTime= 0;
    isRunning= false;
    display.textContent= "00:00:00:00"
}

function update() {
    const currentTime= Date.now();
    elapsedTime= currentTime- startTime;

    let hours= Math.floor(elapsedTime/ (1000 *60 *60));
    hours=hours.toString().padStart(2,'0')
    let minutes= Math.floor(elapsedTime/ (1000 *60) %60);
    minutes=minutes.toString().padStart(2,'0')
    let seconds= Math.floor(elapsedTime/ (1000) %60);
    seconds=seconds.toString().padStart(2,'0')
    let milliseconds= Math.floor(elapsedTime % 1000 / 10)
    milliseconds=milliseconds.toString().padStart(2,'0');
    display.textContent= `${hours}:${minutes}:${seconds}:${milliseconds}`
}