<script>
    document.addEventListener("DOMContentLoaded", function () {
        const signInButton = document.getElementById("signInText");

        if (signInButton) {
            signInButton.addEventListener("click", function (event) {
                event.preventDefault();
                window.location.href = "ready-to-sell.html";
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

<!-- Keep everything above the same -->

<script>
  // Set Seller Since date
  const signupDate = new Date();
  const options = { year: 'numeric', month: 'long' };
  document.getElementById("signupDate").textContent = signupDate.toLocaleDateString(undefined, options);

  // Profile picture preview
  function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function(){
      const preview = document.querySelector(".profile-pic-preview");
      preview.style.backgroundImage = `url(${reader.result})`;
      preview.style.backgroundSize = 'cover';
      preview.style.backgroundPosition = 'center';
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  // Portfolio image previews
  document.querySelectorAll('.portfolio-item input[type="file"]').forEach((input, index) => {
    input.addEventListener('change', function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function(e) {
        const preview = input.parentElement.querySelector('.portfolio-preview');
        preview.style.backgroundImage = `url(${e.target.result})`;
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    });
  });

  // Go back button
  document.querySelector(".back-btn").addEventListener("click", function() {
    window.location.href = "ready-to-sell.html";
  });

  // ✅ Continue button
  document.querySelector(".continue-btn").addEventListener("click", function() {
    window.location.href = "availability.html";
  });

  // Price input formatting
  document.querySelectorAll('.price-input').forEach(input => {
    const originalPlaceholder = input.placeholder;

    input.addEventListener('focus', () => {
      input.placeholder = '';
    });

    input.addEventListener('blur', () => {
      if (!input.value.trim()) {
        input.placeholder = originalPlaceholder;
      }
    });

    input.addEventListener('input', () => {
      let value = input.value.replace(/[^\d.]/g, '');
      const parts = value.split('.');
      if (parts.length > 2) {
        value = parts[0] + '.' + parts.slice(1).join('');
      }
      if (value) {
        input.value = `$${value}`;
      } else {
        input.value = '';
      }
    });
  });
</script>

<script>
  // Load the user's profile picture from localStorage
  window.onload = () => {
    const data = JSON.parse(localStorage.getItem('profileData')) || {};
    if (data.profilePic) {
      document.getElementById('profile-pic').src = data.profilePic;
    }
  };

  // Navigate to edit-profile.html when the profile picture is clicked
  document.getElementById('profile-btn').addEventListener('click', () => {
    window.location.href = 'edit-profile.html';
  });
</script>
