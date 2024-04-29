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
        text: "Khoá học Robotics (6-12 tuổi)",
        href: "./course.html",
      },
      {
        id: "Gamemaker",
        text: "Khoá học lập trình Gamemaker (13-15 tuổi)",
        href: "#",
      },
      { id: "javascript", text: "Khoá học lập trình Web (15+)", href: "#" },
    ],
  },

  {
    name: "Tin tức",
    href: "#tintuc",
    submenu: [
      {
        text: "Tin tuc 1",
        href: "#",
      },
      {
        text: "Tin tuc 2",
        href: "#",
      },
    ],
  },

  {
    name: "Sự kiện",
    href: "#",
    submenu: [
      {
        text: "Sự kiện Xcontest",
        href: "#xcontest",
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
