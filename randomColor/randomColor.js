let startBtn = document.querySelector("#start-btn");
let outputDiv = document.querySelector(".output");
let stopBtn = document.querySelector("#stop-btn");
let refreshBtn = document.querySelector("#refresh-btn");

let interVal;
let output;

function showRandomColor() {
  interVal = setInterval(function () {
    let color = [
      "red",
      "blue",
      "green",
      "purple",
      "gold",
      "yellow",
      "cyan",
      "black",
    ];

    let randomIdx = Math.floor(Math.random() * color.length);

    output = color[randomIdx];

    outputDiv.innerHTML = `<p>${output}</p>`;
    outputDiv.style.backgroundColor = output;
    output === "black"
      ? (outputDiv.style.color = "white")
      : (outputDiv.style.color = "black");
  }, 1000);
}

stopBtn.addEventListener("click", function () {
  clearInterval(interVal);

  (outputDiv.innerHTML = `${
    !output
      ? `<p class="error">You must click the <span class="err-start">start</span>  button first</p>`
      : `You Stopped at the color ${output} ! Click the refresh button to start again`
  } `),
    (outputDiv.style.backgroundColor = output),
    output === "black"
      ? (outputDiv.style.color = "white")
      : (outputDiv.style.color = "black");
});

//
startBtn.addEventListener("click", showRandomColor, { once: true });

refreshBtn.onclick = function () {
  (outputDiv.innerHTML = `${
    !output
      ? `<p class="error">You must click the <span class="err-start">start</span> button first</p>`
      : `${(outputDiv.style.backgroundColor =
          "")} <p class="refreshed">You have refreshed now you can click the start button again:-)</p>`
  } `),
    (outputDiv.style.color = "black");
  startBtn.addEventListener("click", showRandomColor, { once: true });
};
