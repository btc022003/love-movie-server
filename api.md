#### 前台用户页面接口

- 获取影片列表

  ```
  地址
  	/api/v1/movies
  参数
  	参数都是可选的
  	page			页码
  	per				每页显示的数量
  	name			影片名字
  	category	分类id
  请求方法
  	get
  返回数据
  	
  ```

- 获取影片分类

  ```
  地址
  	/api/v1/movie_categories
  参数
  	参数都是可选的
  	page			页码
  	per				每页显示的数量
  	name			影片名字
  	category	分类id
  请求方法
  	get
  返回数据
  ```

- 获取影片详情

  ```
  地址
  	/api/v1/movies/:id
  请求方法
  	get
  返回数据
  ```

- 用户注册

  ```
  地址
  	/api/v1/auth/reg
  参数
  	userName	用户明
  	password	密码
  	nickName	昵称
  	gender		性别
  	avatar		头像
  请求方法
  	post
  返回数据
  ```

- 用户登录

  ```
  地址
  	/api/v1/auth/login
  参数
  	userName	用户名
  	password	密码
  请求方法
  	post
  返回数据
  ```

- 修改用户信息

  ```
  地址
  	/api/v1/users/info
  参数
  	nickName
  	avatar
  	gender
  请求头
  	token
  请求方法
  	put
  返回数据
  ```

- 获取用户信息

  ```
  地址
  	/api/v1/users/info
  参数
  请求头
  	token
  请求方法
  	get
  返回数据
  ```

- 修改密码

  ```
  地址
  	/api/v1/user/change_pwd
  参数
  	oldPassword	原始密码
  	newPassword	新密码
  请求头
  	token
  请求方法
  	post
  返回数据
  ```

- 加入收藏

  ```
  地址
  	/api/v1/user/collections
  参数
  	movie	影片id
  请求头
  	token
  请求方法
  	post
  返回数据
  ```

- 删除收藏

  ```
  地址
  	/api/v1/user/collections/:id
  参数
  请求头
  	token
  请求方法
  	delete
  返回数据
  ```

#### 管理后台接口

​	管理后台登录之外的接口需要在请求头中传递token

- 登录

  ```
  地址
  	/api/v1/auth/manager_login
  参数
  	user_name
  	password
  请求方法
  	post
  ```

- 影片分类管理

  - 列表

    ```
    地址
    	/api/v1/admin/moviecategory
    请求方法
    	get
    ```

  - 新增

    ```
    地址
    	/api/v1/admin/moviecategory
    参数
    	name
    	desc
    	coverImage
    请求方法
    	post
    ```

  - 修改

    ```
    地址
    	/api/v1/admin/moviecategory/:id
    参数
    	name
    	desc
    	coverImage
    请求方法
    	put
    ```

  - 删除

    ```
    地址
      /api/v1/admin/moviecategory/:id
    请求方法
      delete
    ```

- 影片管理

  - 列表

    ```
    地址
    	/api/v1/admin/movie
    参数
    	page	页码，默认1
    	per		每页显示的数量，默认10
    请求方法
    	get
    ```

  - 新增

    ```
    地址
      /api/v1/admin/movie
    参数
      name		名字
      desc		简介
      coverImage	主图
      playUrl		播放地址
      views		浏览次数
      category	分类id
    请求方法
      post
    ```

  - 修改

    ```
    地址
      /api/v1/admin/movie/:id
    参数
      name		名字
      desc		简介
      coverImage	主图
      playUrl		播放地址
      views		浏览次数
      category	分类id
    请求方法
      post
    ```

  - 删除

    ```
    地址
      /api/v1/admin/movie/:id
    请求方法
      delete
    ```

- 用户管理

  - 列表

    ```
    地址
    	/api/v1/admin/user
    参数
    	page	页码，默认1
    	per		每页显示的数量，默认10
    请求方法
    	get
    ```

  - 重置密码

    ```
    地址
      /api/v1/admin/user/:id
    参数
      password		新密码
    请求方法
      put
    ```
    
- 用户收藏
  
  ```
    地址
      /api/v1/admin/collection
    参数
    	where 查询条件
    		json格式的
    		例如 {"user": 1} 获取用户id为1的用户的收藏数据
    请求方法
      get
    ```
