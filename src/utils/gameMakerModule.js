import { routeMapDataGameMaker } from "./data.js";

const wapperProgramsEl = document.querySelector(".wapper-program-routemap");
routeMapDataGameMaker.forEach((items) => {
  wapperProgramsEl.innerHTML += `
  <div class="program-heading-inner" onclick="showSubProgram('${items.id}')">
      <h3>${items.title}</h3>
      <i class="fa-solid fa-plus"></i>
    </div>
    <div id=${items.id} class="sub-program hide">
      <h5>Tổng quan kỳ học:</h5>
      <ul id="ul-${items.id}"></ul>
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
