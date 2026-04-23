const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const uploadProduct = require("../middleware/uploadProduct");

const {
  getProductsByCategory,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts
} = require("../controllers/productController");

router.get("/:slug", getProductsByCategory);
router.get("/id/:id", getProductById);
router.post("/create", auth, uploadProduct.single("property_img"), createProduct);
router.put("/update/:id", auth, uploadProduct.single("property_img"), updateProduct);
router.delete("/delete/:id", auth, deleteProduct);
router.get("/", getAllProducts);

module.exports = router;