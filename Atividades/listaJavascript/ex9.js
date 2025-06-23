let maior = -1;
const arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);

    console.log(arr[i]);

    if (arr[i] > maior) maior = arr[i];
}

alert(maior);
