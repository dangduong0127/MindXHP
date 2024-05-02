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
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  scrollLadiEl();
};

// stop cacrousel products
$(".carousel").carousel("pause");

//programs
const routeMapData = [
  {
    id: "N01",
    title: "Năm 1: nhập môn robotics",
    detail: [
      "Nắm vững kiến thức cơ bản về lắp ráp và lập trình Robot, thao tác thực hiện các hoạt động để hoàn thành các nhiệm vụ đơn giản như di chuyển theo đường màu sắc, di chuyển và đổi hướng khi thấy vật cản,...",
      "Hiểu cơ bản về Robot và ứng dụng của nó trong cuộc sống hàng ngày.",
      "Nắm vững kiến thức về lắp ráp và tạo mô hình Robot đơn giản.",
      "Hiểu cách lập trình Robot để hoàn thành các nhiệm vụ.",
      "Lắp ráp các mô hình Robot và lập trình Robot hoàn thành các nhiệm vụ như di chuyển, di chuyển đường màu sắc, di chuyển và đổi hướng khi thấy vật cản.",
    ],
  },
  {
    id: "N02",
    title: "Năm 2: Truy tìm bí ẩn robotics",
    detail: [
      "Hiểu về các thuật toán và công nghệ lập trình Robot phức tạp, ứng dụng các thuật toán lập trình Robot cơ bản vào thực tế. Đồng thời, làm quen và chuẩn bị cho cuộc thi X-Robotics Challenge do MindX tổ chức.",
      "Nắm vững kiến thức về lĩnh vực Robotics và những ứng dụng của nó.",
      "Hiểu về các thuật toán và công nghệ lập trình Robot phức tạp.",
      "Áp dụng các thuật toán lập trình Robot cơ bản vào thực tế .",
      "Xây dựng được các mô hình Robot mô phỏng các công việc thực tế như: Robot thu gom và phân loại rác thải, Robot nâng hạ đồ vật, Hệ thống tự động thông minh như thùng rác, cổng thông minh,... .",
      "Làm quen với mô hình thi đấu Robotics, các bước lên kế hoạch và triển khai để chuẩn bị cho cuộc thi X-Robotics Challenge.",
    ],
  },
  {
    id: "N03",
    title: "Năm 3: Sáng tạo robot",
    detail: [
      "Nắm vững kiến thức về cảm biến và công nghệ tương tác giữa Robot và môi trường, từ đó xây dựng được các mô hình Robot tham gia giải quyết các công việc thực tế dưới sự điều khiển bằng thiết bị điều khiển được trang bị nhiều cảm biến chạm.",
      "Hiểu khái niệm tự động hóa - một phần trong lĩnh vực Robotics và tầm quan trọng của tương tác giữa con người và Robot.",
      "Nắm vững kiến thức về cảm biến và công nghệ tương tác giữa Robot và môi trường.",
      "Phát triển các mô hình Robot tham gia giải quyết công việc thực tế dưới sự điều khiển bằng thiết bị điều khiển được trang bị nhiều cảm biến chạm như: Robot di chuyển, nâng hạ hoặc vận chuyển đồ vật, Robot thực hiện các công việc tính thực tế cao ",
    ],
  },
  {
    id: "N04",
    title: "Năm 4: Huấn luyện robot",
    detail: [
      "Ứng dụng xây dựng các mô hình Robot tự thực hiện nhiệm vụ từ đơn giản đến phức tạp. Đồng thời, chuẩn bị và cọ sát với cuộc thi Vex Worlds Championship do hãng Vex tổ chức.",
      "Hiểu về khái niệm tự động hoàn toàn trong lĩnh vực Robotics.",
      "Nắm vững kiến thức về hệ thống điều khiển tự động và các công nghệ lập trình Robot tự động.",
      "Xây dựng mô hình Robot tự thực hiện nhiệm vụ từ đơn giản đến phức tạp: ",
      "+ Robot tự phát hiện vật thể cần di chuyển và vận chuyển đồ vật về đúng vị trí",
      "+ Robot dò đường và tìm đường ",
      "+ Robot tự điều chỉnh hướng, thăng bằng với thuật toán PID controller",
      "Hướng dẫn triển khai và chuẩn bị cho cuộc thi VEX Worlds Championship do hãng Vex tổ chức",
    ],
  },
  {
    id: "N05",
    title: "Năm 5: Chinh phục python",
    detail: [
      "Tìm hiểu và học cách sử dụng ngôn ngữ lập trình Python trong lĩnh vực Robotics. Sau đó, tham gia vào một dự án sử dụng ngôn ngữ lập trình Python để xây dựng và phát triển một dự án Robotics giải quyết vấn đề trong thực tế.",
      "Tìm hiểu Python và môi trường lập trình, các cú pháp cơ bản của Python như: khai báo biến, kiểu dữ liệu, toán tử và biểu thức, các câu lệnh điều kiện: if, else, elif,... .",
      "Học cách sử dụng cảm biến để định vị Robot trong môi trường, sử dụng các cảm biến và hành động để tương tác với môi trường xung quanh.",
      "Xây dựng hệ thống Robot hoàn chỉnh như xe không người lái, mô phỏng hệ thống tự động hóa trong công nghiệp, giải quyết mê cung,... .",
      "Thực hiện dự án cuối khóa để áp dụng kiến thức đã học. ",
    ],
  },
];
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
