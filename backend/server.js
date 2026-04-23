const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const db = require("./config/db");
const adminRoutes = require("./routes/admin");

const categoryRoutes = require("./routes/categories");
const productRoutes = require("./routes/products");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Health check endpoint
app.get("/api/health", (req, res) => {
  db.query("SELECT 1", (err) => {
    if (err) {
      return res.status(500).json({ status: "Database connection failed", error: err.message });
    }
    res.json({ status: "OK", message: "Database connected" });
  });
});

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.use("/api/admin", adminRoutes);

app.use("/uploads", express.static("uploads"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/api/footer-categories", (req, res) => {

  const sql = `
    SELECT id, maincategory
    FROM tbl_maincategory
    ORDER BY RAND()
    LIMIT 10
  `;

  db.query(sql, (err, result) => {

    if (err) {
      console.error("Footer categories error:", err);
      return res.status(500).json({ error: "Database error", details: err.message });
    }

    res.json(result || []);

  });

});


app.get("/api/product-page/:slug", (req, res) => {

  const slug = req.params.slug;

  const categoryName = slug.replaceAll("-", " ");

  const categorySQL = `
    SELECT * 
    FROM tbl_maincategory 
    WHERE LOWER(maincategory) = LOWER(?)
  `;

  db.query(categorySQL, [categoryName], (err, categoryResult) => {

    if (err) {
      console.error("Category lookup error:", err);
      return res.status(500).json({ error: "Database error", details: err.message });
    }

    if (categoryResult.length === 0) {
      return res.json({ products: [], categories: [] });
    }

    const categoryId = categoryResult[0].id;

    const productSQL = `
      SELECT *
      FROM tbl_product
      WHERE maincategory = ?
      ORDER BY id DESC
    `;

    db.query(productSQL, [categoryId], (err, products) => {

      if (err) {
        console.error("Products query error:", err);
        return res.status(500).json({ error: "Database error", details: err.message });
      }

      db.query("SELECT * FROM tbl_maincategory", (err, categories) => {

        if (err) {
          console.error("All categories query error:", err);
          return res.status(500).json({ error: "Database error", details: err.message });
        }

        res.json({
          products: products || [],
          categories: categories || []
        });

      });

    });

  });

});