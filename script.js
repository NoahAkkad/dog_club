// Retrieve elements from the HTML document
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const loginMessage = document.getElementById('login-message');
const logoutButton = document.getElementById('logout-button');
const errorMessage = document.getElementById('error-message');
const associationRules = document.getElementById('association-rules');

// Set constant variables for username and password
const correctUsername = 'Bella';
const correctPassword = 'qwe123';

// Check if the user is already logged in
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// Set isLoggedIn to false by default if it's not set in localStorage
if (isLoggedIn === null) {
    localStorage.setItem('isLoggedIn', 'false');
}

// Function to show the incorrect login message and retry button
function showIncorrectLoginMessage() {
    errorMessage.textContent = 'Login failed. Please try again.';
    const retryButton = document.createElement('button');
    retryButton.className = 'button';
    retryButton.textContent = 'Retry';
    retryButton.addEventListener('click', () => {
        errorMessage.textContent = '';
        usernameInput.value = '';
        passwordInput.value = '';
        showLoginForm();
    });
    loginMessage.appendChild(retryButton);
    
}
// Function to show the login form
function showLoginForm() {
    loginMessage.textContent = '';
    logoutButton.style.display = 'none';
    loginButton.style.display = 'block';
}

// Function to handle login attempts
function handleLogin() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // Successful login
        localStorage.setItem('isLoggedIn', 'true');
        loginMessage.textContent = 'Welcome, you are now logged in';
        showLogoutButton();
        
    } else {
        // Incorrect login
        showIncorrectLoginMessage();
    }
}
// Function to show the logout button
function showLogoutButton() {
    logoutButton.style.display = 'block';
    loginButton.style.display = 'none';
}

// Function to handle logout
function handleLogout() {
    localStorage.setItem('isLoggedIn', 'false');
    showLoginForm();
    loginButton.textContent = 'Log In'; 
}
// Add event listeners
loginButton.addEventListener('click', () => {
    if (isLoggedIn) {
        // If already logged in, log out
        handleLogout();
    } else {
        // If not logged in, attempt login
        handleLogin();
    }
});
logoutButton.addEventListener('click', handleLogout);

// Check if user is already logged in and act accordingly
if (isLoggedIn) {
    logoutButton();
} else {
    showLoginForm();
}

// Display association rules text
associationRules.textContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at bibendum erat. Phasellus euismod massa justo, vel bibendum metus tristique vel. Nulla facilisi. Donec bibendum, justo a euismod congue, dolor velit ullamcorper quam, nec sodales purus tortor id quam.
`;