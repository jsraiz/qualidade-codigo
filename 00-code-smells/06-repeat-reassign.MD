## Repeat reassign (Repita e reatribuição)
```js
let valorFinal = extraiPrecos(carrinhoItens);
valorFinal = aplicaDesconto(valorFinal);
valorFinal = aplicaTaxa(valorFinal);

console.log(valorFinal);
```

Com ninho
```js
const valorFinal = aplicaTaxa(aplicaDesconto(extraiPrecos(carrinhoItens)))
```

Com reduce
```js
const valorFinal = [extraiPrecos, aplicaDesconto, aplicaTaxa].reduce(function(acc, func) {
  return func(data);
}, carrinhoItens)
```

Com função auxiliar compose
```js
const calculaTotal = compose(aplicaTaxa, aplicaDesconto, extraiPrecos);
const valorFinal = calculaTotal(carrinhoItens);
```