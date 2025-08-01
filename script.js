document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("notify-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);

    fetch("https://script.google.com/macros/s/AKfycbyVdXY6AvPTNATQOPIDFugoH92UOPjNyybT9GHPMquuwRAxyatHudHhu3MFui81_V4I1g/exec", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      const message = document.getElementById("success-message");
      if (result === "Already Subscribed") {
        message.innerText = "You're already subscribed!";
      } else if (result === "Success") {
        message.innerText = "Thank you for subscribing!";
      } else {
        message.innerText = "Something went wrong. Please try again.";
      }
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 4000); // hide after 4 seconds

      document.getElementById("email").value = "";
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });
  
});
