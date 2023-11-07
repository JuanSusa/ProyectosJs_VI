let hr = mn = sc = ms = "0" + 0,  starTime;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", started);
stopBtn.addEventListener("click", stopped);
resetBtn.addEventListener("click", resetted);

function started() {

  startBtn.classList.add("on"); /*agrga una nueva clase*/

  starTime = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms; /* ?(if) :(else)*/

    if (ms == 100) {
      sc++;
      sc = sc < 10 ? "0" + sc : sc;
      ms = "0" + 0;
      console.error(sc)
    }

    if (sc == 60) {
      mn++;
      mn = mn < 10 ? "0" + mn : mn;
      sc = "0" + 0;
    }

    if (mn == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      mn = "0" + 0;
    }

    insertValue();
  }, 10);

  
}

function stopped() {
  startBtn.classList.remove("on");
  clearInterval(starTime);
}

function resetted() {
  startBtn.classList.remove("on");
  clearInterval(starTime);
  hr = mn = sc = ms = "0" + 0;
  insertValue();
}

function insertValue() {
  document.querySelector(".millisecond").innerHTML = ms;
  document.querySelector(".second").innerHTML = sc;
  document.querySelector(".minute").innerHTML = mn;
  document.querySelector(".hour").innerHTML = hr;
}
