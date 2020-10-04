## Duplication (Duplicação)

```js
let frete = 16.9;

function renderizaCarrinho() {
  // ...
  if (totalProdutos >= 200) {
    frete = 0;
  }
  //...
}

function pagamento() {
  if (totalProdutos >= 200) {
    frete = 0;
  }
  total = totalProdutos + frete;
}
```

```js
const valorFeteGratis = 200;

const temFreteGratis = R.gte(R._, valorFeteGratis);

function renderizaCarrinho() {
  // ...
  if (temFreteGratis(totalProdutos)) {
    frete = 0;
  }
  //...
}

function pagamento() {
  if (temFreteGratis(totalProdutos)) {
    frete = 0;
  }
  total = totalProdutos + frete;
}

```