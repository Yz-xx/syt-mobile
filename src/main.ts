import { createApp } from 'vue'
import 'reset.less'

import App from './App.vue'
import router from '@/router'

//引入全局组件
import HospitalTop from '@/components/Top/index.vue'
import HospitalBottom from '@/components/Bottom/index.vue'
import Carousel from '@/components/Carousel/index.vue'

import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.component('Carousel', Carousel)
app.use(router)
app.use(Vant)

app.mount('#app')