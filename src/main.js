import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import CKEditor from '@ckeditor/ckeditor5-vue'; .use(CKEditor)
createApp(App).use(store).use(router).mount('#app')
