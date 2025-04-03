<script>
    document.addEventListener("DOMContentLoaded", function () {
        const signInButton = document.getElementById("signInText");

        if (signInButton) {
            signInButton.addEventListener("click", function (event) {
                event.preventDefault();
                window.location.href = "sign-in.html";
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
            window.location.href = "sign-in.html"; // Redirect to the Sign-In page
        });
    }
});

// Wait until the page loads before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Get the "Home" button element by ID
    const homeButton = document.getElementById("homeButton");

    // Check if the button exists before adding an event listener
    if (homeButton) {
        homeButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default behavior
            window.location.href = "index.html"; // Redirect to Home page
        });
    }
});

</script>
