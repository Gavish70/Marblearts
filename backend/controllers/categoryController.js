const db = require("../config/db");

exports.getCategories = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 30;
  const offset = (page - 1) * limit;

  // First get total count
  const countSql = `
    SELECT COUNT(*) as total
    FROM tbl_maincategory
  `;

  db.query(countSql, (err, countResult) => {
    if (err) {
      console.error("Error getting count:", err);
      return res.status(500).json({ error: "Database error", details: err.message });
    }

    const total = countResult[0].total;

    // Then get paginated data
    const sql = `
      SELECT
        c.*,
        COALESCE(COUNT(p.id), 0) AS product_count
      FROM tbl_maincategory c
      LEFT JOIN tbl_product p ON c.id = p.maincategory
      GROUP BY c.id
      ORDER BY c.id ASC
      LIMIT ? OFFSET ?
    `;

    db.query(sql, [limit, offset], (err, result) => {
      if (err) {
        console.error("Error fetching categories:", err);
        return res.status(500).json({ error: "Database error", details: err.message });
      }

      console.log("Categories fetched:", result.length);
      
      res.json({
        categories: result || [],
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


exports.createCategory = (req, res) => {

  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  const name = req.body?.maincategory;
  const image = req.file ? req.file.filename : null;

  if (!name) {
    return res.status(400).json({ msg: "Category name required" });
  }

  const sql = `
    INSERT INTO tbl_maincategory (maincategory, maincategory_img)
    VALUES (?, ?)
  `;

  db.query(sql, [name, image], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Category created" });
  });
};

exports.getCategoryById = (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM tbl_maincategory WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(result[0]);
  });
};

exports.updateCategory = (req, res) => {
  const id = req.params.id;
  const { maincategory } = req.body;

  if (!maincategory) {
    return res.status(400).json({ msg: "Category name required" });
  }

  const sql = `
    UPDATE tbl_maincategory
    SET maincategory = ?
    WHERE id = ?
  `;

  db.query(sql, [maincategory, id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Category updated successfully" });
  });
};

exports.deleteCategory = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM tbl_maincategory WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Category deleted successfully" });
  });
};