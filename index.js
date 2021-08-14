// const days = document.querySelector('[data-value="days"]');
// const hours = document.querySelector('[data-value="hours"]');
// const mins = document.querySelector('[data-value="mins"]');
// const secs = document.querySelector('[data-value="secs"]');

// function init(time) {
//   days.innerHTML = Math.floor(time / (1000 * 60 * 60 * 24));

//   hours.innerHTML = Math.floor(
//     (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );

//   mins.innerHTML = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

//   secs.innerHTML = Math.floor((time % (1000 * 60)) / 1000);
// }

function CountdownTimer(initOb) {
  this.targetDate = initOb.targetDate;
  this.selector = initOb.selector;

  this.refs = {
    days: document.querySelector(` ${this.selector} [data-value="days"]`),
    hours: document.querySelector(` ${this.selector} [data-value="hours"]`),
    mins: document.querySelector(` ${this.selector} [data-value="mins"]`),
    secs: document.querySelector(` ${this.selector} [data-value="secs"]`),
  };

  this.showTimer = () => {
    const time = this.targetDate - Date.now();
    this.refs.days.innerHTML = Math.floor(time / (1000 * 60 * 60 * 24));

    this.refs.hours.innerHTML = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );

    this.refs.mins.innerHTML = pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );

    this.refs.secs.innerHTML = pad(Math.floor((time % (1000 * 60)) / 1000));
  };

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  this.showTimer();

  this.start = () => {
    this.intervalId = setInterval(() => {
      const time = this.targetDate - Date.now();

      time > 0 ? this.showTimer() : clearInterval(this.intervalId);
    }, 1000);
  };
}

const Timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date(2021, 8, 15),
});

Timer.start();

// const time = null;
// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
