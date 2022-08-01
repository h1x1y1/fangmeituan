import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import { Button, Icon, Toast  } from 'vant';
// import '../public/iconfont'

const app = createApp(App)
app.use(Button).use(Icon).use(Toast)

app.mount('#app')
