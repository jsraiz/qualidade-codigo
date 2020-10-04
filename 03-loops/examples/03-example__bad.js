import usuariosData from './_data.js';

console.group('03 exemplo');
console.group('com for');

let temDeMaior = false;

for (let i = 0; i < usuariosData.length; i++) {
  if (usuariosData[i].idade >= 18) {
    temDeMaior = true;
    break;
  }
}

console.log('tem de maior', temDeMaior)

console.groupEnd('com for');
console.groupEnd('03 exemplo');