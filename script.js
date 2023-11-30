document.addEventListener('DOMContentLoaded', function () {
    // Validim i e-mail
    function validateEmail(email) {
        const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return emailRegex.test(email);
    }

    // Funksioni per validim
    function validateForm() {
      const emailInput = document.querySelector('input[placeholder="E-mail"]');
      const usernameInput = document.querySelector('input[placeholder="Username"]');
      const passwordInput = document.querySelector('input[placeholder="Password"]');
      const form = document.querySelector('form');

      // Forma per e-mail
      if (!validateEmail(emailInput.value) || emailInput.value.length < 7) {
        alert('Invalid email format or length (must be at least 7 characters and contain "@")');
        return false;
      }

      // Forma per username
      if (usernameInput.value.length < 3) {
        alert('Username must be at least 3 characters');
        return false;
      }

      // Forma per password
      if (passwordInput.value.length < 4) {
        alert('Password must be at least 4 characters');
        return false;
      }

      // Nese te gjitha infot e sakta, kryhet validimin
      alert('Form submitted successfully! Redirecting to login page...');
      window.location.href = 'loginForm.html'; 
    }

    // Forma behet submit
    document.querySelector('form').addEventListener('submit', function (event) {
      event.preventDefault(); 
      validateForm();
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    function validateForm() {
        const loginForm = document.getElementById('loginForm');
        const userInput = loginForm.querySelector('input[placeholder="Username or Email"]');
        const passwordInput = loginForm.querySelector('input[placeholder="Password"]');

        // Validimi i usernameit apo e-mail it
        const usernameOrEmail = userInput.value.trim();
        if (usernameOrEmail.length === 0) {
            alert('Please enter your username or email.');
            return false;
        }

        // Validimi i pass
        if (passwordInput.value.length < 4) {
            alert('Password does not match.');
            return false;
        }

        // Forma behet submit
        alert('Form submitted successfully! Redirecting to index page...');
        window.location.href = 'index.html';
    }

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });
});