/**
 * CollectionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create(req, res) {
    if (req.body.movie) {
      const count = await Collection.count({
        user: req.user.id,
        movie: req.body.movie,
      });
      if (count > 0) {
        res.json({ code: 0, info: '此影片已收藏' });
      } else {
        await Collection.create({
          user: req.user.id,
          movie: req.body.movie,
        });
        res.json({
          code: 1,
          info: '收藏成功',
        });
      }
    } else {
      res.json({
        code: 0,
        info: '参数错误',
      });
    }
  },
  async del(req, res) {
    const { id } = req.params;
    if (id) {
      const c = await Collection.destroyOne({
        user: req.user.id,
        movie: id,
      });
      if (c) {
        res.json({
          code: 1,
          info: '删除成功',
        });
      } else {
        res.json({
          code: 0,
          info: '当前影片没有收藏',
        });
      }
    } else {
      res.json({
        code: 0,
        info: '参数错误',
      });
    }
  },
};
