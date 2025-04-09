<script>
    document.addEventListener("DOMContentLoaded", function () {
        const signInButton = document.getElementById("signInText");

        if (signInButton) {
            signInButton.addEventListener("click", function (event) {
                event.preventDefault();
                window.location.href = "profile.html";
            });
        }
    });
// Wait until the page loads before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Get the "Sign In" button element by ID
    const signInButton = document.getElementById("signInText");

    // Check if the button exists before adding an event listener
    if (signInButton) {
        signInButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = "profile.html"; // Redirect to the Sign-In page
        });
    }
});

</script>
