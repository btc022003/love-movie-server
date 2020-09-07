/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    // console.log(req.query);
    res.json({
      code: 1,
      info: '获取数据成功',
      list: [],
    });
  },
};
