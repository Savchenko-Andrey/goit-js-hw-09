import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

refs = {
    input: document.querySelector('#datetime-picker'),
    start: document.querySelector('button[data-start]'),

    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0]);
    },
};


flatpickr('input[type=text]', options, () => {
    
    if(qwe <= new Date()){
        window.alert("Please choose a date in the future")
        refs.start.disabled = true
    }
})


flatpickr(refs.inputDate, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      TIMERS = selectedDates[0].getTime() - DATE_NOW.getTime();
      handleRangeDate(selectedDates);
      convertMs(TIMERS);
    },
  });

refs.start.addEventListener("click", () => {
    timer.start(); 
    refs.start.disabled = true
});

const timer = {
    start() {
        const startTime = ///////??

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime
            const clockFace = convertMs(deltaTime);

            updateClockFace(clockFace)
        }, 1000)
        
    },
};



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
    refs.minutes.textContent =minutes
    refs.seconds.textContent = seconds
}