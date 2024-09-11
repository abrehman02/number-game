var timer = 60;
var score = 0;
var rnVal = 0;

function updateScore(){
    score += 10;
    document.querySelector("#newScore").textContent = score;
}


function gethitval(){
    rnVal= Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = rnVal;
}



function bubble()
{
    var clutter = "";

for (i = 0; i<=167 ; i++){

    var rn = Math.floor(Math.random()*10) 
    clutter += `<div class="bubble">${rn}</div>` ;
} 

document.querySelector('#pbtm').innerHTML = clutter ;

}


function runTimer() {
    var timerint = setInterval(function()
    { if (timer>0){
        timer--;
        document.querySelector("#timerInt").textContent = timer;
}
        else{
            clearInterval(timerint);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over<h1/>`
        }
    },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent)
    if (clickednum === rnVal){
        updateScore();
        bubble();
        gethitval();

    }

}
)

bubble();
runTimer();
gethitval();


