const greater_than_10 = (n) => {
  return new Promise(function (resolve, reject) {
    if (n > 10) {
      resolve("its greater_than_10");
    } else reject("its not greater_than_10");
  });
};

greater_than_10(10)
  .then((msg) => {
    console.log(msg + " Yes yes yes");
  })
  .catch((msg) => {
    console.error(msg + " no no no");
  });
