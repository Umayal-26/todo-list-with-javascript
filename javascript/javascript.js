function add(){
    const task=document.getElementById('task')
    const list=document.getElementById('list')
    if(task.value ===""){
      alert("please Enter the task");
      return;
    }
    const li=document.createElement('li');
        li.textContent=task.value
        }
    
}