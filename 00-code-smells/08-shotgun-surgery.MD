## Shotgun Surgery (Cirurgia de espingarda)
A mesma alteração precisa ser feita em vários lugares

```js
Lib.Router('/produtos', function(param) {
  const cache = getFromCache('/produtos');
  ///...
});

Lib.Router('/carrinho', function(param) {
  const cache = getFromCache('/carrinho');
  ///...
});

Lib.Router('/categorias', function(param) {
  const cache = getFromCache('/categorias');
  ///...
});
```

Definindo um middleware

```js

Lib.Middlewares.add(getFromCache)

Lib.Router('/produtos', function(param) {
  // param.cache;
  ///...
});

Lib.Router('/carrinho', function(param) {
  // param.cache
  ///...
});

Lib.Router('/categorias', function(param) {
  // param.cache
  ///...
});
```