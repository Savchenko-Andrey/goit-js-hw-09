const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]')
}

refs.btnStop.disabled = true

refs.btnStart.addEventListener("click", () => {
  setTimeout(() => {
      document.body.style.backgroundColor = getRandomHexColor()
  
      startInt = setInterval(() => {
          document.body.style.backgroundColor = getRandomHexColor()
      }, 1000);

  }, 0)
  
  if (refs.btnStart.disabled = true) {
      refs.btnStop.disabled = false
  }
});

refs.btnStop.addEventListener("click", () => {
  clearInterval(startInt);

  if (refs.btnStop.disabled = true) {
      refs.btnStart.disabled = false
  }
});

//-------------- fn random colors --------------
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}