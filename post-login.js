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
