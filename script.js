// AOC Day 1 Solution using the simplest possible JavaScript
// (this took me over an hour)

const list1 = [3, 4, 2, 1, 3, 3]
const list2 = [4, 3, 5, 3, 9, 3]
const sortedList1 = list1.sort()
const sortedList2 = list2.sort()
let absoluteDifferences = [];
let sum = 0;
console.log(sortedList1);
console.log(sortedList2);
for (var i = 0; i < 6; i++) {
  absoluteDifferences.push(Math.abs(sortedList1[i] - sortedList2[i]))
}
for (var i= 0; i < 6; i++ ) {
  sum += absoluteDifferences[i]
}
console.log(sum)