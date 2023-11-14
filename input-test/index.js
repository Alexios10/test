let textInput = document.querySelector("#text-input");
let addBtn = document.querySelector("#add-btn");
let removeBtn = document.querySelector("#remove-btn");
let outputDiv = document.querySelector(".output-div");

let arr = [];
let inputValue;
function addItem() {
  inputValue = textInput.value;
  arr.push(inputValue);
  outputDiv.innerHTML += `<ul><li>${inputValue}</li></ul>`;
  textInput.value = "";

  if (inputValue === "") {
    outputDiv.innerHTML = "";
  }
}

function removeItem() {
  arr.pop();
  updateList();
}

function updateList() {
  outputDiv.innerHTML = "";
  arr.forEach((item) => {
    outputDiv.innerHTML += `<ul><li>${item}</li></ul>`;
  });
}

textInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addItem();
  }
});

addBtn.onclick = addItem;
removeBtn.onclick = removeItem;
