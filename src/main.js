import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDogjuoCcI05IEA3Q7PhGQrR1DpaozFkhs",
  authDomain: "fir-vue-real-chat-time.firebaseapp.com",
  databaseURL: "https://fir-vue-real-chat-time.firebaseio.com",
  projectId: "fir-vue-real-chat-time",
  storageBucket: "fir-vue-real-chat-time.appspot.com",
  messagingSenderId: "941471816718",
  appId: "1:941471816718:web:ce54ec7640af19a1bcb05f",
  measurementId: "G-9GX66QGSYB"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Initialize Cloud Firestore throuht Firebase
var db = firebase.firestore()

// 全局使用
window.db = db

// Disable deprecated features
// db.settings({
//   timestampsInSnapshots: true
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
