"use strict";

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
        href: "./course.html",
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

// Đặt các hàm và biến cần xuất ở đây
function importCSS(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}
importCSS("../src/components/Header/Header.css");
function renderHeader() {
  const header = document.createElement("header");
  header.innerHTML = `
        <div class="hd_container">
          <div class="brand">
            <a href="./index.html">
              <img src="../src/assets/logo-mindx-hai-phong-dao-tao-cong-nghe-lap-trinh-robotics-hai-phong.png" alt="">
            </a>
          </div>
          <nav></nav>
          <div class="nav-bar-btn">
            <i class="fa-solid fa-bars" style="color: #929292"></i>
          </div>
        </div>
        
        
      `;
  document.body.appendChild(header);
}
renderHeader();

// Initialize submenu

const navEl = document.querySelector("nav");
// const submenu = document.querySelector(".submenu");
// const nav_icon = document.querySelector(".fa-angle-down");

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

function renderNavbar() {
  const navbarEl = document.getElementById("navBar");
  navMenu.forEach((doc) => console.log(doc));

  navbarEl.innerHTML = `
  <div class="navbar-inner">
  </div>
  `;
  const navbarinnerEl = document.querySelector(".navbar-inner");
  navMenu.forEach((items, index) => {
    navbarinnerEl.innerHTML += `
    <a href="" class="nav_item">${items.name} </a>
    `;
  });
}
renderNavbar();
