<script>
    document.addEventListener("DOMContentLoaded", function () {
        const signUpButton = document.getElementById("signUpText");

        if (signUpButton) {
            signUpButton.addEventListener("click", function (event) {
                event.preventDefault();
                window.location.href = "profile.html";
            });
        }
    });
// Wait until the page loads before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Get the "Sign In" button element by ID
    const signUpButton = document.getElementById("signUpText");

    // Check if the button exists before adding an event listener
    if (signUpButton) {
        signUpButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = "profile.html"; // Redirect to the Sign-In page
        });
    }
});

</script>
