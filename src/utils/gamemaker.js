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

const formCodingEl = document.querySelector(".formCoding");
formCodingEl.addEventListener("submit", function (e) {
  e.preventDefault();
  let parentValue = formCodingEl.parent.value;
  let phoneValue = formCodingEl.numberPhone.value;
  let studentValue = formCodingEl.student.value;
  let addressValue = formCodingEl.address.value;
  let number = /[0-9]/g;
  let lowercase = /[a-z]/g;
  let uppercase = /[A-Z]/g;
  let specialCharsRegex = /[^\w\s]/g;
  function validate() {
    if (
      parentValue === "" ||
      phoneValue.trim() === "" ||
      studentValue === "" ||
      addressValue === ""
    ) {
      alert("Vui lòng nhập đủ thông tin");
      return false;
    }

    if (!phoneValue.match(number)) {
      alert("Số điện thoại không được chứa chữ cái hoặc ký tự đặc biệt");
      return false;
    } else if (phoneValue.length < 9) {
      alert("Số điện thoại phải có ít nhất là 9 số");
      return false;
    } else if (
      phoneValue.match(lowercase) ||
      phoneValue.match(uppercase) ||
      phoneValue.match(specialCharsRegex)
    ) {
      let checkstr = [];
      if (phoneValue.match(lowercase)) {
        checkstr += [...phoneValue.match(lowercase)];
      }
      if (phoneValue.match(uppercase)) {
        checkstr += [...phoneValue.match(uppercase)];
      }
      if (phoneValue.match(specialCharsRegex)) {
        checkstr += [...phoneValue.match(specialCharsRegex)];
      }

      alert(
        "Số điện thoại không được chứa chữ cái hoặc ký tự đặc biệt" +
          "\n" +
          "Vui lòng loại bỏ ký tự này: " +
          `"` +
          checkstr +
          `"`
      );
      return false;
    }

    return true;
  }

  if (validate()) {
    // Hàm để hiển thị thông báo
    function showCustomAlert() {
      var customAlert = document.getElementById("customAlert");
      customAlert.style.display = "block";
    }

    // Hàm để ẩn đi thông báo
    function hideCustomAlert() {
      var customAlert = document.getElementById("customAlert");
      customAlert.style.display = "none";
    }

    // Hiển thị thông báo khi cần
    showCustomAlert();

    // // Ẩn đi thông báo sau một khoảng thời gian
    setTimeout(function () {
      hideCustomAlert();
    }, 2500);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbymH-OeBjwTAwUVtigNZNMMWA-VSbhpk5NmXXkDb40VUX4o3gYfDsimMaUuqV8tVRO58A/exec";
    let formData = new FormData(formCodingEl);
    let getTime = new Date();
    let years = getTime.getFullYear();
    let months = getTime.getMonth();
    let days = getTime.getDay();
    let hours = getTime.getHours();
    let minutes = getTime.getMinutes();
    months = months < 10 ? "0" + months : months;
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let creatAt = days + "/" + months + "/" + years;
    let timeCreat = hours + ":" + minutes;

    formData.append("creatAt", creatAt);
    formData.append("time", timeCreat);
    formData.append("status", "Chưa xử lý");

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        formCodingEl.parent.value = "";
        formCodingEl.numberPhone.value = "";
        formCodingEl.student.value = "";
        formCodingEl.address.value = "";

        alert(
          "Đăng ký thành công!!!" + "\n" + "Chúng tôi sẽ sớm liên hệ tới bạn"
        );
      })
      .catch((error) => console.error("Error!", error.message));
  }
});
