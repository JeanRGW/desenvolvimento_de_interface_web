const arr = [
    1, 3, 5, 4, 12, 4, 22, 41, 54, 32, 44, 52, 55, 13, 52, 31, 42, 44, 52, 1,
];

let sum = 0;
for (const x of arr) {
    if (x % 2 !== 0) sum += x;
}
alert(sum);
