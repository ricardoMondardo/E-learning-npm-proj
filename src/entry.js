import Vue from 'vue';

import Components from './components';

Components.forEach(component => {
    Vue.component(component.name, component);
  });

var app = new Vue({
    el: '#app',    
    data: {
      message: 'Hello Vue!'
    },
    mounted() {
        console.log('Vue app running...');
    }
  })