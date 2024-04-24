"use strict";

// Fetch header content
const fetchHeader = async () => {
  try {
    const res = await fetch("./components/header.html");
    const data = await res.text();
    document.getElementById("header").innerHTML = data;
  } catch (error) {
    console.error("Error fetching header:", error);
  }
};
// Fetch footer content
const fetchFooter = async () => {
  try {
    const res = await fetch("./components/footer.html");
    const data = await res.text();
    document.getElementById("footer").innerHTML = data;
  } catch (error) {
    console.error("Error fetching header:", error);
  }
};

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

// Initialize navbar
const initNavbar = () => {
  const btn_nav = document.querySelector(".nav-bar-btn");
  const navBar = document.querySelector(".navbar");
  const header = document.querySelector("header");

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
};

// Initialize submenu
const initSubmenu = () => {
  const navMenu = [
    {
      name: "Trang chủ",
      submenu: [],
    },

    {
      name: "Khóa học",
      submenu: [
        {
          text: "Khoá học Robotics (6-12 tuổi)",
          href: "./components/robotics",
        },
        { text: "Khoá học Coding (13-17 tuổi)", href: "#" },
        { text: "Khoá học lập trình Web (15+)", href: "#" },
      ],
    },

    {
      name: "Tin tức",
      submenu: [
        {
          text: "Tin tuc 1",
          href: "#",
        },
        {
          text: "Tin tuc 2",
          href: "#",
        },
      ],
    },

    {
      name: "Sự kiện",
      submenu: [],
    },
    {
      name: "Về chúng tôi",
      submenu: [],
    },
  ];

  const navEl = document.querySelector("nav");
  // const submenu = document.querySelector(".submenu");
  const nav_icon = document.querySelector(".fa-angle-down");

  navMenu.forEach((item, index) => {
    const link = document.createElement("a");
    link.classList.add("nav_item");
    link.href = "#";
    link.textContent = item.name;
    navEl.appendChild(link);

    navEl.innerHTML += `
      <ul
      class="submenu_${index} submenu_display hide"
      style="list-style: none; padding: 10px; border-radius: 7px"
    >
    </ul>
    `;
    const ulElement = document.querySelector(`.submenu_${index}`);
    item.submenu.forEach((items) => {
      ulElement.innerHTML += `
      <li>
        <a href="${items.href}" class="submenu-item">${items.text}</a>
      </li>
      `;
    });
  });
  navEl.innerHTML += `<input type="button" class="btn_nav_item" value="Đăng ký tư vấn" />`;

  const nav_item = document.querySelectorAll(".nav_item");

  nav_item.forEach((items, index) => {
    const ulElement = document.querySelector(`.submenu_${index}`);
    if (ulElement !== null) {
      // console.log();
      items.addEventListener("mouseover", () => {
        if (ulElement.childElementCount > 0) {
          ulElement.classList.remove("hide");
        }
      });

      items.addEventListener("mouseout", () => {
        if (ulElement.childElementCount > 0) {
          ulElement.classList.add("hide");
        }
      });

      ulElement.addEventListener("mouseover", () => {
        ulElement.classList.remove("hide");
      });

      ulElement.addEventListener("mouseout", () => {
        ulElement.classList.add("hide");
      });
    }
  });
};

// Main function to initialize everything
const main = async () => {
  await fetchHeader();
  await fetchFooter();
  updateNumbers();
  initNavbar();
  initSubmenu();
};

main();

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
