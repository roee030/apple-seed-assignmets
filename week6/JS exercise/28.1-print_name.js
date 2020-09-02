function Name(name) {
  this.name = name;
}
Name.prototype.printMyName = function () {
  console.log(this.name);
};

// Name.prototype.printMyNameAfter1Sec = function () {
//     setTimeout(() => {

//     }, 1000);
// }

const roee = new Name("Roee");
roee.printMyName();

function test(flag) {
  if (!flag) {
    setTimeout(function () {
      test(true);
    }, 5000);

    return;
  }

  console.log(roee.name);
}
test(false);
