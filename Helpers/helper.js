const healthCheck = (snack) => {
  let obj = snack;

  let { fiber, protein, added_sugar } = obj;

  if (fiber < 5 || protein < 5 || added_sugar > 5) {
    obj.is_healthy = false;
  } else {
    obj.is_healthy = true;
  }
  return obj;
};

const nameCap = (snack) => {
  healthCheck(snack);
  let { name } = snack;
  let processedName;

  let nameArr = name.split(" ").map((word) => {
    let normalizedWord = word.toLowerCase();
    let firstLetter = normalizedWord[0].toUpperCase();
    return firstLetter + normalizedWord.substring(1, normalizedWord.length);
  });

  processedName = nameArr.join(" ");
  return { ...snack, name: processedName };
};


module.exports = { nameCap, healthCheck };
