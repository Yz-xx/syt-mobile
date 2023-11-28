//路由鉴权:就是路由能不能被访问到权限设置->全局守卫完成
//引入路由器
import router from "./router";
import pinia from '@/store'
//引入用户相关的仓库
import userStore from "@/store/modules/user";

let userstore = userStore(pinia);

//存储用户未登录可以访问路由得路径
let whiteList = ["/home", '/hospital/register', '/search'];
//添加相应的全局守卫
//前置守卫
router.beforeEach((to, from, next) => {

  //动态设置网页左上角的标题
  document.title = `尚医通-${to.meta.title}`;
  //判断用户是否登录-token
  let token = userstore.userInfo.token;
  //用户登陆了
  if (token) {
    next();
  } else {
    //用户未登录
    if (whiteList.includes(to.path)) {
      next();
    } else {
      //登录组件显示不来
      userstore.showLogin = true;
      next({ path: '/home', query: { redirect: to.fullPath } })
    }

  }

});
