function validateForm() {
	// Reset error messages
	clearErrors();

	// Get form values
	var fullName = document.getElementById('fullName').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var confirmPassword = document.getElementById('confirmPassword').value;

	// Simple email validation
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		displayError('email', 'Please enter a valid email address.');
		return;
	}

	// Password match validation
	if (password !== confirmPassword) {
		displayError('confirmPassword', 'Passwords do not match.');
		return;
	}

	// If all validations pass, you can proceed with form submission or other actions
	alert('Registration successful!');

	// For demonstration purposes, you can submit the form to a server here if needed
	// document.getElementById('registrationForm').submit();
}

function displayError(field, message) {
	var errorMessage = document.createElement('div');
	errorMessage.className = 'error-message';
	errorMessage.innerHTML = message;
	document.getElementById(field).parentNode.appendChild(errorMessage);
}

function clearErrors() {
	var errorMessages = document.getElementsByClassName('error-message');
	while (errorMessages.length > 0) {
		errorMessages[0].parentNode.removeChild(errorMessages[0]);
	}
}