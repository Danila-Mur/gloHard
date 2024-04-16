const someString = '     0123456789012345678901234567890123456789 ';
const someString1 = '     012345678901234567890123456789 ';

const checkStr = (str) => {
  if (typeof str !== 'string') {
    console.log('Передана не строка');
    return;
  }

  if (str.length > 30) {
    str = str.trim().slice(0, 30);
    return str + '...';
  }

  return str;
};

console.log(checkStr(someString));
console.log(checkStr(someString1));
