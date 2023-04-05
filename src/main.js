// 參考 https://stackoverflow.com/questions/65547199/using-bootstrap-5-with-vue-3
import 'bootstrap/dist/css/bootstrap.min.css' // Don't forget
import 'bootstrap'

// https://github.com/element-plus
// 參考 https://element-plus.org/en-US/guide/quickstart.html
import ElementPlus from 'element-plus' // 全包
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(store)

app.mount('#app')