const popupDiv = document.createElement("div");
popupDiv.classList.add("bg-popup");
popupDiv.innerHTML = `
    <div class="popup">
        <i class="fa-regular fa-circle-xmark" onclick="btnPopup()"></i>
        <form class="formPopup">
        <input type="text" name="parent" placeholder="Tên phụ huynh" />
        <input type="tel" name="numberPhone" placeholder="Số điện thoại" />
        <input type="text" name="student" placeholder="Tên học viên tham gia trải nghiệm" />
        <input type="text" name="adress" placeholder="Địa chỉ" />
        <input class="btnSignUpnow" type="submit" value="Đăng ký ngay" />
        </form>
    </div>
    `;
document.body.appendChild(popupDiv);
