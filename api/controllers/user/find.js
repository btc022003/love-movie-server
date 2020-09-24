module.exports = {
  friendlyName: 'Find',

  description: 'Find user.',

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
  },

  exits: {},

  fn: async function ({ per, page, name }) {
    // All done.
    const query = {};
    if (name) {
      query.userName = { contains: name }; // 模糊匹配
    }
    const totals = await User.count(query);
    const users = await User.find(query)
      .skip((page - 1) * per)
      .limit(per)
      .sort('id DESC');
    return {
      totals,
      page,
      pages: Math.ceil(totals / per),
      list: users,
    };
  },
};
