import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import SvgIcon from '@/components/SvgIcon/index' // icon

createApp(App)
  .component('svg-icon', SvgIcon)
  .use(ElementPlus)
  .use(router)
  .use(store)
  .mount('#app')

