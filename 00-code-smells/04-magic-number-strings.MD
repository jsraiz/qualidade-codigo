## Magic numbers/Strings
```js
const width = screenWidth * 0.5625;
```

### Dê nome aos bois
```js 
const proportion = 0.5625;
const width = screenWidth * proportion;
```

### Magic string
```js
switch (action) {
  case 'UPDATE_USER':
     return updateUser(action.payload);
     break;
}
```

### Resolvendo com constante e symbol
```js
const UPDATE_USER = Symbol();

switch (action) {
  case UPDATE_USER:
    return updateUser(action.payload);
    break;
}
```