function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const widgetSpan = document.querySelector('span.color');

button.addEventListener('click', onClick);

function onClick() {
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
  widgetSpan.textContent = document
    .querySelector('body')
    .getAttribute('style')
    .split(': ')[1];
}
