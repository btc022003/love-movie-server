/**
 * app.js
 *
 * Use `app.js` to run your app without `sails lift`.
 * To start the server, run: `node app.js`.
 *
 * This is handy in situations where the sails CLI is not relevant or useful,
 * such as when you deploy to a server, or a PaaS like Heroku.
 *
 * For example:
 *   => `node app.js`
 *   => `npm start`
 *   => `forever start app.js`
 *   => `node debug app.js`
 *
 * The same command-line arguments and env vars are supported, e.g.:
 * `NODE_ENV=production node app.js --port=80 --verbose`
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/app.js
 */
// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually lift from.

// > Note: This is not required in order to lift, but it is a convenient default.
process.chdir(__dirname);

// Attempt to import `sails` dependency, as well as `rc` (for loading `.sailsrc` files).
var sails;
var rc;
try {
  sails = require('sails');
  rc = require('sails/accessible/rc');
  // 生命周期钩子函数
  sails.on('lifted', async () => {
    // console.log(await Movie.count());
    // console.log(9999999);
    // initDbData(); // 初始化数据
    initManager();
  });
} catch (err) {
  console.error("Encountered an error when attempting to require('sails'):");
  console.error(err.stack);
  console.error('--');
  console.error(
    'To run an app using `node app.js`, you need to have Sails installed'
  );
  console.error(
    "locally (`./node_modules/sails`).  To do that, just make sure you're"
  );
  console.error('in the same directory as your app and run `npm install`.');
  console.error();
  console.error(
    'If Sails is installed globally (i.e. `npm install -g sails`) you can'
  );
  console.error(
    'also run this app with `sails lift`.  Running with `sails lift` will'
  );
  console.error(
    'not run this file (`app.js`), but it will do exactly the same thing.'
  );
  console.error(
    "(It even uses your app directory's local Sails install, if possible.)"
  );
  return;
} //-•
// Start server
sails.lift(rc('sails'));

async function initDbData() {
  await MovieCategory.createEach([
    {
      name: '电影',
    },
    {
      name: '动漫',
    },
    {
      name: '综艺',
    },
    {
      name: '电视剧',
    },
    {
      name: '纪录片',
    },
  ]);

  const moviesSources = [
    {
      chanel: 1,
      category: 1,
      name: '电影',
      url:
        'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&page_id=1&ret_num=48&is_purchase=1',
    },
    {
      chanel: 4,
      category: 2,
      name: '动漫',
      url:
        'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=4&page_id=1&ret_num=48&is_purchase=1',
    },
    {
      chanel: 6,
      category: 4,
      name: '综艺',
      url:
        'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=6&page_id=1&ret_num=48&is_purchase=1',
    },
    {
      chanel: 2,
      category: 3,
      name: '电视剧',
      url:
        'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=2&page_id=1&ret_num=48&is_purchase=1',
    },
    {
      chanel: 3,
      category: 5,
      name: '纪录片',
      url:
        'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=3&page_id=1&ret_num=48&is_purchase=1',
    },
  ];

  moviesSources.forEach(async (item) => {
    const res = await require('axios').default.get(item.url);
    const movies = res.data.data.list.map((m) => {
      return {
        name: m.name,
        coverImage: m.imageUrl,
        desc: m.description,
        playUrl: m.playUrl,
        category: item.category,
      };
    });
    await Movie.createEach(movies);
  });
}

async function initManager() {
  const adminExists = await Manager.count({ userName: 'admin' });
  if (adminExists === 0) {
    await Manager.create({
      userName: 'admin',
      password: 'admin',
      nickName: 'Arivin',
    });
  }
}
