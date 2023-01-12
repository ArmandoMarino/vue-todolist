console.log('JS OK');
console.log(Vue + "Vue OK");

const app = Vue.createApp({
    data() {
        return{
            newTask : "",
            tasks :[
                { text: 'Fare i compiti', done: false },
                { text: 'Fare la spesa', done: true },
                { text: 'Fare il bucato', done: false },
            ],
            
        }
    },
    methods:{
        addTask(){
           this.tasks.push({ text: this.newTask, done: false });
           this.clearInput(); 
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
        clearInput(){
            this.newTask = "";
        },
        setDone(index){
            this.tasks[index].done = !this.tasks[index].done;
        },
    }
  });
  
  
  app.mount('#root');