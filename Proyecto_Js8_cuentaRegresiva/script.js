

function getTimeMissing(fechaLimite) {
  let timeCurrent = new Date();
  let timeRemaining = (new Date(fechaLimite) - timeCurrent + 1000) / 1000;
  let secondsRemaining = ("0" + Math.floor(timeRemaining % 60)).slice(-2); //Math.floor, aproxima el decimal hacia abajo
  let minutesRemaining = ("0" + Math.floor((timeRemaining / 60) % 60)).slice(
    -2
  ); //.slice, corre dos posiciones hacia la izquierda -
  let hoursRemaining = ("0" + Math.floor((timeRemaining / 3600) % 24)).slice(
    -2
  );
  let daysRemaining = ("0" + Math.floor(timeRemaining / (60 * 60 * 24))).slice(
    -2
  );

  return {
    secondsRemaining,
    minutesRemaining,
    hoursRemaining,
    daysRemaining,
    timeRemaining,
  };
}

//console.log(getTimeMissing("DEC 25 2023 00:00:00 GMT-0500"));

function countdown(timeRemaining, clock, messagge) {
  const r = document.getElementById(clock);

  const currentTime = setInterval(() => {
    let t = getTimeMissing(timeRemaining);
    r.innerHTML = `
  
    <p>${messagge}</p>
  
    <div class="reloj">

      <div class=" days item">
        ${t.daysRemaining}
        <br><span>D</span>
      </div>
      <div class="hours item">
        ${t.hoursRemaining}
        <br><span>H</span>
      </div>
      <div class="minutes item">
        ${t.minutesRemaining}
        <br><span>M</span>
      </div>
      <div class="seconds item">
        ${t.secondsRemaining}
        <br><span>S</span>
      </div>
            
    </div>`;

    if (t.timeRemaining < 1) {
      clearInterval(currentTime); //clearInterval, para el intervalo
      r.innerHTML = messagge;
      startAnimation();
    }
  }, 1000); //1000, intervalo
}


const startBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");
let deshabilitar = false;

startBtn.addEventListener("click", startAnimation);
stopBtn.addEventListener("click", stopAnimation);

let img = "off";



let audio = new Audio("./media/songNavidad.mp3");

function startAnimation() {
  if (img == "off") {

    startBtn.ariaDisabled = false    
    img == "on";
    startBtn.classList.add("on");
    startBtn.addEventListener("click", () => {
      audio.play();
    });
  }
  console.log("on");
}

function stopAnimation() {
  if (img == "on") {
    img == "off";

    imgPlay.classList.remove("on");
    imgStop.addEventListener("click", () => {
      audio.pause();
    });
  }
  console.log("off");
}

countdown("nov 17 2023 15:06:00 GMT-0500", "countdown", "¡Feliz Navidad!");
