document.addEventListener('DOMContentLoaded', function() {
    // Function to validate name and city fields
    function validateTextField(input, type) {
        const value = input.value;
        const regex = /^[a-zA-Z\s]*$/; // Allow letters and spaces
        const errorMessage = `${type} must contain only letters .`;

        if (!regex.test(value)) {
            displayError(input, errorMessage);
            return false;
        } else {
            clearError(input);
            return true;
        }
    }

    // Function to validate email
    function validateEmail(input) {
        const value = input.value;
        if (value.includes('@') && value.includes('.')) {
            clearError(input);
            return true;
        } else {
            displayError(input, 'Please enter a valid Email ID with "@" and "."');
            return false;
        }
    }

    // Function to validate contact number
    function validateContact(input) {
        let value = input.value;
        const regex = /^\d{0,10}$/; // Limit input to 10 digits
        if (!regex.test(value)) {
            input.value = value.replace(/\D/g, ''); // Remove non-digit characters
        }
        if (value.length !== 10) {
            displayError(input, 'Contact Number must be exactly 10 digits long.');
            return false;
        } else {
            clearError(input);
            return true;
        }
    }

    function displayError(input, message) {
        input.style.borderColor = 'red'; // Highlight the input
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains('error-message')) {
            error = document.createElement('div');
            error.className = 'error-message';
            input.parentNode.insertBefore(error, input.nextSibling);
        }
        error.textContent = message;
    }

    function clearError(input) {
        input.style.borderColor = ''; // Remove border color
        let error = input.nextElementSibling;
        if (error && error.classList.contains('error-message')) {
            error.remove();
        }
    }

    // Attach event listeners
    document.getElementById('firstName').addEventListener('input', function() {
        validateTextField(this, 'First Name');
    });

    document.getElementById('lastName').addEventListener('input', function() {
        validateTextField(this, 'Last Name');
    });

    document.getElementById('city').addEventListener('input', function() {
        validateTextField(this, 'City');
    });

    document.getElementById('email').addEventListener('blur', function() {
        validateEmail(this);
    });

    document.getElementById('contact').addEventListener('input', function() {
        validateContact(this);
    });

    // Form Submission
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const city = document.getElementById('city');
        const email = document.getElementById('email');
        const contact = document.getElementById('contact');

        // Perform final validation checks
        const isFirstNameValid = validateTextField(firstName, 'First Name');
        const isLastNameValid = validateTextField(lastName, 'Last Name');
        const isCityValid = validateTextField(city, 'City');
        const isEmailValid = validateEmail(email);
        const isContactValid = validateContact(contact);

        if (isFirstNameValid && isLastNameValid && isCityValid && isEmailValid && isContactValid) {
            alert('Registration Completed!');
            // Optionally clear form fields
            // document.getElementById('registrationForm').reset();
        } else {
            alert('Please correct the errors in the form.');
        }
    });
});






