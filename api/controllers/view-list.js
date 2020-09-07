module.exports = {
  friendlyName: 'View list',

  description: 'Display "List" page.',

  // 表示成功之后输出的内容
  exits: {
    success: {
      // 设置输出时使用的模版路径
      viewTemplatePath: 'pages/list',
    },
  },

  fn: async function () {
    // Respond with view.
    // 此处的内容为数据 可以在页面视图中进行展示
    return {
      title: '我是列表页',
      name: '沈剑心',
      skills: '关门',
      people: [
        {
          id: 1,
          name: '小白',
        },
        {
          id: 2,
          name: '碧瑶',
        },
        {
          id: 3,
          name: '小凡',
        },
      ],
    };
  },
};
