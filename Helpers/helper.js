// Correctly capitalize snack name - for snack names with two or more letters
// Correctly capitalize snack name with multiple words
// Correctly fix capitalization, regardless if the input is lowercase or uppercase

let obj = {
  id: 9,
  name: "sea weed",
  fiber: 0,
  protein: 1,
  added_sugar: 0,
  is_healthy: true,
  image: "https://picsum.photos/id/1080/300/300",
};

const nameCap = (snack) => {
  let { name } = snack;
  let processedName;
  //const name = snack.name
  let nameArr = name.split(" ").map((word) => {
    let normalizedWord = word.toLowerCase();
    let firstLetter = normalizedWord[0].toUpperCase();
    return firstLetter + normalizedWord.substring(1, normalizedWord.length);
  });
 // ["sea", "weed"] .join(" ") => "sea weed"
  processedName = nameArr.join(" ");
  return { ...snack, name: processedName }
  //   if (!name.includes(" ")) {
  //     return name.toLowerCase().charAt(0).toUpperCase();
  //   } else {
  //     const newNames = name.split(" ");
  //     const cap = newNames.map((ele) => {
  //      return ele.toLowerCase().charAt(0).toUpperCase() + ele.substring(1)
  //     });
  //     cap.join(" ")
  // //    return {...snack, ...snack[name]: cap.join(" ")};
  // //    return snack
  //return obj
};

//};

console.log(nameCap(obj));

module.exports = { nameCap };
