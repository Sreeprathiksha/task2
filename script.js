const addButton=document.getElementById('add-btn');
const inputfield=document.getElementById('task-input');
const tasklist=document.getElementById('task-list');
addButton.addEventListener('click',()=>{
    // Corrected property name from Value to value
    const taskText=inputfield.value.trim();

    if(taskText!==''){
        console.log("task to add:",taskText);
        const listitem=document.createElement('li');
        listitem.textContent=taskText;
        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click",(event)=>{
            event.stopPropagation();
            listitem.remove();
        });
        listitem.appendChild(deleteBtn);
        listitem.addEventListener('click',()=>{
            listitem.classList.toggle('completed');
        });
        tasklist.appendChild(listitem);
        inputfield.value='';
    } else{
        alert("please enter a task.");
    }
});