const { productModel } = require("../models");

module.exports = {
  create: async (req, res) => {
    let obj = req.body;
    try {
      let data = await productModel.create(obj);
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  read: async (req, res) => {
    try {
      let data = await productModel.findAll();
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  update: async (req, res) => {
    let id = req.params.id;
    let obj = req.body;
    try {
      let data = await productModel.update(obj, {
        where: {
          id: id,
        },
      });
      res.send(data);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  delete: async (req, res) => {
    let id = req.params.id;
    try {
      let data = await productModel.destroy({
        where: {
          id: id,
        },
      });
      res.send({data});
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
