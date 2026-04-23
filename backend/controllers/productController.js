const db = require("../config/db");

exports.getProductsByCategory = (req, res) => {
  const slug = req.params.slug;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const offset = (page - 1) * limit;

  // First get total count for this category
  const countSql = `
    SELECT COUNT(*) as total
    FROM tbl_product p
    JOIN tbl_maincategory c ON p.maincategory = c.id
    WHERE LOWER(REPLACE(TRIM(c.maincategory),' ','-')) = ?
  `;

  db.query(countSql, [slug], (err, countResult) => {
    if (err) {
      console.error("Products count query error:", err);
      return res.status(500).json({ error: "Database error", details: err.message });
    }

    const total = countResult[0].total;

    // Then get paginated data
    const sql = `
      SELECT p.*
      FROM tbl_product p
      JOIN tbl_maincategory c
      ON p.maincategory = c.id
      WHERE LOWER(REPLACE(TRIM(c.maincategory),' ','-')) = ?
      ORDER BY p.id ASC
      LIMIT ? OFFSET ?
    `;

    db.query(sql, [slug, limit, offset], (err, result) => {
      if (err) {
        console.error("Products query error:", err);
        return res.status(500).json({ error: "Database error", details: err.message });
      }

      console.log("Products fetched for slug:", slug, "Count:", result.length);
      
      res.json({
        products: result || [],
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: limit
        }
      });
    });
  });
};

exports.getProductById = (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM tbl_product WHERE id = ? ORDER BY id ASC`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(result[0]);
  });
};

exports.createProduct = (req, res) => {

  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  const title = req.body?.title;
  const price = req.body?.price;
  const maincategory = req.body?.maincategory;

  if (!title || !price || !maincategory) {
    return res.status(400).json({ msg: "Missing fields" });
  }

  const image = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO tbl_product (title_name, price, maincategory, property_img)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [title, price, maincategory, image], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Product created with image" });
  });
};


exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const { title, price, maincategory } = req.body;

  // Check if a new image was uploaded
  const newImage = req.file ? req.file.filename : null;

  let sql;
  let params;

  if (newImage) {
    // Update with new image
    sql = `
      UPDATE tbl_product
      SET title_name = ?, price = ?, maincategory = ?, property_img = ?
      WHERE id = ?
    `;
    params = [title, price, maincategory, newImage, id];
  } else {
    // Update without changing image
    sql = `
      UPDATE tbl_product
      SET title_name = ?, price = ?, maincategory = ?
      WHERE id = ?
    `;
    params = [title, price, maincategory, id];
  }

  db.query(sql, params, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Updated successfully" });
  });
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM tbl_product WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Product deleted successfully" });
  });
};

exports.getAllProducts = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const offset = (page - 1) * limit;

  // First get total count
  const countSql = "SELECT COUNT(*) as total FROM tbl_product";

  db.query(countSql, (err, countResult) => {
    if (err) return res.status(500).json(err);

    const total = countResult[0].total;

    // Then get paginated data
    const sql = "SELECT * FROM tbl_product ORDER BY id DESC LIMIT ? OFFSET ?";

    db.query(sql, [limit, offset], (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        products: result,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: limit
        }
      });
    });
  });
};