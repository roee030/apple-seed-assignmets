const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    let arrCaps = arr.map((w) => {
      if (typeof w === "string") {
        return w.toUpperCase();
      } else {
        reject("not all the words are string");
      }
    });
    resolve(arrCaps);
  });
};
const sortWords = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr) {
      arr.forEach((element) => {
        if (typeof element !== "string") {
          reject("the array element are not string only");
        }
      });
      resolve(arr.sort());
    } else {
      reject("This is not array or somthing.(err)");
    }
  });
};
const add1 = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr) {
      for (let index = 0; index < arr.length; index++) {
        arr[index] += "2";
      }
      resolve(arr);
    }
  });
};
const checkArr = ["aasdf", "aaasdf"];
const failArr = [123, "asd"];

makeAllCaps(checkArr)
  .then(sortWords)
  .then(add1)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// makeAllCaps(failArr)
//   .then(sortWords)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
