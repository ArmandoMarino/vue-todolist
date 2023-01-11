console.log('JS OK');
console.log(Vue + "Vue OK");

const app = Vue.createApp({
    data() {
        return{
            newTask : "",
            tasks :[
                { text: 'Fare i compiti', status: null },
                { text: 'Fare la spesa', status: null },
                { text: 'Fare il bucato', status: null },
            ],
            
        }
    },
    methods:{
        addTask(){
           this.tasks.push(this.newTask);
           this.clearInput(); 
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
        clearInput(){
            this.newTask = "";
        }
    }
  });
  
  
  app.mount('#root');