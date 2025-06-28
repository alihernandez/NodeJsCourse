const fs = require('fs');
const path = require('path');
const Cart = require("./cart");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "cart.json"
);

module.exports = class Cart{
	static addProduct(id, productPrice) {
		//fetch previous cart
		fs.readFile(p, (err, fileContent) => {
		let cart = {products:[], totalPrice: 0};
		if (!err) {
      try {
        const parsed = JSON.parse(fileContent);
        cart = parsed && parsed.products ? parsed : cart;
      } catch (e) {
        console.error("Cart file was corrupted or empty:", e);
      }
    }
		// analyze cart => find existing product
		const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
		const existingProduct = cart.products[existingProductIndex];
		let updatedProduct;
		if(existingProduct) {
			updatedProduct = { ...existingProduct};
			updatedProduct.qty = updatedProduct.qty +1;
			cart.products = [...cart.products];
			cart.products[existingProductIndex] = updatedProduct;
		} else {
		updatedProduct = { id: id, qty: 1};
		cart.products = [...cart.products, updatedProduct];
		}
		cart.totalPrice = cart.totalPrice + +productPrice;
		fs.writeFile(p, JSON.stringify(cart), err => {
		console.log(err);
		});
			});
	}
	static deleteProduct(id, productPrice) {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return;
    }
    const updatedCart = { ...JSON.parse(fileContent) };
    const productIndex = updatedCart.products.findIndex(prod => prod.id === id);
    if (productIndex === -1) {
      return;
    }
    const product = updatedCart.products[productIndex];
    const productQty = product.qty;

    updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);
    updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;

    fs.writeFile(p, JSON.stringify(updatedCart), err => {
      console.log(err);
    });
  });
}
};
