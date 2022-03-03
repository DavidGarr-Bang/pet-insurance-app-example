export const age_cal = (date) => {
  let splitDate = date.split("-");
  let newDate = `${splitDate[1]}/${splitDate[1]}/${splitDate[2]}`;
  var timestamp = Date.parse(newDate);
  let formatDate = new Date(timestamp);
  let cur = new Date();
  let diff = cur - formatDate;
  let age = Math.floor(diff / 31536000000);
  return age;
};

export const createPetID = (length, UseSymbols, UseCaps, UseNumbers) => {
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var arr = [characters];

  let arrlength = arr.join("").length;

  for (var i = 0; i < length; i++) {
    result += arr.join("").charAt(Math.floor(Math.random() * arrlength));
  }

  return result;
};
