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
