module.exports = {
  friendlyName: 'Reg',

  description: 'Reg user.',

  inputs: {
    userName: {
      type: 'string',
      description: '用户名',
      required: true, // 参数设置必填，不然验证不通过
    },
    password: {
      type: 'string',
      description: '密码',
      required: true, // 参数设置必填，不然验证不通过
    },
    nickName: {
      type: 'string',
      description: '昵称',
    },
    gender: {
      type: 'string',
      description: '性别',
    },
    avatar: {
      type: 'string',
      description: '头像',
    },
  },

  exits: {},

  fn: async function ({ userName, password, nickName, gender, avatar }) {
    // All done.
    const user = await User.create({
      userName,
      password,
      nickName,
      gender,
      avatar,
    }).fetch(); // 创建完成之后返回当前值
    // console.log(user);
    if (user) {
      return {
        code: 1,
        info: '注册成功',
        token: await sails.helpers.token(user),
      };
    }
  },
};
