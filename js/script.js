// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const h0Input = document.getElementById("h0");
//   const h1Input = document.getElementById("h1");
//   const submitButton = document.getElementById("submitButton");

//   function checkInputs() {
//     if (h0Input.value.trim() !== "" && h1Input.value.trim() !== "") {
//       submitButton.disabled = false;
//     } else {
//       submitButton.disabled = true;
//     }
//   }

//   h0Input.addEventListener("input", checkInputs);
//   h1Input.addEventListener("input", checkInputs);

//   document
//     .getElementById("formJawaban")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();

//       // Hide the submit button and show the loading button
//       submitButton.style.display = "none";
//       document.getElementById("loadingButton").style.display = "inline-block";

//       // Simulate form submission
//       setTimeout(function () {
//         // Hide the loading button and show the submit button
//         document.getElementById("loadingButton").style.display = "none";
//         submitButton.style.display = "inline-block";

//         // Show the success notification
//         document.getElementById("notification").style.display = "block";
//       }, 2000); // Simulate a 2 second delay for form submission
//     });

//   // Initial check
//   checkInputs();
// });

// PRIORKNOWLEDGEWAVEFRONT
document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const h0Input = document.getElementById("h0");
  // const h1Input = document.getElementById("h1");
  const submitButton = document.getElementById("submitButton");
  const loadingButton = document.getElementById("loadingButton");
  const notification = document.getElementById("notification");
  const errorNotification = document.getElementById("errorNotification");
  const form = document.forms["FormJawaban"];
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzU9kijGGTyLaBcPDycNVuTAgXmdsXhCG0TvdoRztHb48vKf1lS7qdpT1rg5XKGtVoB/exec";

  function checkInputs() {
    if (emailInput.value.trim() !== "" && h0Input.value.trim() !== "") {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  emailInput.addEventListener("input", checkInputs);
  h0Input.addEventListener("input", checkInputs);
  // h1Input.addEventListener("input", checkInputs);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Hide the submit button and show the loading button
    submitButton.style.display = "none";
    loadingButton.style.display = "inline-block";
    notification.style.display = "none";
    errorNotification.style.display = "none";

    // Perform the form submission
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => response.json()) // Parse response as JSON
      .then((data) => {
        console.log("Success!", data);
        // Hide the loading button and show the submit button
        loadingButton.style.display = "none";
        submitButton.style.display = "inline-block";

        // Show the success notification
        notification.style.display = "block";
      })
      .catch((error) => {
        console.error("Error!", error.message);
        // Hide the loading button and show the submit button
        loadingButton.style.display = "none";
        submitButton.style.display = "inline-block";

        // Show the error notification
        errorNotification.style.display = "block";
      });
  });

  // Initial check
  checkInputs();
});

// CERMINDATARHIPOTESIS
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("h01");
  const h1Input = document.getElementById("h11");
  const submitButton = document.getElementById("submitButton1");
  const loadingButton = document.getElementById("loadingButton1");
  const notification = document.getElementById("notification1");
  const errorNotification = document.getElementById("errorNotification1");
  const form = document.forms["FormJawaban1"];
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw6RxAFdyAKWq5GhIyBnI3hsf4tg_M89Qt1fszMWDb452ry_uqjIAjPwgH_ahhuGeIp/exec";

  function checkInputs() {
    if (h0Input.value.trim() !== "" && h1Input.value.trim() !== "") {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  h0Input.addEventListener("input", checkInputs);
  h1Input.addEventListener("input", checkInputs);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Hide the submit button and show the loading button
    submitButton.style.display = "none";
    loadingButton.style.display = "inline-block";
    notification.style.display = "none";
    errorNotification.style.display = "none";

    // Perform the form submission
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        // Hide the loading button and show the submit button
        loadingButton.style.display = "none";
        submitButton.style.display = "inline-block";

        // Show the success notification
        notification.style.display = "block";
      })
      .catch((error) => {
        console.error("Error!", error.message);
        // Hide the loading button and show the submit button
        loadingButton.style.display = "none";
        submitButton.style.display = "inline-block";

        // Show the error notification
        errorNotification.style.display = "block";
      });
  });

  // Initial check
  checkInputs();
});

// VIDEO1-JAWABAN
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("jawabanvideo");
  const submitButton = document.getElementById("submitButton12");
  const loadingButton = document.getElementById("loadingButton12");
  const notification = document.getElementById("notification12");
  const errorNotification = document.getElementById("errorNotification12");
  const form = document.forms["FormJawaban12"];
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw6RxAFdyAKWq5GhIyBnI3hsf4tg_M89Qt1fszMWDb452ry_uqjIAjPwgH_ahhuGeIp/exec";

  console.log("Document Loaded");

  function checkInputs() {
    console.log("Checking inputs");
    console.log("h0Input value:", h0Input.value);
    if (h0Input.value.trim() !== "") {
      submitButton.disabled = false;
      console.log("Submit button enabled");
    } else {
      submitButton.disabled = true;
      console.log("Submit button disabled");
    }
  }

  h0Input.addEventListener("input", function () {
    console.log("Input event triggered");
    checkInputs();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    submitButton.style.display = "none";
    loadingButton.style.display = "inline-block";
    notification.style.display = "none";
    errorNotification.style.display = "none";

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        loadingButton.style.display = "none";
        submitButton.style.display = "inline-block";
        notification.style.display = "block";
      })
      .catch((error) => {
        console.error("Error!", error.message);
        loadingButton.style.display = "none";
        submitButton.style.display = "inline-block";
        errorNotification.style.display = "block";
      });
  });

  // Initial check to set the button state on page load
  checkInputs();
});

// KESIMPULAN
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("kesimpulancermindatar");
  const submitButton = document.getElementById("submitButton2");
  const loadingButton = document.getElementById("loadingButton2");
  const notification = document.getElementById("notification2");
  const errorNotification = document.getElementById("errorNotification2");
  const form = document.forms["FormJawaban2"];
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw6RxAFdyAKWq5GhIyBnI3hsf4tg_M89Qt1fszMWDb452ry_uqjIAjPwgH_ahhuGeIp/exec";

  console.log("Document Loaded");

  function checkInputs() {
    console.log("Checking inputs");
    console.log("h0Input value:", h0Input.value);
    if (h0Input.value.trim() !== "") {
      submitButton.disabled = false;
      console.log("Submit button enabled");
    } else {
      submitButton.disabled = true;
      console.log("Submit button disabled");
    }
  }

  h0Input.addEventListener("input", function () {
    console.log("Input event triggered");
    checkInputs();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    submitButton.style.display = "none";
    loadingButton.style.display = "inline-block";
    notification.style.display = "none";
    errorNotification.style.display = "none";

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        loadingButton.style.display = "none";
        submitButton.style.display = "inline-block";
        notification.style.display = "block";
      })
      .catch((error) => {
        console.error("Error!", error.message);
        loadingButton.style.display = "none";
        submitButton.style.display = "inline-block";
        errorNotification.style.display = "block";
      });
  });

  // Initial check to set the button state on page load
  checkInputs();
});

// CERMINRIAS-TELESKOP
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("riasteleskop");
  const submitButton = document.getElementById("submitButton3");
  const loadingButton = document.getElementById("loadingButton3");
  const notification = document.getElementById("notification3");
  const errorNotification = document.getElementById("errorNotification3");
  const form = document.forms["FormJawaban3"];
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw6RxAFdyAKWq5GhIyBnI3hsf4tg_M89Qt1fszMWDb452ry_uqjIAjPwgH_ahhuGeIp/exec";

  console.log("Document Loaded");

  function checkInputs() {
    console.log("Checking inputs");
    console.log("h0Input value:", h0Input.value);
    if (h0Input.value.trim() !== "") {
      submitButton.disabled = false;
      console.log("Submit button enabled");
    } else {
      submitButton.disabled = true;
      console.log("Submit button disabled");
    }
  }

  h0Input.addEventListener("input", function () {
    console.log("Input event triggered");
    checkInputs();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    submitButton.style.display = "none";
    loadingButton.style.display = "inline-block";
    notification.style.display = "none";
    errorNotification.style.display = "none";

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        loadingButton.style.display = "none";
        submitButton.style.display = "inline-block";
        notification.style.display = "block";
      })
      .catch((error) => {
        console.error("Error!", error.message);
        loadingButton.style.display = "none";
        submitButton.style.display = "inline-block";
        errorNotification.style.display = "block";
      });
  });

  // Initial check to set the button state on page load
  checkInputs();
});

//Interactivity1
function toggleIframe() {
  const iframe = document.getElementById("javalabIframe");
  const elabBtn = document.getElementById("elabBtn");
  const closeBtn = document.getElementById("closeBtn");

  if (iframe.style.display === "none" || iframe.style.display === "") {
    iframe.style.display = "block";
    elabBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
  } else {
    iframe.style.display = "none";
    elabBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
  }
}
//Interactivity2
function toggleIframe2() {
  const iframe = document.getElementById("javalabIframe2");
  const elabBtn = document.getElementById("elabBtn2");
  const closeBtn = document.getElementById("closeBtn2");

  if (iframe.style.display === "none" || iframe.style.display === "") {
    iframe.style.display = "block";
    elabBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
  } else {
    iframe.style.display = "none";
    elabBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
  }
}

// MATH EQUATION
