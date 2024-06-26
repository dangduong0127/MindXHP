"use strict";
import { routeMapData } from "./data.js";

const ladiEl = document.querySelector(".ladi-container");

// Get the button:
let mybutton = document.getElementById("myBtn");

// Hàm kiểm tra xem thiết bị có phải là loại gì
function checkDeviceType() {
  // Kiểm tra kích thước màn hình và userAgent để xác định loại thiết bị
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var isMobile = screenWidth < 768; // Định nghĩa các thiết bị có kích thước màn hình nhỏ hơn 768px là mobile
  var userAgent = navigator.userAgent.toLowerCase();

  // Kiểm tra userAgent để phát hiện thiết bị tablet
  var isTablet = /ipad|android/.test(userAgent) && !window.MSStream;

  // Kiểm tra điều kiện để xác định loại thiết bị
  if (isMobile) {
    return "Mobile";
  } else if (isTablet) {
    return "Tablet";
  } else {
    return "PC";
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function scrollLadiEl() {
  if (checkDeviceType() !== "Mobile") {
    if (document.documentElement.scrollTop >= 500) {
      ladiEl.style.position = "fixed";
      ladiEl.style.width = "100%";
      ladiEl.style.top = "0";
      ladiEl.style.zIndex = "9999";
    } else {
      ladiEl.style.position = "static";
      ladiEl.style.width = "";
      ladiEl.style.top = "";
      ladiEl.style.zIndex = "";
    }
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  scrollLadiEl();
};

// stop cacrousel products
$(".carousel").carousel("pause");

//programs

const wapperProgramsEl = document.querySelector(".wapper-program-routemap");
routeMapData.forEach((items) => {
  wapperProgramsEl.innerHTML += `
  <div class="program-heading-inner" onclick="showSubProgram('${items.id}')">
      <h3>${items.title}</h3>
      <i class="fa-solid fa-plus"></i>
    </div>
    <div id=${items.id} class="sub-program hide">
      <h5>Tổng quan kỳ học:</h5>
      <ul id="ul-${items.id}"></ul>
      <div class="btn"><button class="btnSignUp" onclick="signUp()">Đăng ký học thử</button></div>
    </div>
  `;

  const ulEL = document.querySelector(`#ul-${items.id}`);
  items.detail.forEach((detail) => {
    ulEL.innerHTML += `
    <li>
    <i class="fa-solid fa-square"></i>
    ${detail}
  </li>
    `;
  });
});
