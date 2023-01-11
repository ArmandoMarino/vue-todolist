console.log('JS OK');
console.log(Vue + "Vue OK");

const app = Vue.createApp({
    data() {
        return{
            tasks :[
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ],
            newTask : "",
            done : true,
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