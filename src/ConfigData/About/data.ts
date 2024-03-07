interface isAbout {
  name: string;
  dob: string;
  gender: string;
  age: number;
  phone: string;
  email: string;
}

export const dataAbout: isAbout = {
  name: "Trần Hữu Thiện",
  dob: "11 / 02 / 1999",
  gender: "Male",
  age: 26,
  phone: "039937xxxx",
  email: "tranhuuthien98@gmail.com",

  // name: "Trần Thị Phương Thảo",
  // dob: "11 / 02 / 1999",
  // gender: "Female trẻ trẻ",
  // age: 25,
  // phone: "0329050100",
  // email: "thaottp1102@gmail.com",
};

// <form action="https://formsubmit.co/email@example.com" method="POST">
//   <label for="name">Tên</label>
//   <input id="name" type="text" name="name" required /><br />
//   <label for="email">Email</label>
//   <input id="email" type="email" name="email" required /><br />
//   <label for="message">Lời nhắn</label><br />
//   <textarea id="message" name="message" placeholder="Lời nhắn" required ></textarea><br />
//   <button type="submit">Gửi</button>
// </form>
