import { createApp } from 'vue'

import 'reset.less'

import App from './App.vue'
import router from '@/router'

//引入全局组件
import HospitalTop from '@/components/Top/index.vue'
import HospitalBottom from '@/components/Bottom/index.vue'
import Carousel from '@/components/Carousel/index.vue'
import Login from '@/components/Login/index.vue'
import DoctorCard from '@/components/DoctorCard/index.vue'

import Vant from 'vant'
import 'vant/lib/index.css'

import pinia from '@/store'
//引入路由鉴权的文件
import './permisstion'

const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.component('Carousel', Carousel)
app.component('Login', Login)
app.component('DoctorCard', DoctorCard)
app.use(router)
app.use(Vant)
app.use(pinia)

app.mount('#app')