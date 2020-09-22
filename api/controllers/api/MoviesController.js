/**
 * MovieController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async index(req, res) {
    let collections = [];
    try {
      if (req.headers.token) {
        const user = await sails.helpers.decodeToken(req.headers.token);
        const userCollections = await Collection.find({
          where: { user: user.id },
          select: ['id'],
        });
        collections = userCollections.map((item) => item.id);
      }
    } catch (err) {
      console.log(err);
    }
    // console.log(collections);
    // console.log(req.query);
    const query = {};
    if (req.query.name) {
      query.name = { contains: req.query.name }; // 模糊匹配
    }
    if (req.query.category) {
      query.category = req.query.category;
    }
    let page = 1;
    let per = 10;
    if (req.query.page) {
      page = req.query.page * 1;
    }
    if (req.query.per) {
      per = req.query.per * 1;
    }
    const totals = await Movie.count(query);
    // const movies = await Movie.find({
    //   where: query,
    //   select: ['id', 'category', 'name'],
    // })
    // .select(['id', 'category', 'name'])
    const movies = await Movie.find(query)
      .skip((page - 1) * per)
      .limit(per)
      .populate('category')
      .sort('id DESC');

    // 加入是否收藏的判断
    res.json({
      totals,
      page,
      pages: Math.ceil(totals / per),
      list: movies.map((item) =>
        collections.indexOf(item.id) > -1
          ? { ...item, isCollectioned: true }
          : { ...item, isCollectioned: false }
      ),
    });
  },
  async one(req, res) {
    const model = await Movie.findOne({ id: req.params.id }).populate(
      'category'
    );
    res.json(model);
  },
};
