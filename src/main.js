import './style.css';
import Vue from 'vue';
import App from './App.vue';
// const a = 1;
// console.log(a);
console.log(import.meta.env.MODE);
console.log(import.meta.env.VITE_API_URL);

console.log(document.title);

new Vue({
  el: '#app',
  render: (h) => h(App)
});
