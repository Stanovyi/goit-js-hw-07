function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsinput = document.querySelector('#controls input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', onclick);
destroyButton.addEventListener('click', removeBoxes);

function onclick(e) {
  if (controlsinput.value > 0 && controlsinput.value <= 100) {
    createBoxes(controlsinput.value);
  }
}

function createBoxes(amount) {
  if (boxes.hasChildNodes) {
    boxes.innerHTML = ``;
  }

  for (let i = 0; i < amount; i++) {
    boxes.insertAdjacentHTML(
      'beforeend',
      `<div style="width: ${30 + i * 10}px; height: ${
        30 + i * 10
      }px; background-color: ${getRandomHexColor()}"></div>`
    );
  }

  controlsinput.value = '';
}

function removeBoxes(e) {
  boxes.innerHTML = ``;
}
