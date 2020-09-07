module.exports = {
  friendlyName: 'Find',

  description: 'Find movie.',

  inputs: {
    page: {
      type: 'number',
      defaultsTo: 1,
    },
    per: {
      type: 'number',
      defaultsTo: 10,
    },
    name: {
      type: 'string',
    },
    category: {
      type: 'number',
    },
  },

  exits: {},

  fn: async function ({ per, page, name, category }) {
    // All done.
    const query = {};
    if (name) {
      query.name = { contains: name }; // 模糊匹配
    }
    if (category) {
      query.category = category;
    }
    const totals = await Movie.count(query);
    const movies = await Movie.find(query)
      .skip((page - 1) * per)
      .limit(per)
      .populate('category')
      .sort('id DESC');
    return {
      totals,
      page,
      pages: Math.ceil(totals / per),
      list: movies,
    };
  },
};
