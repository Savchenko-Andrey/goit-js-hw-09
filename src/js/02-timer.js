import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    input: document.querySelector('#datetime-picker'),
    start: document.querySelector('button[data-start]'),

    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

refs.start.disabled = true
let userInputDate = 0;
const timeNow = new Date()
let setIntervalId


flatpickr(refs.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userInputDate = selectedDates[0].getTime() - timeNow.getTime();
    convertMs(userInputDate)

    if(selectedDates[0] <= timeNow){
      return Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('Correct date');
      refs.start.disabled = false
      refs.input.disabled = true
    }
  },
});


refs.start.addEventListener("click", () => {
      timer.start(); 
      refs.start.disabled = true
});


const timer = {
    start() {
       setIntervalId = setInterval(() => {
          userInputDate -= 1000;
            const funcTime = convertMs(userInputDate);
            updateClockFace(funcTime)
            stopTimer(funcTime);
        }, 1000)
    },
};

function stopTimer(time) {
  const { days, hours, minutes, seconds } = time;
  if (days === '00' && hours === '00' && minutes === '00' && seconds === '00') {
    clearInterval(setIntervalId);
  }
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
};

function updateClockFace ({ days, hours, minutes, seconds }) {
    refs.days.textContent = days
    refs.hours.textContent = hours
    refs.minutes.textContent = minutes
    refs.seconds.textContent = seconds
}
