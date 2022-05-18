import { createApp } from 'vue';

import router from './router.js';
//import store from './store'
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

import { createPinia } from 'pinia';

const app = createApp(App)

app.use(router);
app.use(createPinia());

app.component('base-badge', BaseBadge);

app.mount('#app');
