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

// WAVEFRONT-PRIORKNOWLEDGE
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

// HIPOTESIS-CERMINDATAR
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

// VIDEO1-JAWABAN-CERMINDATAR
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

// KESIMPULAN-CERMINDATAR
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("kesimpulandatar");
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

// CERMINRIAS-TELESKOP-CERMINCEKUNG
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

// HIPOTESIS-CERMINCEKUNG
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("h02");
  const h1Input = document.getElementById("h12");
  const submitButton = document.getElementById("submitButton4");
  const loadingButton = document.getElementById("loadingButton4");
  const notification = document.getElementById("notification4");
  const errorNotification = document.getElementById("errorNotification4");
  const form = document.forms["FormJawaban4"];
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

// KESIMPULAN-CERMINCEKUNG
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("kesimpulancekung");
  const submitButton = document.getElementById("submitButton5");
  const loadingButton = document.getElementById("loadingButton5");
  const notification = document.getElementById("notification5");
  const errorNotification = document.getElementById("errorNotification5");
  const form = document.forms["FormJawaban5"];
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

// VIDEO2-JAWABAN-CERMINCEKUNG
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("jawabanvideo-cek");
  const submitButton = document.getElementById("submitButton6");
  const loadingButton = document.getElementById("loadingButton6");
  const notification = document.getElementById("notification6");
  const errorNotification = document.getElementById("errorNotification6");
  const form = document.forms["FormJawaban6"];
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

// VIDEO2-JAWABAN-CERMINCEMBUNG
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("jawabanvideo-cem");
  const submitButton = document.getElementById("submitButton");
  const loadingButton = document.getElementById("loadingButton7");
  const notification = document.getElementById("notification7");
  const errorNotification = document.getElementById("errorNotification7");
  const form = document.forms["FormJawaban7"];
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

// MAYA-CERMINCEKUNG
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("maya-cembung");
  const submitButton = document.getElementById("submitButton8");
  const loadingButton = document.getElementById("loadingButton8");
  const notification = document.getElementById("notification8");
  const errorNotification = document.getElementById("errorNotification8");
  const form = document.forms["FormJawaban8"];
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

// HIPOTESIS-CERMINCEKUNG
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("h03");
  const h1Input = document.getElementById("h13");
  const submitButton = document.getElementById("submitButton9");
  const loadingButton = document.getElementById("loadingButton9");
  const notification = document.getElementById("notification9");
  const errorNotification = document.getElementById("errorNotification9");
  const form = document.forms["FormJawaban9"];
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

// KESIMPULAN-CERMINCEMBUNG
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("kesimpulancembung");
  const submitButton = document.getElementById("submitButton10");
  const loadingButton = document.getElementById("loadingButton10");
  const notification = document.getElementById("notification10");
  const errorNotification = document.getElementById("errorNotification10");
  const form = document.forms["FormJawaban10"];
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
// HUKUMSNELL-PEMBIASAN
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("snell");
  const submitButton = document.getElementById("submitButton11");
  const loadingButton = document.getElementById("loadingButton11");
  const notification = document.getElementById("notification11");
  const errorNotification = document.getElementById("errorNotification11");
  const form = document.forms["FormJawaban11"];
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
// KONVERGEN-PEMBIASAN
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("konvergen");
  const submitButton = document.getElementById("submitButton14");
  const loadingButton = document.getElementById("loadingButton14");
  const notification = document.getElementById("notification14");
  const errorNotification = document.getElementById("errorNotification14");
  const form = document.forms["FormJawaban14"];
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
// DIVERGEN-PEMBIASAN
document.addEventListener("DOMContentLoaded", function () {
  const h0Input = document.getElementById("divergen");
  const submitButton = document.getElementById("submitButton13");
  const loadingButton = document.getElementById("loadingButton13");
  const notification = document.getElementById("notification13");
  const errorNotification = document.getElementById("errorNotification13");
  const form = document.forms["FormJawaban13"];
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

//Interactivity3
function toggleIframe3() {
  const iframe = document.getElementById("javalabIframe3");
  const elabBtn = document.getElementById("elabBtn3");
  const closeBtn = document.getElementById("closeBtn3");

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
function toggleIframe4() {
  const iframe = document.getElementById("javalabIframe4");
  const elabBtn = document.getElementById("elabBtn4");
  const closeBtn = document.getElementById("closeBtn4");

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
function toggleIframe5() {
  const iframe = document.getElementById("javalabIframe5");
  const elabBtn = document.getElementById("elabBtn5");
  const closeBtn = document.getElementById("closeBtn5");

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
function toggleIframe6() {
  const iframe = document.getElementById("javalabIframe6");
  const elabBtn = document.getElementById("elabBtn6");
  const closeBtn = document.getElementById("closeBtn6");

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
function toggleIframe7() {
  const iframe = document.getElementById("javalabIframe7");
  const elabBtn = document.getElementById("elabBtn7");
  const closeBtn = document.getElementById("closeBtn7");

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
function toggleIframe8() {
  const iframe = document.getElementById("javalabIframe8");
  const elabBtn = document.getElementById("elabBtn8");
  const closeBtn = document.getElementById("closeBtn8");

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
function toggleIframe9() {
  const iframe = document.getElementById("javalabIframe9");
  const elabBtn = document.getElementById("elabBtn9");
  const closeBtn = document.getElementById("closeBtn9");

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
