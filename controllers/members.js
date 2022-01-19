const { findMany, create } = require("../models/members");

const getMembers = async (req, res) => {
  const [members] = await findMany(req.query);
  res.status(200).json(members);
};

const createMembers = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("Member has been created");
  } catch (err) {
    res.status(500).send("Error creating member");
  }
};

module.exports = {
  getMembers,
  createMembers,
};
