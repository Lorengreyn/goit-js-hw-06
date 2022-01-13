function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorName = document.querySelector('.color');
const changeBgColor = document.querySelector('.change-color');

changeBgColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  colorName.textContent = color;
  document.body.style.backgroundColor = color;
});
