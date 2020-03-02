# 简单的实时聊天系统
## 1. 项目初始化
- github上创建项目
- 克隆到本地 
```
git clone https://github.com/lumengxin/demo-vue-real-chat-time.git
```
- 创建vue项目
```
vue create demo-vue-real-chat-time.git
```
## 2. 项目开发
## 2.1 ui模板

[bootsnipp.com](https://bootsnipp.com/snippets/1ea0N)

## 2.1 数据来源

[firebase.com](https://console.firebase.google.com/)

- 控制台中创建项目
- 使用方法：点击“使用入门”。安装firebase工具

  ```
npm -g firebase --save;
  ```

- 导入firebase, 将配置文件复制到main.js中

```
 import firebase from 'firebase'
 
 var firebaseConfig = {
   ...
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
```

- 创建数据库，项目中初始化数据库

  (文档：[docs-guides-cloud firestore-get started](https://firebase.google.com/docs/firestore/quickstart?authuser=0))

  点击 开发 -> database, 以创建数据库

```
// Initialize Cloud Firestore throuht Firebase
var db = firebase.firestore()
// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
})
```

- 创建用户登录

  点击 开发 -> authentication, 选择登录方式 Google为例

  (文档：[docs-guides-authentication-web-google sing in](https://firebase.google.com/docs/auth/web/google-signin?authuser=0))