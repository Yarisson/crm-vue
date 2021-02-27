import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import Loader from './components/app/Loader';
import './registerServiceWorker';
import router from './router';
import store from './store';
import dateFilter from './filters/date.filter';
import currencyFilter from './filters/currency.filter';
import messagePlugin from './utils/message.plugin';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.use(Vuelidate);
Vue.component('Loader', Loader);

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDqgtbMG0HTPiuDvJRaLNTWVAZb7lovkr8",
    authDomain: "vue-crm-3b5af.firebaseapp.com",
    projectId: "vue-crm-3b5af",
    storageBucket: "vue-crm-3b5af.appspot.com",
    messagingSenderId: "804439048404",
    appId: "1:804439048404:web:07ef58ca0fd2f461d0fb41",
    measurementId: "G-DK8VG86MQM"
  };
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyDqgtbMG0HTPiuDvJRaLNTWVAZb7lovkr8",
    authDomain: "vue-crm-3b5af.firebaseapp.com",
    projectId: "vue-crm-3b5af",
    storageBucket: "vue-crm-3b5af.appspot.com",
    messagingSenderId: "804439048404",
    appId: "1:804439048404:web:07ef58ca0fd2f461d0fb41",
    measurementId: "G-DK8VG86MQM"
  });

  let app

  firebase.auth().onAuthStateChanged(() => {
    if (!app) {
      app = new Vue({
        router,
        store,
        render: (h) => h(App),
      }).$mount('#app');
    }
  })

