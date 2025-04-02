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
</script>
