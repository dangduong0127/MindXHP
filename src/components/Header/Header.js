"use strict";
import { courses, navMenu } from "../../utils/data.js";
importCSS("src/components/Header/Header.css");

// Đặt các hàm và biến cần xuất ở đây
// document.addEventListener("DOMContentLoaded", function () {

function importCSS(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}
document.addEventListener("DOMContentLoaded", renderHeader);
function renderHeader() {
  const header = document.createElement("header");
  header.innerHTML = `
          <div class="hd_container container">
            <div class="brand">
              <a href="./index.html">
                <img src="src/assets/logo-mindx-hai-phong-dao-tao-cong-nghe-lap-trinh-robotics-hai-phong.png" alt="">
              </a>
            </div>
            <nav></nav>
            <div class="nav-bar-btn">
              <i class="fa-solid fa-bars" style="color: #929292"></i>
            </div>
          </div>
          
          
        `;
  document.body.appendChild(header);

  // Initialize submenu

  const navEl = document.querySelector("nav");
  // const submenu = document.querySelector(".submenu");
  // const nav_icon = document.querySelector(".fa-angle-down");

  navMenu.forEach((item, index) => {
    const link = document.createElement("a");
    link.classList.add("nav_item");
    link.href = `${item.href}`;
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

    navbarEl.innerHTML = `
    <div class="navbar-inner">
    </div>
    `;
    const navbarinnerEl = document.querySelector(".navbar-inner");
    const submenu = [];
    navMenu.forEach((items, index) => {
      navbarinnerEl.innerHTML += `
      <a href="${items.href}" class="nav_item">${items.name} 
      <ul
      class="submenu_${index} submenu_display hide"
      style="list-style: none; padding: 10px; border-radius: 7px"
    >
    </ul>
      </a>
      `;
      submenu.push(items.submenu);
    });

    submenu.forEach((item, i) => {
      const ulElement = document.querySelector(`.submenu_${i}`);
      item.forEach((doc) => {
        if (doc != []) {
          ulElement.innerHTML += `
      <li>
        <a href="${doc.href}" class="submenu-item">${doc.text}</a>
      </li>
      `;
        }
      });
    });
  }
  renderNavbar();

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
      const nav_item = document.querySelectorAll(".nav_item");
      nav_item.forEach((items, index) => {
        const ulElement = document.querySelector(`.submenu_${index}`);
        if (ulElement !== null) {
          items.addEventListener("click", function () {
            if (ulElement.classList.contains("hide")) {
              if (ulElement.childElementCount > 0) {
                ulElement.classList.remove("hide");
                ulElement.classList.remove("submenu_display");
                ulElement.style.margin = "0px";
                ulElement.style.padding = "0px";
              }
            } else {
              ulElement.classList.add("hide");
            }
          });
        }
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});
