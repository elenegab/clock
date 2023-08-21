setInterval(updateClock, 1000);

function updateClock() {
  const clock = document.querySelector(".clock");
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = weekDay[now.getDay()];
  const months = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();
  let period = "AM";

  if (hours > 12) {
    hours -= 12;
    period = "PM";
  }

  if (hours === 0) {
    hours = 12;
    period = "AM";
  }
  
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}:${period}`;
  clock.innerHTML =today + " " + months + " " + year + " " + currentTime;
}

updateClock();

