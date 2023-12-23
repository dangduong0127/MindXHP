"use trick";
// About
const btn_nav = document.querySelector(".nav-bar-btn");
const navBar = document.querySelector(".navbar");
const header = document.querySelector("header");

let valueDisplays = document.querySelectorAll(".num");
let interval = 1500;

let increaseFloatNum = (x, s) => {
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
let increaseIntNum = (x, s) => {
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

// Navbar
navBar.style.transform = "translateY(-50vh)";
btn_nav.addEventListener("click", () => {
  if (navBar.style.transform == "translateY(-50vh)") {
    navBar.style.transform = "translateY(0vh)";
    navBar.style.transition = "0.5s";
    header.style.boxShadow = "1px 1px #E4E4E4";
  } else {
    navBar.style.transform = "translateY(-50vh)";
    header.style.boxShadow = "2px 2px 20px";
  }
});

const nav_icon = document.querySelectorAll(".fa-angle-down");
const nav_item = document.querySelectorAll(".nav_item");
const submenu = document.querySelector(".submenu");
const subitem = document.querySelectorAll(".nav_item");
nav_item[1].addEventListener("mouseover", () => {
  nav_icon[0].classList.add("fa-rotate-180");
  nav_icon[0].classList.remove("dropdown");
  nav_icon[0].style.color = "#C10F15";
  subitem[1].style.color = "#C10F15";
  submenu.style.display = "block";
  submenu.style.transition = "0.5s";
});
nav_item[1].addEventListener("mouseout", () => {
  nav_icon[0].classList.remove("fa-rotate-180");
  nav_icon[0].classList.add("dropdown");
  submenu.style.display = "block";
  submenu.style.transition = "0.5s";
});
submenu.addEventListener("mouseover", () => {
  nav_icon[0].classList.add("fa-rotate-180");
  nav_icon[0].classList.remove("dropdown");
  nav_icon[0].style.color = "#C10F15";
  subitem[1].style.color = "#C10F15";
  submenu.style.display = "block";
  submenu.style.transition = "0.5s";
});
submenu.addEventListener("mouseout", () => {
  nav_icon[0].classList.remove("fa-rotate-180");
  nav_icon[0].style.color = "#000";
  subitem[1].style.color = "#000";
  nav_icon[0].classList.add("dropdown");
  submenu.style.display = "none";
});

// nav_item[2].addEventListener("mouseover", () => {
//   nav_icon[1].classList.add("fa-rotate-180");
//   nav_icon[1].classList.remove("dropdown");
//   nav_icon[1].style.color = "#C10F15";
// });

// nav_item[2].addEventListener("mouseout", () => {
//   nav_icon[1].classList.add("dropdown");
//   nav_icon[1].classList.remove("fa-rotate-180");
//   nav_icon[1].style.color = "#000000";
// });
