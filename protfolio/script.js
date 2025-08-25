// Just for fun, add a simple alert when form is submitted
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for your message! (Form not functional)");
});
