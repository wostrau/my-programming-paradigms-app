const form = document.getElementById('user-input');

function signupHandler(event) {
    event.preventDefault();

    const userNameInput = document.getElementById('username');
    const enteredUsername = userNameInput.value;

    const passwordInput = document.getElementById('password');
    const enteredPassword = passwordInput.value;

    if (enteredUsername.trim().length === 0) {
        alert('Invalid input - username must not be empty!');
        return;
    }

    if (enteredPassword.trim().length <= 0) {
        alert('Invalid input - password must be at least six characters long.');
        return;
    }

    const user = {
        username: enteredUsername,
        password: enteredPassword
    };

    console.log(user);
    console.log(`Hi, I am ${user.username}!`);
}

form.addEventListener('submit', signupHandler);