// Basic variables for elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const loginMessage = document.getElementById('login-message');
const logoutButton = document.getElementById('logout-button');
const errorMessage = document.getElementById('error-message');
const associationRules = document.getElementById('association-rules');

// Constants for correct username and password
const correctUsername = 'Bella';
const correctPassword = 'qwe123';

// Function to set login status in local storage
function setLoggedInStatus(status) {
    localStorage.setItem('isLoggedIn', status ? 'true' : 'false');
}

// Function to get login status from local storage
function getLoggedInStatus() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Function to show the login form
function showLoginForm() {
    loginMessage.textContent = '';
    logoutButton.style.display = 'none';
    loginButton.style.display = 'block';
    usernameInput.style.display = 'block';
    passwordInput.style.display = 'block';
}

// Function to show the logout button
function showLogoutButton() {
    setLoggedInStatus(true);
    logoutButton.style.display = 'block';
    loginButton.style.display = 'none';
    loginMessage.textContent = 'Welcome, you are now logged in';
}

// Function to handle logout
function handleLogout() {
    setLoggedInStatus(false);
    showLoginForm();
}

// Function to initialize the login state
function initializeLoginState() {
    const isLoggedIn = getLoggedInStatus();

    if (isLoggedIn) {
        usernameInput.style.display = 'none';
        passwordInput.style.display = 'none';
        showLogoutButton();

    } else {
        showLoginForm();
    }
}

// Check and initialize login state
initializeLoginState();

// Add an event listener to the login button
loginButton.addEventListener('click', () => {
    verifyLogin();
});

// Function to verify login credentials
function verifyLogin() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // Successful login
        setLoggedInStatus(true);
        showLogoutButton();
        loginMessage.textContent = 'Welcome, you are now logged in.';
        errorMessage.textContent = '';
        // Hide username and password inputs after successful login
        usernameInput.style.display = 'none';
        passwordInput.style.display = 'none';
    } else {
        // Incorrect login
        setLoggedInStatus(false);
        loginMessage.textContent = '';
        errorMessage.textContent = 'Login failed. Please try again.';
        if (!document.getElementById('retry-button')) {
            const retryButton = document.createElement('button');
            retryButton.id = 'retry-button';
            retryButton.className = 'button';
            retryButton.textContent = 'Retry';
            retryButton.addEventListener('click', () => {
                errorMessage.textContent = '';
                usernameInput.value = '';
                passwordInput.value = '';
                retryButton.style.display = 'none';
            });
            loginMessage.appendChild(retryButton);
        }
    }
}

// Add an event listener to the logout button
logoutButton.addEventListener('click', handleLogout);

// Display association rules text
associationRules.textContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at bibendum erat. Phasellus euismod massa justo, vel bibendum metus tristique vel. Nulla facilisi. Donec bibendum, justo a euismod congue, dolor velit ullamcorper quam, nec sodales purus tortor id quam.
`;
