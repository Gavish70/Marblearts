const mysql = require("mysql2");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "marblearts",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelayMs: 0
});

// Handle connection errors
db.on("error", (err) => {
  console.log("Database error", err);
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log("Database connection was closed.");
  } else if (err.code === "PROTOCOL_ERROR") {
    console.log("Database protocol error.");
  } else if (err.code === "ER_CON_COUNT_ERROR") {
    console.log("Database has too many connections.");
  } else if (err.code === "ER_AUTHENTICATION_PLUGIN_ERROR") {
    console.log("Database authentication plugin error.");
  } else if (err.code === "ECONNREFUSED") {
    console.log("Database connection was refused.");
  } else if (err.code === "ECONNRESET") {
    console.log("Database connection was reset.");
  }
});

console.log("Database pool created successfully");

module.exports = db;