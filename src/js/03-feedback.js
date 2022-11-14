import throttle from 'lodash.throttle';
const LSTORAGE_KEY = 'feedback-form-state';

const userData = {};

const stateForm = document.querySelector('.feedback-form');
console.log(stateForm);

stateForm.addEventListener('input', throttle(onFormInput, 500));
stateForm.addEventListener('submit', onFormSubmit);

addTextToInput();

function onFormInput(evt) {
  userData[evt.target.name] = evt.target.value;
  localStorage.setItem(LSTORAGE_KEY, JSON.stringify(userData));
}
function onFormSubmit(evt) {
    evt.preventDefault();
    
    if (localStorage.getItem(LSTORAGE_KEY)) {
      console.log(JSON.parse(localStorage.getItem(LSTORAGE_KEY)));
    }
    evt.currentTarget.reset();
    localStorage.removeItem(LSTORAGE_KEY);
};

function addTextToInput() {
  if (JSON.parse(localStorage.getItem(LSTORAGE_KEY))) {
    stateForm.email.value = JSON.parse(localStorage.getItem(LSTORAGE_KEY)).email|| ''
    stateForm.message.value = JSON.parse(localStorage.getItem(LSTORAGE_KEY)).message|| ''
  }
}