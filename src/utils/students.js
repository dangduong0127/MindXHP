import { studentsTalent } from "./data.js";
function renderStudentTalent() {
  const studentsEl = document.querySelector(".students");

  studentsTalent.forEach((item) => {
    studentsEl.innerHTML += `
    <div class="student">
        <img
        src="${item.img}"
        alt=""
        />
        <h3>${item.name}</h3>
        <p>${item.decription}</p>
    </div>
    `;
  });
}
renderStudentTalent();
