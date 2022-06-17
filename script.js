
let hr = 0;
let min = 0;
let sec= 0;
let stoptime = true;


function startCounter(){

  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }

}


function stopCounter() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle(){
  if (stoptime == false) {
    hr = parseInt(hr);
    min = parseInt(min);
    sec = parseInt(sec);

    sec = sec + 1

    if (sec == 60) {
      min = min +1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr +1;
      min = 0;
      sec = 0;
    }

if (sec < 10 || sec == 0) {
  sec = '0'+ sec;
}

if (min < 10 || min == 0) {
  min = '0'+ min;
}

if (hr < 10 || hr == 0) {
  hr = '0'+ hr;
}

timer = hr + ":" + min + ":" + sec ;
document.getElementById("stopwatch").innerHTML=timer;

setTimeout("timerCycle()", 1000)
  }

}

function resetCounter(){
document.getElementById("stopwatch").innerHTML='00:00:00';

  hr = 0;
  min = 0;
  sec = 0;
  stoptime = true;


}
