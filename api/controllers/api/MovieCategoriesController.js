/**
 * MovieCategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async all(req, res) {
    const categories = await MovieCategory.find();
    res.json(categories);
  },
};
