/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async info(req, res) {
    const user = req.user;
    delete user.password; // 删除用户密码不进行输出
    res.json(user);
  },
  async changeInfo(req, res) {
    const user = req.user;
    const data = req.body;
    delete data.password; // 删除密码
    delete data.userName; // 删除用户名
    await User.updateOne({
      userName: user.userName,
    }).set(data);

    res.json({
      code: 1,
      info: '修改个人信息成功',
    });
  },
  async collections(req, res) {
    const user = req.user;
    const data = await Collection.find({ user: user.id }).populate('movie');
    res.json(data);
  },
};
