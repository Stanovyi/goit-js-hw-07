const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (
    e.target.elements.email.value.trim() === '' ||
    e.target.elements.password.value.trim() === ''
  ) {
    alert('All form fields must be filled in');
  } else {
    console.log({
      email: e.target.elements.email.value.trim(),
      password: e.target.elements.password.value.trim(),
    });

    form.reset();
  }
}
