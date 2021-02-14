var number = [1, 300, 12, 34, 5, 1, 4, 6];
var i = 0;
var total = 0;

while (i < number.length) {
  total = total + number[i];
  i = i + 1;
}
console.log(`total : ${total}`);
