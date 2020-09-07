module.exports = {
  friendlyName: 'Change password',

  description: '',

  inputs: {
    oldPassword: {
      type: 'string',
      description: '原始密码',
      required: true, //
    },
    newPassword: {
      type: 'string',
      description: '新密码',
      required: true, //
    },
  },

  exits: {},

  fn: async function ({ oldPassword, newPassword }) {
    // All done.
    // console.log(this.req.user);
    // this.req 可以获取当前的req值
    const user = this.req.user;
    if (user.password === oldPassword) {
      await User.updateOne({
        userName: user.userName,
      }).set({
        password: newPassword,
      });
      return {
        code: 1,
        info: '修改密码成功',
      };
    } else {
      return {
        code: 0,
        info: '原始密码输入错误',
      };
    }
  },
};
