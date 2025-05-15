const Product = require("../models/product")

exports.getAddProduct = (req, res, next) => {
  // console.log("in the middleware");
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-product", {
    docTitle: "Add Products",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  console.log(req.body);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    //   console.log(adminData.products);
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});
};