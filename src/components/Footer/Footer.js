function importCSS(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}
importCSS("src/components/Footer/Footer.css");

function renderFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div id="customAlert" class="custom-alert" style="display: none;">
        <p>Đang xử lý, vui lòng đợi trong giây lát...</p>
    </div>

    <div class="bg-popup">
        <div class="popup">
            <i class="fa-regular fa-circle-xmark" onclick="btnPopup()"></i>
            <form class="formPopup" name="submit-to-google-sheet">
            <input type="text" name="parent" placeholder="Tên phụ huynh" />
            <input type="tel" name="numberPhone" placeholder="Số điện thoại" />
            <input type="text" name="student" placeholder="Tên học viên tham gia trải nghiệm" />
            <input type="text" name="address" placeholder="Địa chỉ" />
            <input class="btnSignUpnow" type="submit" name="submit" value="Đăng ký ngay" />
            </form>
        </div>
    </div>

    <div class="wrapper">
    <div class="container">
    <div class="footer-content">
        <div class="branding">
        <div class="branding-inner">
            <img
            src="src/assets/logo-mindx-hai-phong-dao-tao-cong-nghe-lap-trinh-robotics-hai-phong.png"
            alt=""
            width="70%"
            />
            <div class="branding-contact">
            <a href="https://www.facebook.com/mindxschool"
                ><img
                src="src/assets/icons/facebook.svg"
                alt="facebook"
                width="32"
                height="32" /></a
            ><a href="https://www.youtube.com/@mindxtechnologyschool9210"
                ><img
                src="src/assets/icons/youtube.svg"
                alt="youtube"
                width="32"
                height="32" /></a
            ><a href="https://www.linkedin.com/company/mindxtechnologyschool/"
                ><img
                src="src/assets/icons/linkedin.svg"
                alt="linkedin"
                width="32"
                height="32" /></a
            ><a href="https://www.instagram.com/mindx.technology.school/"
                ><img
                src="src/assets/icons/instagram.svg"
                alt="instagram"
                width="32"
                height="32" /></a
            ><a href=" https://www.tiktok.com/@mindxschool"
                ><img
                src="src/assets/icons/tiktok.svg"
                alt="tiktok"
                width="32"
                height="32"
            /></a>
            </div>
        </div>
        <img
            class="gov-certificate w-[112px] md:w-[80px]"
            width="80"
            height="30"
            src="src/assets/gov-certificate.png"
            alt="Đã thông báo Bộ Công Thương"
        />
        </div>

        <div class="collapse-menu">
        <strong>Về MindX</strong>
        <div class="collapse-menu-inner">
            <hr />
            <div class="collapse-menu-nav">
            <a href="#">Về chúng tôi</a>
            <a href="#">Tra cứu cơ sở học</a>
            </div>
        </div>
        </div>

        <div class="collapse-menu">
        <strong>Blog công nghệ</strong>
        <div class="collapse-menu-inner">
            <hr />
            <div class="collapse-menu-nav">
            <a href="#">Tin tức & Sự kiện</a>
            <a href="#">Tài liệu miễn phí</a>
            </div>
        </div>
        </div>

        <div class="collapse-menu">
        <strong>Lộ trình học</strong>
        <div class="collapse-menu-inner">
            <hr />
            <div class="collapse-menu-nav">
            <a href="#">Cho trẻ 6-12 tuổi</a>
            <a href="#">Cho trẻ 13-17 tuổi</a>
            </div>
        </div>
        </div>
    </div>
    </div>

    <div class="footer-coppyright">
    <div class="container">
        <div class="orderlast">
        <p>
            CÔNG TY CỔ PHẦN TRƯỜNG HỌC CÔNG NGHỆ MINDX. Mã số thuế: 0110021468
        </p>
        <p>
            Địa chỉ: Tầng 2, Tòa hà Bạch Đằng, Phường Niệm Nghĩa, Quận Lê Chân,
            Thành phố Hải Phòng, Việt Nam
        </p>
        <p>Hotline tuyển sinh cho trẻ từ 6-17 tuổi:</p>
        <p>-Hà Nội: 02477717888</p>
        <p>-Tp.HCM: 02877717789</p>
        <p>-Tỉnh/tp khác: 02477731666</p>
        <p>Hotline tuyển sinh lớp cho sinh viên và người đi làm: 02477705666</p>
        </div>

        <div class="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d879.8539170860583!2d106.66909305165117!3d20.84418837930623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7bca432acb4f%3A0x1e6850f2cadfc7e1!2zVMOyYSBuaMOgIELhuqFjaCDEkOG6sW5n!5e0!3m2!1svi!2s!4v1713942495893!5m2!1svi!2s"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
    </div>

    <div class="container">
        <p style="color: #fff; text-align: center;">Copyright @ 2024 - MindX - All rights reserved</p>
    </div>
    </div>
    </div>
  `;

  document.body.appendChild(footer);
}

renderFooter();

// popup function
const popupEl = document.querySelector(".bg-popup");
function btnPopup() {
  // Lấy giá trị của thuộc tính display được tính toán từ CSS
  const computedStyle = window.getComputedStyle(popupEl);
  const display = computedStyle.getPropertyValue("display");

  // Kiểm tra xem nếu display là "none" thì hiển thị popup, ngược lại ẩn đi
  if (display === "none") {
    popupEl.style.display = "block";
  } else {
    popupEl.style.display = "none";
  }
}

const formPopupEl = document.querySelector(".formPopup");
formPopupEl.addEventListener("submit", function (e) {
  e.preventDefault();
  let parentValue = formPopupEl.parent.value;
  let phoneValue = formPopupEl.numberPhone.value;
  let studentValue = formPopupEl.student.value;
  let addressValue = formPopupEl.address.value;
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
    let formData = new FormData(formPopupEl);
    let getTime = new Date();
    let years = getTime.getFullYear();
    let months = getTime.getMonth();
    let days = getTime.getDay();
    let hours = getTime.getHours();
    let minutes = getTime.getMinutes();
    months < 10 ? "0" + months : months;
    days < 10 ? "0" + days : days;
    hours < 10 ? "0" + hours : hours;
    minutes < 10 ? "0" + minutes : minutes;
    let creatAt = days + "/" + months + "/" + years;
    let timeCreat = hours + ":" + minutes;

    formData.append("creatAt", creatAt);
    formData.append("time", timeCreat);
    formData.append("status", "Chưa xử lý");

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        formPopupEl.parent.value = "";
        formPopupEl.numberPhone.value = "";
        formPopupEl.student.value = "";
        formPopupEl.address.value = "";

        alert(
          "Đăng ký thành công!!!" + "\n" + "Chúng tôi sẽ sớm liên hệ tới bạn"
        );
      })
      .catch((error) => console.error("Error!", error.message));
  }
});
