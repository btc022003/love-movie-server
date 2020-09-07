#### 管理后台接口

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
      oldPassword		原始密码
      newPassword		新密码
    请求方法
      put
    ```

  - 用户收藏

    ```
    地址
      /api/v1/admin/user_collections/:id
    请求方法
      get
    ```
