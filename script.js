const arr = ['124214512', '214125125', '4512521', '01412', '125215', '422155', '5325331'];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].slice(0, 1) === '2' || arr[i].slice(0, 1) === '4') {
    console.log(arr[i]);
  }
}

arr.find((el) => {
  if (el[0] === '2' || el[0] === '4') {
    console.log(el);
  }
});

//
const num = 100;
for (let i = 1; i <= num; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
      console.log(i, 'Делители этого числа 1 и ' + i);
    }
  }
}
