import moment from "moment";

export const exampleData = [
  {
    id: 0,
    companyTitle: "Pet at home",
    conpanyID: "jdjgkfkf",
    insurance_status: "Fully covered",
    animalType: "Cat",
    cip_Id: "lkzfhdhb",
    name: "bin bag",
    age: 2,
    claims: 2,
    claim_status: "In progress",
  },
  {
    id: 1,
    companyTitle: null,
    conpanyID: null,
    insurance_status: "No cover",
    animalType: "Dog",
    cip_Id: "jsdklhsd",
    name: "princess",
    age: 9,
    claims: 0,
    claim_status: "none",
  },
  {
    id: 2,
    companyTitle: null,
    conpanyID: null,
    insurance_status: "No cover",
    animalType: "Lizard",
    cip_Id: "jsdklhsd",
    name: "mr president",
    age: 8,
    claims: 2,
    claim_status: "none",
  },
  {
    id: 3,
    companyTitle: null,
    conpanyID: null,
    insurance_status: "No cover",
    animalType: "Other",
    cip_Id: "jsdklhsd",
    name: "fluffy",
    age: 10,
    claims: 2,
    claim_status: "none",
  },
];

export const inData = [
  {
    id: 0,
    companyTitle: "Pet at home",
    conpanyID: "jdjgkfkf",
    monthyPrice: 180,
    insurance_options: [
      { id: 0, cover: "Fully covered" },
      { id: 1, cover: "Accident only" },
      { id: 1, cover: "Accident & illness" },
    ],
  },
  {
    id: 1,
    companyTitle: "Pet love",
    conpanyID: "sdghuhje",
    monthyPrice: 140,
    insurance_options: [
      { id: 0, cover: "Fully covered" },
      { id: 1, cover: "Accident only" },
    ],
  },
  {
    id: 2,
    companyTitle: "Your pet care",
    conpanyID: "jjfjgd",
    monthyPrice: 200,
    insurance_options: [{ id: 0, cover: "Fully covered" }],
  },
  {
    id: 2,
    companyTitle: "Pet best",
    conpanyID: "sfgbrs",
    monthyPrice: 150,
    insurance_options: [
      { id: 0, cover: "Fully covered" },
      { id: 1, cover: "Accident only" },
      { id: 1, cover: "Accident & illness" },
    ],
  },
];

export const Mock_message_DATA = [
  {
    id: 0,
    title: "Pending claim",
    subtitle: "Pets at home will be in touch with soon following your claim.",
    date: moment().add(1, "days").format("L"),
  },
  {
    id: 1,
    title: "Welcome pet insurance",
    subtitle: "Your account has been created and is ready for use!",
    date: moment().format("L"),
  },
];
