const clock = document.getElementById("clock");

const time = setInterval(() => {
  const date = new Date();

  clock.innerHTML = date.toLocaleTimeString();
}, 0.2);

setTimeout(() => {
  clearInterval(time);
}, 10000);
