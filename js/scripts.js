function startTimer(duration, display) {
  var timer = duration,
    days,
    hours,
    minutes,
    seconds;
  var tempo = 1000;

  setInterval(function () {
    days = Math.floor(timer / (24 * 60 * 60 * 1000));
    hours = Math.floor((timer / (60 * 60 * 1000)) % 24);
    minutes = Math.floor((timer / (60 * 1000)) % 60);
    seconds = Math.floor((timer / 1000) % 60);

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent =
      days + " : " + hours + " : " + minutes + " : " + seconds;

    timer -= tempo;

    if (timer < 0) {
      alert("FIM DO SCRIPT");
      timer = duration;
    }
  }, tempo);
}

window.onload = function () {
  var inicio = new Date().getTime();
  var fim = new Date("06 Feb 2022 21:45:00 GMT-0300").getTime();
  var dif = fim - inicio;
  var display = document.querySelector("#timer");

  if (dif > 0) {
    startTimer(dif, display);
  } else {
    alert("Não é possível iniciar!!!");
  }
};
