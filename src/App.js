let interval = 1500;
// Update number values
const updateNumbers = () => {
  const valueDisplays = document.querySelectorAll(".num");

  const increaseFloatNum = (x, s) => {
    let startVl = s;
    let endVl = parseFloat(x.getAttribute("data-val"));
    let duration = Math.floor(interval / endVl);
    let count = setInterval(() => {
      startVl += 0.1;
      x.textContent = startVl.toFixed(1) + "%";
      if (startVl.toFixed(1) == endVl.toFixed(1)) {
        clearInterval(count);
      }
    }, duration);
  };

  const increaseIntNum = (x, s) => {
    let startVl = s;
    let endVl = parseInt(x.getAttribute("data-val"));
    let duration = Math.floor(interval / endVl);
    let count = setInterval(() => {
      startVl += 1;
      x.textContent = startVl + "+";
      if (startVl == endVl) {
        clearInterval(count);
      }
    }, duration);
  };

  increaseIntNum(valueDisplays[0], 0);
  increaseIntNum(valueDisplays[1], 39700);
  increaseFloatNum(valueDisplays[2], 15);
  increaseFloatNum(valueDisplays[3], 87);
};

updateNumbers();

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const barBtn = document.querySelector(".nav-bar-btn");

barBtn.addEventListener("click", function () {
  const navBarEl = document.querySelector(".navbar-wrapper");
  const headerEl = document.querySelector("header");
  if (!navBarEl.classList.contains("moved")) {
    navBarEl.classList.add("moved");
    headerEl.style.boxShadow = "2px 2px 20px";
    headerEl.style.borderBottom = "none";
  } else {
    navBarEl.classList.remove("moved");
    headerEl.style.boxShadow = "none";
    headerEl.style.borderBottom = "1px solid #ccc";
  }
});
