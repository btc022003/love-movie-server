module.exports = {
  friendlyName: 'Login',

  description: 'Login manager.',

  inputs: {
    userName: {
      type: 'string',
      description: '用户名',
      required: true, // 参数设置必填，不然验证不通过
    },
    password: {
      type: 'string', // 设置参数的数据类型
      description: '密码',
    },
  },

  exits: {},

  fn: async function (inputs) {
    // All done.
    const user = await Manager.findOne({
      userName: inputs.userName,
    }).decrypt();
    if (user) {
      if (user.password === inputs.password) {
        return {
          code: 1,
          info: '登录成功',
          token: await sails.helpers.token(user),
        };
      } else {
        return {
          code: 0,
          info: ' 密码错误',
        };
      }
    } else {
      return {
        code: 0,
        info: '用户信息不存在',
      };
    }
  },
};
