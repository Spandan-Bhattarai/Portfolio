const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the input values and trim whitespace
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Validate the input fields
  if (name === '') {
    showError(nameInput, 'Name cannot be empty');
  } else {
    showSuccess(nameInput);
  }

  if (email === '') {
    showError(emailInput, 'Email cannot be empty');
  } else if (!isValidEmail(email)) {
    showError(emailInput, 'Email is not valid');
  } else {
    showSuccess(emailInput);
  }

  if (message === '') {
    showError(messageInput, 'Message cannot be empty');
  } else {
    showSuccess(messageInput);
  }

  // Submit the form if all input fields are valid
  if (isValidInput(name, email, message)) {
    form.submit();
  }
});

// Validate email using a regular expression
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Check if all input fields are valid
function isValidInput(name, email, message) {
  return name !== '' && isValidEmail(email) && message !== '';
}

// Show error message for an input field
function showError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('.error-message');

  formControl.classList.add('error');
  errorMessage.innerText = message;
}

// Show success message for an input field
function showSuccess(input) {
  const formControl = input.parentElement;

  formControl.classList.remove('error');
  formControl.classList.add('success');
}

// Reset the form after submission
function resetForm() {
  form.reset();

  // Remove success classes from input fields
  const formControls = document.querySelectorAll('.form-control');
  formControls.forEach((formControl) => {
    formControl.classList.remove('success');
  });
}

// Show thank you message after form submission
function showThankYouMessage() {
  const formContainer = document.querySelector('.form-container');
  formContainer.innerHTML = '<p>Thank you for your message!</p>';
}

// Handle form submission success and error
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    resetForm();
    showThankYouMessage();
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error submitting your form. Please try again later.');
  }
});
