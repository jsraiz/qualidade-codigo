## Multiple return statements (Declarações de retorno múltiplas)
```js
function getNome(nome) {
  if (nome !== null) {
    return nome
  } else {
    return 'Anônimo';
  }
}
```
```js
function getNome(nome) {
  return nome || 'Anônimo';
}
```

Com nullish coalescing
```js
function getNome(nome) {
  return nome ?? 'Anônimo';
}
```