function authenticateUser() {
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    // Dummy user
    const dummyUsername = 'Carlos';
    const dummyPassword = '1234';

    if (usernameInput === dummyUsername && passwordInput === dummyPassword) {
        // Hide authentication form
        document.getElementById('auth-form').style.display = 'none';

        // Show success message and link to To-Do page
        document.getElementById('auth-success').style.display = 'block';
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
}
