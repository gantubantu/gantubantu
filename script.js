document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is already authenticated
    if (!sessionStorage.getItem("authenticated")) {
        let passcode = prompt("Enter Passcode to Access 💖");

        if (passcode !== "awlee2024") {  // Change this to your actual passcode
            alert("Incorrect passcode! Try again.");
            window.location.reload(); // Reload if incorrect
        } else {
            sessionStorage.setItem("authenticated", "true"); // Store authentication in session storage
        }
    }
});
