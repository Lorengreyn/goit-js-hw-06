function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesCreate = document.querySelector('#boxes');
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const removeBtn = document.querySelector("[data-destroy]");
let size = 20;

createBtn.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});

removeBtn.addEventListener("click", () => {
  removeBoxes();
});


const createBoxes = amount => {
  const boxes = [];
  while (boxes.length < amount) {
    size += 10;
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.classList.add("box");
    boxes.push(box);
  }
  boxesCreate.append(...boxes);
};

const removeBoxes = () => {
  const boxes = boxesCreate.querySelectorAll(".box");
  size = 20;
  for (const box of boxes) {
    box.remove();
  }
};