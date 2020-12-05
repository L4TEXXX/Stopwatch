const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime = 0;

let stopId = null;

function DateTime() {
    const ms = startTime % 1000;
    const s = Math.floor(startTime/1000)%60;
    const m = Math.floor(startTime/(1000*60))%60;
    const h = Math.floor(startTime/(1000*60*60));
    timer.innerHTML = `${h}:${m}:${s}:${ms}`;
}

//click Event
start.addEventListener("click",() =>{
    if(stopId != null){return};
    let pre = Date.now();
    stopId = setInterval(function(){
        const now = Date.now();
        startTime += now - pre;
        pre = now;
        DateTime();
    },100);
})

stop.addEventListener("click",() =>{
    clearInterval(stopId);
    stopId = null;
})

reset.addEventListener("click",()=>{
    startTime = 0;
    if(startTime == 0){
        timer.textContent = `0:0:0:0`;
    }
})
