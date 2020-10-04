import usuariosData from './_data.js';

console.group('01 exemplo');
  console.group('%ccom for', 'background-color:#ff9e9e;');

    let todosMaiores = true;
    for (let i = 0; i < usuariosData.length; i++) {
      if (usuariosData[i].idade < 18) {
        todosMaiores = false;
        break;
      }
    }

    if (todosMaiores) {
      console.log('Todos são de maior');
    } else {
      console.log('Nem todos são de maiores')
    }

  console.groupEnd('com for');

  console.group('Versão refatorada');
    // * Versão refatorada aqui
  
  console.groupEnd('Versão refatorada');

console.groupEnd('01 exemplo');

