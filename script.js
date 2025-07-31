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
      mode: "no-cors",
      body: formData
    });

    document.getElementById("success-message").style.display = "block";
    document.getElementById("email").value = "";
  });
});