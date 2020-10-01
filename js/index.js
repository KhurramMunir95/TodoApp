var vm = new Vue({
	el:'#app',

	data(){
		return{


			tasks:[
			{
				id: 1,
				'item': 'Python',
				isCompleted: false
			},
			{	
				id: 2,
				'item': 'Java',
				isCompleted: false
			},
			{	
				id: 3,
				'item': 'C++',
				isCompleted: false
			}
			],
			itemName:'',
			filter: 'all',
			id: 4,
			completedTasks:[]

		}
	},

	methods:{
		addnewTask:function(){
			if (this.itemName!=='') {
				this.tasks.push({
					id: this.id,
					'item': this.itemName,
					isCompleted: false
				})	
				this.itemName = ''
				this.id++;
			}
			
		},
		deleteTask:function(task, id){
			if(this.filter == 'completedTasks')
			{
				this.tasks.forEach((item, id) =>{
					if(task == item){
						this.tasks.splice(id, 1)
					}
				})
			}
		},

		deleteAll:function(){
			this.tasks = this.tasks.filter((task)=> !task.isCompleted)
		}
	},
	computed:{
		allTasks:function(){
			if (this.filter == 'all') {
				return this.tasks;
			}
			else if(this.filter == 'activeTasks'){
				return this.tasks.filter((item)=> item.isCompleted == false);				
			}
			else{
				return this.tasks.filter((item)=> item.isCompleted == true && this.completedTasks.push(item));
			}
		},
		showDeleteAllButton:function(){
			return this.tasks.filter( task => task.isCompleted).length > 0
		}

	}
})