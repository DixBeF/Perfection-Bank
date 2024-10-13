// script.js

// Name validation
const nameInput = document.getElementById('name');
const nameFeedback = document.getElementById('nameFeedback');
const maxLength = 30;

nameInput.addEventListener('input', () => {
    const currentLength = nameInput.value.length;
    
    if (currentLength === 0) {
        nameFeedback.textContent = '';
    } else if (currentLength > maxLength) {
        nameFeedback.textContent = 'Name is too long. Please enter a valid name.';
        nameFeedback.style.color = 'red';
    } else {
        nameFeedback.textContent = `Maximum characters is 30`;
        nameFeedback.style.color = 'black';
    }
});

// Password validation
const passwordInput = document.getElementById('password');
const passwordFeedback = document.getElementById('passwordFeedback');

passwordInput.addEventListener('input', () => {
    const passwordValue = passwordInput.value;
    
    const hasUpperCase = /[A-Z]/.test(passwordValue);
    const hasNumber = /\d/.test(passwordValue);
    
    if (passwordValue.length < 8) {
        passwordFeedback.textContent = 'Password must be at least 8 characters long.';
        passwordFeedback.style.color = 'red';
    } else if (!hasUpperCase) {
        passwordFeedback.textContent = 'Password must contain at least one uppercase letter.';
        passwordFeedback.style.color = 'red';
    } else if (!hasNumber) {
        passwordFeedback.textContent = 'Password must contain at least one number.';
        passwordFeedback.style.color = 'red';
    } else {
        passwordFeedback.textContent = 'Password is valid.';
        passwordFeedback.style.color = 'green';
    }
});

const form = document.querySelector('.form'); // Select the form element

form.addEventListener('submit', (event) => {
    // Prevent the form from submitting
    event.preventDefault();
    
    const nameValid = nameInput.value.length > 0 && nameInput.value.length <= maxLength;
    const passwordValue = passwordInput.value;
    const passwordValid = passwordValue.length >= 8 && 
                          /[A-Z]/.test(passwordValue) && 
                          /\d/.test(passwordValue);

    // If all fields are valid, simulate form submission
    if (nameValid && passwordValid) {
        console.log("Form submitted successfully!");
        // Uncomment the line below to simulate a successful submission
         form.submit();
    } else {
        // If not valid, show error messages
        if (!nameValid) {
            nameFeedback.textContent = 'Please enter a valid name.';
            nameFeedback.style.color = 'red';
        }
        if (!passwordValid) {
            passwordFeedback.textContent = 'Please ensure your password meets all criteria.';
            passwordFeedback.style.color = 'red';
        }
    }
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!nameInput.value || nameInput.value.length > maxLength || !passwordInput.value) {
        alert('Please fill out all fields correctly.');
        return; 
    }
    window.location.href = 'mainpage.html';
});
