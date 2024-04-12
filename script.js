let num = 266219;
let sum = 1;
num = num.toString().split('');

for (let i = 0; i < num.length; i++) {
  sum *= +num[i];
}
console.log(sum);

sum = sum ** 3;
console.log(sum);

console.log(sum.toString().slice(0, 2));
