/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
const path = require('path');
const fs = require('fs');
module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  // 路由说明 view 表示使用视图文件展示内容
  '/': { view: 'pages/homepage' },
  '/list': { action: 'view-list' },
  // sails读取uploads文件夹为静态资源目录，还可以在上线的时候设置nginx静态资源文件夹的方式
  '/uploads/:id': {
    skipAssets: false,
    fn: [
      (req, res) => {
        try {
          const fileName = path.join(
            path.resolve('./.tmp/uploads/'),
            req.params.id
          );
          if (fs.existsSync(fileName)) {
            res.sendFile(fileName);
          } else {
            res.notFound();
          }
        } catch (err) {
          res.notFound();
        }
      },
    ],
  },
  // 'GET /api/v1/products': { controller: 'ProductsController', action: 'index' },
  'GET /api/v1/products': 'ProductsController.index',
  'POST /api/v1/auth/login': { action: 'user/login' },
  'POST /api/v1/auth/reg': { action: 'user/reg' },
  'POST /api/v1/auth/manager_login': { action: 'manager/login' },
  'POST /api/v1/common/upload_file': 'CommonController.uploadFile',
  'GET /api/v1/movie_categories': 'api/MovieCategoriesController.all',
  'GET /api/v1/movies': 'api/MoviesController.index',
  'GET /api/v1/movies/:id': 'api/MoviesController.one',
  // 所有的/api/v1/user/*中的路由时都需要先验证是否登录
  // '/api/v1/user/*': [
  //   {
  //     policy: 'isLogined',
  //   },
  // ],
  // 'POST /api/v1/user/change_pwd': [
  //   {
  //     policy: 'isLogined',
  //   },
  //   {
  //     action: 'user/change-password',
  //   },
  // ],
  'POST /api/v1/users/change_pwd': {
    action: 'user/change-password',
  },
  'GET /api/v1/users/info': 'api/UsersController.info',
  'PUT /api/v1/users/info': 'api/UsersController.changeInfo',
  'POST /api/v1/user/collections': 'CollectionsController.create',
  'DELETE /api/v1/user/collections/:id': 'CollectionsController.del',
  '/api/v1/admin/*': [
    {
      policy: 'isAdminLogined',
    },
  ],

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
