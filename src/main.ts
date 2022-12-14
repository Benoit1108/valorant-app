import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import './plugins/tailwind.css';
import './style.css';

const app = createApp(App);
const pinia = createPinia();

app
    .use(router)
    .use(pinia)
    .mount('#app');
