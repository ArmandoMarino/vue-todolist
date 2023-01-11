console.log('JS OK');
console.log(Vue + "Vue OK");

const app = Vue.createApp({
    data() {
        return{
            tasks :[
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
        }
    },
  });
  
  
  app.mount('#root');