const { User } = require("../models/");

module.exports = {
  async index(req, res) {
    const users = await User.findAll({ order: [["createdAt", "DESC"]] });
    return res.json(users);
  },

  async getUser(req, res) {
    const user = await User.findOne({ where: { id: req.params.id } });
    return res.json(user);
  },

  async update(req, res) {
    try {
      const user = await User.findOne({ where: { id: req.params.id } });
      user = await user.update(req.body);
      return res.json({ message: "User updated" });
    } catch (err) {
      return res.json(err);
    }
  },

  async delete(req, res) {
    try {
      const user = await User.findOne({ where: { id: req.params.id } });
      await user.destroy();
      return res.json({ message: "User deleted" });
    } catch (err) {
      return res.json(err);
    }
  },

  async save(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  }
};
