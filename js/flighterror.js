document.getElementById("my-form2").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let inputText = document.getElementById("email").value;
  let errorLabel = document.getElementById("email-label");
  if (!emailRegex.test(inputText)) {
    errorLabel.textContent = "E-mail is incorrectly written";
    return false;
  }
  localStorage.setItem("showNotification", "true");
  console.log(localStorage.getItem("showNotification"));
  window.location.href = "index.html";
  return true;
});
