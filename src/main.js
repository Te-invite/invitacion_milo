import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes'
import VueLazyload from 'vue-lazyload';

const app = createApp(App);
app.use(router);
app.use(VueLazyload, {
    preLoad: 1.2,
    error: 'https://via.placeholder.com/300?text=Error+al+cargar', 
    loading: 'https://via.placeholder.com/300?text=Cargando...',  
    attempt: 1,
});
app.mount('#app');
