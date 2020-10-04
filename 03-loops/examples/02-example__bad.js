import usuariosData from './_data.js';

console.group('02 exemplo')
console.group('com for');

let todosGostamCozinhar = true;

for (let i = 0; i < usuariosData.length; i++) {
  if (usuariosData[i].interesses.includes('Cozinhar')) {
    continue;
  }
  todosGostamCozinhar = false;
}

if (todosGostamCozinhar) {
  console.log('Todos gostam de cozinhar')
} else {
  console.log('Nem todos gostam de cozinhar')
}

console.groupEnd('com for');
console.groupEnd('02 exemplo');