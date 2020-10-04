/**
 * Exemplo de condicional gigante, fluxo complexo e aninhamento desnecessário.
 *
 * O refatoramento pode ser feito em etapas, a primeira seria remover esse ninho
 *
 * Depois, vamos observar um padrão semelhante ao 004-exemplo
 *
 * TODO: remover condicional e função continar retornando mesmos resultados
 * ? Esse script possui testes
 */

let value1864cmn = 1864;
let value1746cmn = 1746;
let value1628cmn = 1628;
let value1510cmn = 1510;
let value1392cmn = 1392;
let value1274cmn = 1274;
let value1156cmn = 1156;
let value1038cmn = 1038;
let value920cmn = 920;

// export default function getSpeed(speed) {
  // let othvalue = 0;

  // if (speed > value1864cmn) {
  //   othvalue = value1864cmn;
  // } else if (speed > value1746cmn) {
  //   othvalue = value1746cmn;
  // } else if (speed > value1628cmn) {
  //   othvalue = value1628cmn;
  // } else if (speed > value1510cmn) {
  //   othvalue = value1510cmn;
  // } else if (speed > value1392cmn) {
  //   othvalue = value1392cmn;
  // } else if (speed > value1274cmn) {
  //   othvalue = value1274cmn;
  // } else if (speed > value1156cmn) {
  //   othvalue = value1156cmn;
  // } else if (speed > value1038cmn) {
  //   othvalue = value1038cmn;
  // } else if (speed > value920cmn) {
  //   othvalue = value920cmn;
  // }

//   return othvalue;
// }

function between (v1, v2) {
  return function (value) {
    return value > v1 && value <= v2;
  }
}

export default function getSpeed(speed) {
  const tests = [
    [ function(value) { return value <= value920cmn }, 0 ],
    [ between(value920cmn, value1038cmn), value920cmn ],
    [ between(value1038cmn, value1156cmn), value1038cmn ],
    [ between(value1156cmn, value1274cmn), value1156cmn ],
    [ between(value1274cmn, value1392cmn), value1274cmn ],
    [ between(value1392cmn, value1510cmn), value1392cmn ],
    [ between(value1510cmn, value1628cmn), value1510cmn ],
    [ between(value1628cmn, value1746cmn), value1628cmn ],
    [ between(value1746cmn, value1864cmn), value1746cmn ],
    [ function(value) { return value > value1864cmn }, value1864cmn ],
  ];

  const [ _, othvalue ] = tests.find(function([ test ]) {
    return test(speed)
  });

  return othvalue;
}
