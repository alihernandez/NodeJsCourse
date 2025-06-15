const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  // console.log("in the middleware");
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("admin/add-product", {
    docTitle: "Add Products",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
    //   console.log(adminData.products);
  res.render("admin/products", {
    prods: products,
    docTitle: "Admin Products",
    path: "/admin/products"
  });
});
};


exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  console.log(this);
  res.redirect("/");
};

