import Vue from "vue";
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).mount('#app')



new Vue({

    render: h => h(App)
}).$mount("#app");
