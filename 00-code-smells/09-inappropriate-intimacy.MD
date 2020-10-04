## Inappropriate Intimacy (Intimidade inadequada)
```js
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }
}

class Product {
  constructor(name, shoppingCart) {
    this.shoppingCart = new ShoppingCart;
    this.name = name;    
  }

  addToCart() {
    this.shoppingCart.addItem(this.name)
  }
}

const shoppingCart = new ShoppingCart();

const product = new Product('Socks', ShoppingCart);

product.addToCart();

console.log(shoppingCart.items);
```