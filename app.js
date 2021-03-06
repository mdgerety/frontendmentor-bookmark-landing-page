const featuresButton1 = document.getElementById('features-button-1');
const featuresButton2 = document.getElementById('features-button-2');
const featuresButton3 = document.getElementById('features-button-3');

const featureTab1 = document.getElementById('feature-tab-1');
const featureTab2 = document.getElementById('feature-tab-2');
const featureTab3 = document.getElementById('feature-tab-3');

const contactForm = document.getElementById('contact-form');
const contactInput = document.getElementById('contact-input');
const contactButton = document.getElementById('contact-button');

featuresButton1.focus();

featureTab1.className = "feature-tab-1 selected";

featuresButton1.addEventListener('click', () => {
  featureTab1.classList.add('selected');
  featureTab2.classList.remove('selected');
  featureTab3.classList.remove('selected');
})

featuresButton2.addEventListener('click', () => {
  featureTab1.classList.remove('selected');
  featureTab2.classList.add('selected');
  featureTab3.classList.remove('selected');
})

featuresButton3.addEventListener('click', () => {
  featureTab1.classList.remove('selected');
  featureTab2.classList.remove('selected');
  featureTab3.classList.add('selected');
})

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let input = contactInput.value.trim();
  if (input === '') {
    contactInput.classList.add('error');
  } else if(!isEmail(input)) {
    contactInput.classList.add('error');
  } else {
    alert('Success!');
    contactInput.classList.remove('error');
    contactInput.classList.add('success');
  }

  contactInput.innerHTML === '';
})

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
