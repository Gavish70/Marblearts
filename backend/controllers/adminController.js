const db = require("../config/db");

const jwt = require("jsonwebtoken");

exports.loginAdmin = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM tbl_admin WHERE username = ?",
    [email],
    async (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.length === 0)
        return res.status(404).json({ msg: "Admin not found" });

      const admin = result[0];

      const isMatch = password === admin.password; // temp

      if (!isMatch)
        return res.status(400).json({ msg: "Wrong password" });

      // 🔥 TOKEN CREATE (30 minute expiry)
      const token = jwt.sign(
        { id: admin.id },
        "secretkey",
        { expiresIn: "30m" }
      );

      res.json({
        msg: "Login successful",
        token: token,
      });
    }
  );
};