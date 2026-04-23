const express = require("express");
const router = express.Router();
const db = require("../config/db");

const {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory
} = require("../controllers/categoryController");

const uploadCategory = require("../middleware/uploadCategory");
const auth = require("../middleware/auth");

router.get("/", getCategories);
router.get("/id/:id", getCategoryById);
router.post("/create", auth, uploadCategory.single("maincategory_img"), createCategory);
router.put("/update/:id", auth, updateCategory);
router.delete("/delete/:id", auth, deleteCategory);

module.exports = router;