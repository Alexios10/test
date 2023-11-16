let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");
let car3 = document.querySelector(".car3");
let startBtn = document.querySelector(".start-btn");
let restartBtn = document.querySelector(".restart-btn");

let styles = document.createElement("style");

document.body.appendChild(styles);
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
function carRace() {
  car1.classList.add("car-animation1");
  car2.classList.add("car-animation2");
  car3.classList.add("car-animation3");
}

function restart() {
  car1.classList.remove("car-animation1");
  car2.classList.remove("car-animation2");
  car3.classList.remove("car-animation3");
  location.reload();
}

startBtn.onclick = carRace;
restartBtn.onclick = restart;
