document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        document.getElementById("message").innerText = "Please fill in all fields.";
    } else {
        // Perform login authentication here (e.g., send a request to the server)
        // For this example, we'll just display a success message
        document.getElementById("message").innerText = "Login successful!";
    }
});