const db = require("../db");

const findMany = async () => {
  return db.promise().query("select * from members");
};

const create = async ({ name }) => {
  return db.promise().query("INSERT INTO members (name) VALUES (?)", [name]);
};
module.exports = { findMany, create };
