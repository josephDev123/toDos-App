'use strict';
const submit = document.getElementById('submit');
const todo_text = document.getElementById('todo_text');
const todoList_container = document.querySelector('.todos_list');
let textObjArr = localStorage.getItem('localStorageItem')? JSON.parse(localStorage.getItem('localStorageItem')):[];
// console.log(textObjArr);


if(textObjArr.length > 0){

    textObjArr.forEach(element => {
        let textObj =element;

        //CREATING THE TODO-LIST ITEMS
        let toDo_wrapper = document.createElement('div');
        toDo_wrapper.className='toDoList_wrapper';
        toDo_wrapper.id= `${textObj.id}`;
        toDo_wrapper.innerHTML=`
                <h4>${textObj.text} </h4><span><i class="fas fa-trash" onClick ="deleteItem()"></i></span>
        `
        todoList_container.appendChild(toDo_wrapper)

    });
}





// unique id
var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};


function deleteItem(){
  let toDoList_wrapper_Dom = document.querySelector('.toDoList_wrapper')
  let toDoList_wrapper_DomId = toDoList_wrapper_Dom.id;
 textObjArr = textObjArr.filter(item =>item.id !== toDoList_wrapper_DomId);
 toDoList_wrapper_Dom.classList.add('remove');
  setTimeout(()=>{
    toDoList_wrapper_Dom.remove();
  }, 1500) 
  localStorage.setItem('localStorageItem', JSON.stringify(textObjArr))
 }


function getTodosList(){
    if(todo_text.value == ""){
        console.log("Field can't be empty");
    }else{
       let textObj = {
           text:'',
           id:''
       };
        textObj.text = todo_text.value;
        textObj.id = ID();

            //CREATING THE TODO-LIST ITEMS
                let toDo_wrapper = document.createElement('div');
                toDo_wrapper.className='toDoList_wrapper';
                toDo_wrapper.id= `${textObj.id}`;
                toDo_wrapper.innerHTML=`
                        <h4>${textObj.text} </h4><span><i class="fas fa-trash" onClick ="deleteItem()"></i></span>
                `
                todoList_container.appendChild(toDo_wrapper)
        
                textObjArr.push(textObj);
                localStorage.setItem('localStorageItem', JSON.stringify(textObjArr))
                todo_text.value =='';
    }
  
}


submit.addEventListener('click', getTodosList);
