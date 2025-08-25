document.getElementById("applicationForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent actual submission

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();
  let errorMsg = document.getElementById("error-message");

  // Reset error message
  errorMsg.innerHTML = "";

  // Basic validation
  if (name === "" || email === "" || phone === "" || message === "") {
    errorMsg.innerHTML = "⚠️ All fields are required!";
    return;
  }

  // Email validation (simple regex)
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.innerHTML = "⚠️ Please enter a valid email address.";
    return;
  }

  // Phone validation (only digits, min 8-10 chars)
  let phonePattern = /^[0-9]{8,15}$/;
  if (!phonePattern.test(phone)) {
    errorMsg.innerHTML = "⚠️ Please enter a valid phone number (8-15 digits).";
    return;
  }

  // If everything is valid
  alert("✅ Form submitted successfully!");
  document.getElementById("applicationForm").reset();
});
