// form-handler.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      responseMessage.textContent = `Thank you, ${name}! Your message has been received.`;
      responseMessage.style.display = "block";

      // Reset form fields
      form.reset();
    } else {
      alert("Please fill in all fields before submitting the form.");
    }
  });
});
