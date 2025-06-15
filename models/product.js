const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "products.json");
const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err){
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}

module.exports = class Products {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
        // console.log(fileContent)
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
            console.log(err);
        })
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
