let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");
let car3 = document.querySelector(".car3");
let startBtn = document.querySelector(".start-btn");
let restartBtn = document.querySelector(".restart-btn");

let styles = document.createElement("style");

document.body.appendChild(styles);

let raceInProgress = false;

function carRace() {
  if (!raceInProgress) {
    raceInProgress = true;

    // styles.innerHTML = "";

    styles.innerHTML = `
        @keyframes moveCar {
          from {
            transform: translateX(0px);
          }
          to {
            transform: translateX(1500px);
          }
        }

        .car-animation1 {
          animation: moveCar linear ${Math.random() * 30}s  forwards;
        }
        .car-animation2 {
          animation: moveCar linear ${Math.random() * 30}s  forwards;
        }
        .car-animation3 {
          animation: moveCar linear ${Math.random() * 30}s  forwards;
        }
      `;
    car1.classList.add("car-animation1");
    car2.classList.add("car-animation2");
    car3.classList.add("car-animation3");
  }
}

function restart() {
  raceInProgress = false;

  car1.classList.remove("car-animation1");
  car2.classList.remove("car-animation2");
  car3.classList.remove("car-animation3");
}

startBtn.onclick = carRace;

restartBtn.onclick = restart;
