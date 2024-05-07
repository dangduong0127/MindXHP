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
// $(".carousel").carousel("pause");
$("#carouselFeedback").carousel("pause");

function showSubProgram(id) {
  const showSubProgramEl = document.getElementById(id);
  if (showSubProgramEl.classList.contains("hide")) {
    showSubProgramEl.classList.remove("hide");
    showSubProgramEl.style.transition = "1.3s";
  } else {
    showSubProgramEl.classList.add("hide");
  }
}

function signUp() {
  window.location.href = "#SignUpSection";
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
