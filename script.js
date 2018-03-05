var tasks = ["buy milk", "eat dinner", "nail javascript"];
var list, item, mylist;
var todoList = document.getElementById("todo-list");
var form = document.getElementsByTagName("form")[0];

function addList(index){
    list = document.createElement("li");
    list.textContent = tasks[index];
    list.id = "list" + index;
    list.style = "cursor: pointer;";
    todoList.appendChild(list);
}


for (var i = 0; i < tasks.length; i++) {
    addList(i);
}


todoList.addEventListener("click", function(e){
    mylist = document.getElementById(e.target.id);     
    if(!mylist.classList.contains("done")){
        mylist.classList.add("done");
    } else {
        mylist.classList.remove("done");
    }
});

form.addEventListener("submit", function(e){
   e.preventDefault();
   item = form.elements['addlist'].value;
   tasks.push(item);
   addList(tasks.length - 1);
   var listitem = document.getElementById("addlist");
   listitem.value = "";
});





