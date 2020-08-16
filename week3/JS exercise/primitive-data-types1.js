var a = parseInt('150');
var b = parseInt('164aa');
var c = parseFloat('6.14');
var d = parseInt('hello');
var e = parseInt('true');
var f = parseInt('false');

// * '12' / 4  -> 3
// * 20 / '5' -> 4
// * true * 2 -> 2
// * 5 * false -> 0
// * 15 - '5' -> 10
// * '10' - 5 -> 5
// * '10' + 5 -> 105
// * 5 + '10' -> 3
// * 5 + +'10' -> 15

// * 5 == '5' True
// * '12' === 12 False
// * true == 1 True
// * '' == false True
// * [] == false True
// * typeof ('12' / '4') === 'number' True
// * true !== 1 True
// * false != 0 False
// * '10' > 5 True
// * '10' > '5' False
