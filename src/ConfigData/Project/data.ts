interface isProject {
  id: number;
  image: string;
  nameProject: string;
  decs: string;
  link: string;
}

export const dataProject: Array<isProject> = [
  {
    id: 1,
    image: "/img/Untitled1.png",
    nameProject: "Web Courses Register",
    decs: "Online course registration software",
    link: "https://web-register-courses-12.vercel.app/",
  },
  {
    id: 2,
    image: "/img/Untitled3.png",
    nameProject: "Portfolio",
    decs: "My Portfolio",
    link: "",
  },
  {
    id: 3,
    image: "/img/Untitled2.png",
    nameProject: "Booking Tickets Movie",
    decs: "Buy movie tickets online",
    link: "",
  },
];
