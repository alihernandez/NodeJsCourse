const express = require("express");

const shopController = require("../controllers/shop")

const router = express.Router();

router.get("/", shopController.getIndex);
console.log("1")

router.get("/products", shopController.getProducts);
console.log("2")

router.get("/cart", shopController.getCart);
console.log("3")

router.get("/checkout", shopController.getCheckout);
console.log("4")

module.exports = router;
