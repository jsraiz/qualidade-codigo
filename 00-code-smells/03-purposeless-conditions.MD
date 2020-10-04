## Purposeless conditions (Condições sem propósito)
Se você ver um if else com return `true` e `false` já fique atento! A expressão que fica dentro do if já retorna um booleano direto
```js
function eDeMaior(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}
```

```js
function eDeMaior(idade) {
  return idade >= 18;
}
```