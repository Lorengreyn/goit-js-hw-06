const textRange = document.querySelector('#font-size-control');


textRange.addEventListener("input", (event) => {
    let value = textRange.value;
    let textSize = document.getElementById('text');
    textSize.style.fontSize = `${value}px`;
});