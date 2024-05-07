export const navMenu = [
  {
    name: "Trang chủ",
    href: "./index.html",
    submenu: [],
  },

  {
    name: "Khóa học",
    href: "#",
    submenu: [
      {
        id: "Robotics",
        text: "Khoá học Robotics: Lắp ráp và chế tạo robot STEM (6 - 15 tuổi)",
        href: "./robotics.html",
      },
      {
        id: "Gamemaker",
        text: "Khoá học lập trình: Sáng tạo và khởi nghiệp công nghệ (9 - 17 tuổi)",
        href: "./gamemaker.html",
      },
    ],
  },

  {
    name: "Tin tức",
    href: "#tintuc",
    submenu: [],
  },

  {
    name: "Sự kiện",
    href: "#",
    submenu: [
      {
        text: "Cuộc thi XContest",
        href: "#xcontest",
      },
      {
        text: "Khai trương cơ sở Hải Phòng",
        href: "#grandOpening",
      },
    ],
  },
  {
    name: "Về chúng tôi",
    href: "#",
    submenu: [],
  },
];

export const courses = [
  {
    id: "Robotics",
    thumbnail: "",
    title: "Khóa học Robotics: Lắp ráp & chế tạo robot STEM cho trẻ em",
  },

  {
    id: "Gamemaker",
    thumbnail: "",
    title:
      "Khóa học Gamemaker: Xây dựng cốt truyện, lập trình ra trò chơi của mình",
  },

  {
    id: "JavaScript",
    thumbnail: "",
    title:
      "Khóa học Web developer: Xây dựng và phát triển kỹ năng lập trình web",
  },
];

export const routeMapData = [
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

export const routeMapDataGameMaker = [
  {
    id: "N01",
    title: "Khóa 1: Lập trình Scratch",
    detail: [
      "Khóa học lập trình Scratch Creator cung cấp ba cấp độ từ cơ bản đến chuyên sâu sử dụng ngôn ngữ chính là Scratch để phát triển tư duy lập trình thông qua việc sáng tạo các dự án với Scratch. Ngoài ra, học viên cũng được giới thiệu với Trí tuệ nhân tạo qua PRG AI Blocks, từ khái niệm đến thực hành xây dựng các ứng dụng nhận diện khuôn mặt và vật thể. ",
      "Cấp độ: 3 Level",
      "Thời gian học: 42 buổi - 2h/buổi ",
      "Hiểu cách lập trình Robot để hoàn thành các nhiệm vụ.",
      "<strong>LEVEL 1: SCRATCH BASIC</strong> <ul style=font-size:15px;><li>Học sinh bước đầu tiếp với lập trình thông qua Scratch, phát triển tư duy thuật toán và sáng tạo trong việc tạo ra các dự án cá nhân, sử dụng tài nguyên từ công cụ AI.</li></ul>",
      "<strong>LEVEL 2: SCRATCH ADVANCED</strong> <ul style=font-size:15px;><li>Học sinh tìm hiểu về AI và lập trình nâng cao tạo ra mô hình AI tích hợp vào Scratch, phát triển kỹ năng lập trình các dự án Scratch phức tạp và sử dụng mô hình AI trong sản phẩm. </li></ul>",
      "<strong>LEVEL 3: SCRATCH INTENSIVE</strong> <ul style=font-size:15px;><li>Học sinh được cung cấp kiến thức về công cụ quản lý dự án và các công cụ AI tích hợp. Phát triển khả năng sáng tạo và giải quyết vấn đề thực tế trong sản phẩm cá nhân.</li></ul>",
    ],
  },
  {
    id: "N02",
    title: "Khóa 2: Lập trình Game Maker",
    detail: [
      "Khóa học lập trình Game Creator cung cấp ba cấp độ từ cơ bản đến chuyên sâu để học viên tiếp cận và phát triển kỹ năng từ lập trình cơ bản đến chuyên sâu, sử dụng công cụ Gamemaker 2.0 và ngôn ngữ GML. Học sinh sẽ học cách xây dựng cốt truyện, tạo và điều khiển nhân vật, đồng thời tận dụng các công nghệ AI để hỗ trợ phát triển sản phẩm trò chơi.",
      "Cấp độ: 3 Level",
      "Thời gian học: 42 buổi - 2h/buổi ",
      "Độ tuổi: Các bạn nhỏ từ 10-12 tuổi. ",
      "<strong>LEVEL 1: GAME BASIC</strong> <ul style=font-size:15px;><li>Học sinh hình thành tư duy thuật toán sử dụng lập trình kéo thả Gamemaker. Phát triển tư duy sáng tạo thông qua sản phẩm cá nhân có ứng dụng công cụ AI tạo tài nguyên. </li></ul>",
      "<strong>LEVEL 2: GAME ADVANCED</strong> <ul style=font-size:15px;><li>Học sinh được tiếp cận với ngôn ngữ lập trình bậc cao GML để giải quyết các vấn đề từ cơ bản đến phức tạp. Ứng dụng các công cụ AI để hỗ trợ xây dựng cốt truyện thêm sáng tạo cho dự án cá nhân. </li></ul>",
      "<strong>LEVEL 3: GAME INTENSIVE</strong> <ul style=font-size:15px;><li>Học sinh lập trình nâng cao với GML để xử lí tối ưu các chức năng trong trò chơi. Cung cấp kiến thức và công cụ quản lí dự án để phát triển sản phẩm cá nhân giải quyết vấn đề thực tế.</li></ul>",
    ],
  },
  {
    id: "N03",
    title: "Khóa 3: Lập trình app producer",
    detail: [
      "Khóa học lập trình App Producer cung cấp ba cấp độ đào tạo từ cơ bản đến chuyển sâu , giúp học viên tiếp cận và làm chủ ngôn ngữ Python. Học sinh sẽ phát triển kỹ năng giải quyết vấn đề, quản lý danh sách đối tượng, và thiết kế giao diện cho ứng dụng desktop. Khóa học cũng tập trung vào việc xử lý tín hiệu và kế hoạch phát triển ứng dụng trong dự án cá nhân của học viên, cùng với việc sử dụng công cụ AI để hỗ trợ quá trình phát triển và tích hợp thành tính năng trong dự án. ",
      "Cấp độ: 3 Level",
      "Thời gian học: 42 buổi - 2h/buổi ",
      "Độ tuổi: Các bạn nhỏ từ 11-13 tuổi. ",
      "<strong>LEVEL 1: APP BASIC</strong> <ul style=font-size:15px;><li>Học sinh được cung cấp kiến thức ngôn ngữ lập trình Python. Thông qua khóa học, học viên sẽ học cách áp dụng Python để giải quyết các vấn đề thực tế và xây dựng các chương trình Python có tính ứng dụng cao.</li></ul>",
      "<strong>LEVEL 2: APP ADVANCED</strong> <ul style=font-size:15px;><li>Học sinh được tìm hiểu thư viện xây dựng giao diện cũng như kỹ năng, phương pháp lập trình nâng cao trong Python. Xây dựng giao diện cho ứng dụng cá nâng có sự hỗ trợ công cụ AI nâng cao trải nghiệm người dùng.</li></ul>",
      "<strong>LEVEL 3: APP INTENSIVE</strong> <ul style=font-size:15px;><li>Học sinh lập trình nâng cao để xử lí yêu cầu nguời dùng trên ứng dụng và kết nối dữ liệu. Xây dựng dự án cá nhân giải quyết vấn đề thực tế có AI là tính năng của ứng dụng. </li></ul>",
    ],
  },
  {
    id: "N04",
    title: "Khóa 4: Lập trình web developer",
    detail: [
      "Khóa học lập trình Web Developer mang đến ba cấp độ đào tạo từ cơ bản đến nâng cao, giúp học viên xây dựng và phát triển kỹ năng lập trình web. Từ việc tiếp cận ngôn ngữ đánh dấu HTML, CSS đến kiến thức về ngôn ngữ bậc cao Javascript và tư duy thiết kế giao diện website, học sinh sẽ học cách tạo ra những trang web linh hoạt, thân thiện với người dùng và tích hợp nhiều yếu tố AI khác nhau để nâng cao trải nghiệm người dùng và tối ưu hóa hiệu suất của trang web",
      "Cấp độ: 3 Level",
      "Thời gian học: 42 buổi - 2h/buổi ",
      "Độ tuổi: Các bạn nhỏ từ  13 - 16 tuổi",
      "<strong>LEVEL 1: WEB BASIC</strong> <ul style=font-size:15px;><li>Web Basic là cung cấp kiến thức và kỹ năng cơ bản về lập trình giao diện web HTML và CSS. Mục tiêu thúc đẩy sự sáng tạo và tạo ra dự án web cá nhân từ ý tưởng của mỗi học viên. </li></ul>",
      "<strong>LEVEL 2: WEB ADVANCED</strong> <ul style=font-size:15px;><li>Web Advanced là cung cấp kiến thức và kỹ năng về lập trình web sử dụng ngôn ngữ Javascript. Mục tiêu giúp học sinh tạo ra website cá nhân hoàn thiện về giao diện và tính năng câng cao.</li></ul>",
      "<strong>LEVEL 3: WEB INTENSIVE</strong> <ul style=font-size:15px;><li>Học sinh được trang bị kiến thức chuyên sâu về Javascript; làm việc với máy chủ và cơ sở dữ liệu trực tuyến.Học sinh xây dựng trang web giải quyết vấn đề thực tế và AI đóng vai trò là tính năng của trang web.</li></ul>",
    ],
  },
  {
    id: "N05",
    title: "Khóa 5: Khoa học máy tính (computer scientist)",
    detail: [
      "Khóa học nhập môn khoa học máy tính cung cấp ba cấp độ từ cơ bản đến chuyên sâu giúp học viên xây dựng nền tảng lập trình vững chắc, phát triển tư duy và kỹ năng phân tích dữ liệu, và hiểu về đạo đức và trách nhiệm trong việc áp dụng công nghệ AI.",
      "Cấp độ: 3 Level",
      "Thời gian học: 42 buổi - 2h/buổi ",
      "Độ tuổi: Các bạn nhỏ từ  14 - 17 tuổi",
      "<strong>LEVEL 1: COMPUTER SCIENCE BASIC</strong> <ul style=font-size:15px;><li>Khám phá lập trình hướng đối tượng cùng ngôn ngữ Python, cấu trúc dữ liệu và giải thuật với các khóa học chất lượng, giúp học viên xây dựng nền tảng vững chắc trong lập trình.</li></ul>",
      "<strong>LEVEL 2: COMPUTER SCIENCE ADVANCED</strong> <ul style=font-size:15px;><li>Xây dựng tư duy dữ liệu và kỹ năng phân tích dữ liệu, giúp học viên trở thành nhà kể chuyện với dữ liệu. </li></ul>",
      "<strong>LEVEL 3: COMPUTER SCIENCE INTENSIVE</strong> <ul style=font-size:15px;><li>Học viên có đạo đức và thái độ trách nhiệm khi tìm hiểu thế giới AI, từ đó xây dựng những ứng dụng AI bền vững. </li></ul>",
    ],
  },
];
