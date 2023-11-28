import { defineStore } from 'pinia'
import type { UserState } from './interface'
import type { LoginData, UserLoginResponseData } from '@/api/hospital/type'
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from "@/utils/user";
import { reqUserLogin, reqCode } from "@/api/hospital";

const userStore = defineStore('User', {
  state: (): UserState => {
    return {
      showLogin: false,
      code: '',
      userInfo: JSON.parse(GET_TOKEN() as string) || {}
    }
  },
  actions: {
    //获取验证码的方法
    async getCode(phone: string) {
      //在想服务器携带手机号码，获取验证码
      let result: any = await reqCode(phone);
      if (result.code == 200) {
        this.code = result.data;
        return 'ok';
      } else {
        return Promise.reject(new Error(result.message));
      }

    },

    //用户手机号码登录方法
    async userLogin(loginData: LoginData) {
      //登录请求
      let result: UserLoginResponseData = await reqUserLogin(loginData);
      if (result.code == 200) {
        this.userInfo = result.data;
        //本地存储持久化存储用户信息
        SET_TOKEN(JSON.stringify(this.userInfo));
        //返回一个成功的Promise
        return 'ok';
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    logout() {
      //清空仓库的数据
      this.userInfo = { name: '', token: '' };
      this.code = ''
      //清空本地存储的数据
      REMOVE_TOKEN();
    },
  }
})

export default userStore