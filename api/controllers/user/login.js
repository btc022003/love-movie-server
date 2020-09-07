const { exists } = require('grunt');

module.exports = {
  friendlyName: 'Login',

  description: 'Login user.',

  // 表示传递的参数
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

  // 所有的逻辑处理都在此处进行
  fn: async function (inputs) {
    // console.log(inputs);
    const user = await User.findOne({
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
