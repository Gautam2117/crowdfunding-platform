// PG database client/connection setup
const { Pool } = require("pg");

const dbParams = {
  host: "localhost",
  port: 5432,
  user: "postgres", // Use quotes for string values
  password: "gautam123", // Use quotes for string values
  database: "crowdfundingdb", // Use quotes for string values
};

const db = new Pool(dbParams);

db.connect()
  .then(() => console.log("Connected to the database!"))
  .catch((err) => console.error("Connection error", err.stack));

module.exports = db;
