const input = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');

input.addEventListener('input', changeGreeting);

function changeGreeting(e) {
  if (e.target.value.trim() === '') {
    span.innerText = 'Anonymous';
  } else {
    span.innerText = e.target.value.trim();
  }
}
