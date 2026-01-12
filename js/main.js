document.getElementById("my-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let fromPlace = document.getElementById("from-choice").value;
  let toPlace = document.getElementById("to-choice").value;
  let departureValue = document.getElementById("departure-date").value;
  let returnValue = document.getElementById("return-date").value;
  let hasError = false;

  const returnDateField = document.getElementById("return-date-formgr");

  if (!departureValue) {
    document.getElementById("departure").textContent =
      "Please select a departure date";
    hasError = true;
  }

  if (!returnValue && !returnDateField.classList.contains("hidden")) {
    document.getElementById("return").textContent =
      "Please select a return date";
    hasError = true;
  }

  let departureDate = new Date(departureValue);
  let returnDate = new Date(returnValue);

  if (fromPlace == "empty") {
    document.getElementById("from").textContent =
      "Cannot leave this field empty";
    hasError = true;
  }

  if (toPlace == "empty") {
    document.getElementById("to").textContent = "Cannot leave this field empty";
    hasError = true;
  }

  if (fromPlace == toPlace && toPlace != "empty") {
    document.getElementById("to").textContent =
      "Cannot choose the same destination as departure city";
    hasError = true;
  }

  if (departureDate.getTime() > returnDate.getTime()) {
    document.getElementById("return").textContent =
      "Return date cannot be before departure date";
    hasError = true;
  }

  if (!hasError) window.location.href = "flightnotfound.html";
});
