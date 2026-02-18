//#region const
const flights = [
  { id: 1, from: "TGD", to: "FRA", price: 250, seats: 5, duration: "2h 10m" },
  { id: 2, from: "TGD", to: "ZRH", price: 500, seats: 2, duration: "1h 45m" },
  { id: 3, from: "TIV", to: "CDG", price: 200, seats: 8, duration: "2h 30m" },
  { id: 4, from: "TIV", to: "FRA", price: 170, seats: 0, duration: "2h 15m" },
  { id: 5, from: "TGD", to: "ZRH", price: 300, seats: 2, duration: "1h 45m" },
  { id: 6, from: "TGD", to: "FRA", price: 120, seats: 5, duration: "2h 10m" },
];

//#region Pages

//#endregions
//#region FORM

//#endregion

//#endregion

let pathNameArray = window.location.pathname.split("/");
let pathname = "/" + pathNameArray[pathNameArray.length - 1];
if (pathname == "/") {
  pathname = "/" + "index.html";
}

//#region FUNCTION CREATE ELEMENT
function createElementWithClass(tag, className) {
  let element = document.createElement(tag);
  element.className = className;
  return element;
}

function appendChildToParent(parent, child) {
  parent.appendChild(child);
}

//#endregion

//#region GLOBAL FUNCTION
function addFlightSelectionListener() {
  const buttons = document.querySelectorAll(".select-flight");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      localStorage.setItem("showNotification2", "true");
      window.location.href = "index.html";
    });
  });
}

function printNav() {
  navDiv.id = "navbar";
  navId = document.getElementById("navbar");
  var navigationBootstrap = {
    SKYADRIA: `<a class="navbar-brand" href="index.html">SKYADRIA</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>`,
    NavbarContent: ` <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="contactus.html">Contact us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="author.html">Author</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="SkyAdria.zip" download>Download Zip</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="SkyAdriaDoc.pdf">Documentation</a>
            </li>
            
          </ul>
        </div>`,
  };
  var navPrint = "";
  for (let link in navigationBootstrap) {
    navPrint += navigationBootstrap[link];
  }
  navId.innerHTML = navPrint;
}

function printHero() {
  heroDiv.id = "hero";
  const heroId = document.getElementById("hero");
  var heroContent = {
    HEROLEFT: ` <div class="hero-left">
        <h1>SKYADRIA</h1>
        <p>Inspired by the Sea. Perfected in the Sky.</p>
      </div>`,
    BOOKINGFORM: `<div class="booking-form">
        <form id="my-form" name="my-form">
          <div class="trip-type">
            <label
              ><input type="radio" name="trip" checked value="round" /> Round
              Trip</label
            >
            <label
              ><input type="radio" name="trip" value="oneway" /> One Way</label
            >
          </div>

          <div class="form-group">
            <label for="from-choice" id="from">From</label>
            <select id="from-choice">
              <option value="empty"></option>
              <option value="TGD">Podgorica (TGD)</option>
              <option value="TIV">Tivat (TIV)</option>
            </select>
          </div>

          <div class="form-group">
            <label for="to-choice" id="to">To</label>
            <select id="to-choice">
              <option value="empty"></option>
              <option value="FRA">Frankfurt (FRA)</option>
              <option value="ZRH">Zurich (ZRH)</option>
              <option value="CDG">Paris (CDG)</option>
              <option value="TGD">Podgorica (TGD)</option>
            </select>
          </div>

          <div class="form-group">
            <label id="departure">Departure Date</label>
            <input type="date" id="departure-date" />
          </div>

          <div class="form-group" id="return-date-formgr">
            <label id="return">Return Date</label>
            <input type="date" id="return-date" />
          </div>

          <button type="submit">Search Flights</button>
        </form>
      </div>`,
  };

  var heroPrint = "";
  for (let key in heroContent) {
    heroPrint += heroContent[key];
  }
  heroId.innerHTML = heroPrint;
}

function printAboutUs() {
  const aboutClass = document.querySelector(".about");
  var aboutContent = {
    ABOUTTEXT: `<div class="about-text">
    <h2>ABOUT US</h2>
    <p>
      SkyAdria is a premium European airline inspired by the calm strength of
      the Adriatic Sea. Based in Montenegro, we connect the region to the world
      with precision, comfort, and understated elegance.
    </p>
  </div>`,
    ABOUTIMG: `<div class="about-image"></div>`,
  };
  var aboutPrint = "";
  for (let key in aboutContent) {
    aboutPrint += aboutContent[key];
  }
  aboutClass.innerHTML = aboutPrint;
}
function printFooter() {
  const footerClass = document.querySelector(".footer");
  var footerContent = {
    BRAND: `<div id="footer-brand">
    <h3>SKYADRIA</h3>
  </div>`,
    LINKS: `<div class="site-links d-flex flex-column">
    <h4>Site Links</h4>
    <ul class="text-decoration-none">
      <li>
        <a href="index.html" class="text-decoration-none">SKYADRIA</a>
      </li>
      <li><a href="author.html" class="text-decoration-none">Author</a></li>
      <li>
        <a href="SkyAdria.zip" download class="text-decoration-none"
          >Download Zip</a
        >
      </li>
      <li>
        <a href="SkyAdriaDoc.pdf" class="text-decoration-none">Documentation</a>
      </li>
      <li>
        <a class="nav-link" href="contactus.html">Contact us</a>
      </li> 
    </ul>
  </div>`,
  };
  var footerPrint = "";
  for (let key in footerContent) {
    footerPrint += footerContent[key];
  }
  footerClass.innerHTML = footerPrint;
}
function printflightnotfound() {
  const flightnotfoundClass = document.querySelector(".hero2");
  var flightnotfoundContent = {
    INFO: `<div id="info" class="text-center">
    <h1>Your flight is unavailable</h1>
    <p>We are sorry to inform You, but Your flight for selected destination or date is unavailable, please return to the main page.
    </p>
    </div>`,
    FORM: `<div class="booking-form">
    <form id="my-form2" name="my-form2">
    <button type="submit">Return Home</button></form> </div>`,
  };
  var flightnotfoundPrint = "";
  for (let key in flightnotfoundContent) {
    flightnotfoundPrint += flightnotfoundContent[key];
  }
  flightnotfoundClass.innerHTML = flightnotfoundPrint;
}

function printContactUs() {
  const contactUsClass = document.querySelector(".hero");
  var contactUsContent = {
    LEFT: `<div class="hero-left">
        <h1>Have questions?</h1>
        <p>Send us an e-mail and our customer support staff will help you</p>
      </div>`,
    BOOKINGFORM: `<div class="booking-form">
        <form id="my-form3" name="my-form3">
          <div class="form-group">
            <label for="name" id="name-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              class="form-control"
              required
            />
          </div>

          <div class="form-group">
            <label for="e-mail" id="e-mail-label">E-mail</label>
            <input
              type="email"
              name="email"
              id="e-mail"
              placeholder="E-mail address"
              class="form-control"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject" id="subject-label">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              class="form-control"
              required
            />
          </div>

          <div class="form-group">
            <label for="message" id="message-label">E-mail</label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              class="form-control"
              required
            ></textarea>
          </div>

          <button type="submit" id="submit">Send E-mail</button>
        </form>
      </div>`,
  };
  var contactUsPrint = "";
  for (let key in contactUsContent) {
    contactUsPrint += contactUsContent[key];
  }
  contactUsClass.innerHTML = contactUsPrint;
}

function printFlights(flightArray, parentDiv) {
  const heroDiv = createElementWithClass("div", "hero2");
  appendChildToParent(parentDiv, heroDiv);

  const infoDiv = createElementWithClass("div", "info");
  infoDiv.innerHTML = `
    <h1>Available Flights</h1>
    <p>Choose your preferred SkyAdria flight and we will do the rest!</p>
  `;
  appendChildToParent(heroDiv, infoDiv);

  const bookingDiv = createElementWithClass("div", "booking-form");

  const sortDiv = createElementWithClass("div", "form-group");
  const sortBtn = document.createElement("button");
  sortBtn.id = "sort-price";
  sortBtn.textContent = "Sort by Price (Low → High)";
  appendChildToParent(sortDiv, sortBtn);
  appendChildToParent(bookingDiv, sortDiv);

  let isAscending = true;

  const resultsContainer = createElementWithClass("div", "");
  resultsContainer.id = "flight-results";
  appendChildToParent(bookingDiv, resultsContainer);

  appendChildToParent(heroDiv, bookingDiv);

  flightArray.forEach((flight) => {
    const card = createElementWithClass("div", "flight-card");
    card.innerHTML = `
      <h3>${flight.from} → ${flight.to}</h3>
      <p>Duration: ${flight.duration}</p>
      <p>Price: ${flight.price}€</p>
      <p>Available seats: ${flight.seats}</p>
      <button data-id="${flight.id}" class="select-flight">
        Select Flight
      </button>
    `;
    appendChildToParent(resultsContainer, card);
  });

  sortBtn.addEventListener("click", () => {
    const sortedFlights = [...flightArray].sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price,
    );

    // Update button text to show NEXT action
    sortBtn.textContent = isAscending
      ? "Sort by Price (High → Low)"
      : "Sort by Price (Low → High)";

    isAscending = !isAscending;

    const resultsContainer = document.getElementById("flight-results");
    resultsContainer.innerHTML = "";

    sortedFlights.forEach((flight) => {
      const card = document.createElement("div");
      card.className = "flight-card";
      card.innerHTML = `
      <h3>${flight.from} → ${flight.to}</h3>
      <p>Duration: ${flight.duration}</p>
      <p>Price: ${flight.price}€</p>
      <p>Available seats: ${flight.seats}</p>
      <button data-id="${flight.id}" class="select-flight">
        Select Flight
      </button>
    `;
      resultsContainer.appendChild(card);
    });

    addFlightSelectionListener();
  });

  addFlightSelectionListener();
}

//#endregion

//#region NAVIGATION
var navDiv = createElementWithClass("nav");
appendChildToParent(document.body, navDiv);
navDiv.classList.add("navbar", "navbar-expand-lg", "bg-body-tertiary");
navDiv.id;
printNav();

//#endregion

//#region INDEX strana specific
if (pathname == "/index.html") {
  //printovi
  var heroDiv = createElementWithClass("div", "hero");
  appendChildToParent(document.body, heroDiv);
  printHero();
  const todayDate = new Date();
  var departureId = document.getElementById("departure-date");
  var returnId = document.getElementById("return-date");
  const today = todayDate.toISOString().split("T")[0];
  departureId.setAttribute("min", today);
  returnId.setAttribute("min", today);
  var aboutUsDiv = createElementWithClass("div", "about");
  appendChildToParent(document.body, aboutUsDiv);
  printAboutUs();
  //provjera forme
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
      document.getElementById("to").textContent =
        "Cannot leave this field empty";
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

    if (!hasError) {
      const tripType = document.querySelector(
        'input[name="trip"]:checked',
      ).value;
      const searchData = {
        from: fromPlace,
        to: toPlace,
        departure: departureValue,
        trip: tripType,
      };
      if (tripType === "round") {
        searchData.return = returnValue;
      }
      localStorage.setItem("searchData", JSON.stringify(searchData));
      window.location.href = "results.html";
    }
  });
}
//brisanje return date
const tripRadios = document.querySelectorAll('input[name="trip"]');
const returnDate = document.getElementById("return-date-formgr");

tripRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.nextSibling.textContent.includes("One Way") && radio.checked) {
      returnDate.classList.add("hidden");
    } else if (radio.checked) {
      returnDate.classList.remove("hidden");
    }
  });
});

//show notification
window.addEventListener("load", () => {
  if (localStorage.getItem("showNotification") === "true") {
    const notification = document.getElementById("notification");
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
      localStorage.removeItem("showNotification");
    }, 3000);
  }
  if (localStorage.getItem("showNotification2") === "true") {
    const notification = document.getElementById("notification2");
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
      localStorage.removeItem("showNotification2");
    }, 3000);
  }
});

if (pathname == "/flightnotfound.html") {
  //printovi
  var flightnotfoundDiv = createElementWithClass("div", "hero2");
  appendChildToParent(document.body, flightnotfoundDiv);
  printflightnotfound();
  flightnotfoundDiv.classList.add("d-flex", "flex-column", "mx-auto");
  document.getElementById("my-form2").addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "index.html";
    return true;
  });
}

if (pathname == "/contactus.html") {
  var contactUsDiv = createElementWithClass("div", "hero");
  appendChildToParent(document.body, contactUsDiv);
  printContactUs();
  //regex
  const nameRegex = /^[A-Za-z]{3,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const subjectRegex = /^.{5,50}$/;
  const messageRegex = /^.{3,}$/;
  //labels
  const nameLabel = document.getElementById("name-label");
  const subjectLabel = document.getElementById("subject-label");
  const emailLabel = document.getElementById("e-mail-label");
  const messageLabel = document.getElementById("message-label");
  // dodatna polja
  const form = document.getElementById("my-form3");
  const submitBtn = document.getElementById("submit");
  window.addEventListener("DOMContentLoaded", () => {
    submitBtn.disabled = true;
  });

  function validateForm() {
    submitBtn.disabled = !form.checkValidity();
  }

  form.addEventListener("input", validateForm);

  document.getElementById("my-form3").addEventListener("submit", function (e) {
    const email = document.getElementById("e-mail").value;
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    e.preventDefault();
    let hasError = false;
    if (!emailRegex.test(email)) {
      emailLabel.textContent = "email is not written correctly";
      hasError = true;
    }
    if (!nameRegex.test(name)) {
      nameLabel.textContent = "name is not written correctly";
      hasError = true;
    }
    if (!subjectRegex.test(subject)) {
      subjectLabel.textContent = "subject is not written correctly";
      hasError = true;
    }
    if (!messageRegex.test(message)) {
      messageLabel.textContent = "message is not written correctly";
      hasError = true;
    }
    if (!hasError) {
      localStorage.setItem("showNotification", "true");
      window.location.href = "index.html";
    }
  });
}

if (pathname === "/results.html") {
  const resultsDiv = createElementWithClass("div", "results-container");
  appendChildToParent(document.body, resultsDiv);
  const searchData = JSON.parse(localStorage.getItem("searchData"));
  if (!searchData) {
    window.location.href = "index.html";
  }
  const filteredFlights = flights.filter(
    (flight) =>
      flight.from === searchData.from &&
      flight.to === searchData.to &&
      flight.seats > 0,
  );
  if (filteredFlights.length === 0) {
    window.location.href = "flightnotfound.html";
  } else {
    printFlights(filteredFlights, resultsDiv);
  }
}
var footerDiv = createElementWithClass("footer", "footer");
appendChildToParent(document.body, footerDiv);
printFooter();
