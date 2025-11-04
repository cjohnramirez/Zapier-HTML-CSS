var modal = document.getElementById("modal");

var openButton = document.getElementById("open-modal");

var closeButton = document.getElementById("close-modal");

openButton.onclick = function () {
  modal.style.display = "flex";
};

closeButton.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("lead-form");
  const status = document.getElementById("status");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const phoneError = document.getElementById("phone-error");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    status.textContent = "";

    let isValid = true;

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
    }

    const phonePattern = /^\+?[\d\s-]{10,}$/;

    if (phoneInput.value.trim() === "") {
      phoneError.textContent = "Phone number is required.";
      isValid = false;
    } else if (!phonePattern.test(phoneInput.value)) {
      phoneError.textContent = "Enter a valid phone number.";
      isValid = false;
    }

    if (!isValid) return;

    status.textContent = "Submitting...";

    const formData = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        status.textContent = "Form submitted successfully!";
        form.reset();
      } else {
        status.textContent = "Error submitting form.";
      }
    } catch (err) {
      console.error(err);
      status.textContent = "Network error. Please try again.";
    }
  });
});
