interface isEducation {
  id: number;
  fromDate: string;
  toDate: string;
  nameSchool: string;
  major: string;
  degreeClassification: string;
}

export const dataEducation: Array<isEducation> = [
  {
    id: 1,
    fromDate: "Sep 2016",
    toDate: "Jul 2019",
    nameSchool: "Cao Thang Technical College",
    major: "Electrical and electronic engineering technology.",
    degreeClassification: "Good",
  },

  {
    id: 2,
    fromDate: "Jul/2022",
    toDate: "May/2023",
    nameSchool: "Cybersoft - Cyberlearn Programing Education Center",
    major: "Software developer",
    degreeClassification: "Excellent",
  },
];
