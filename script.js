var tasks = ["buy milk", "eat dinner", "nail javascript"];
var list;
var item;
var counter = 0;
var todoList = document.getElementById("todo-list");
var form = document.getElementsByTagName("form")[0];
//var addlist = document.getElementById("addlist");


for (var i = 0; i < tasks.length; i++) {
    list = document.createElement("li");
    list.textContent = tasks[i];
    list.id = "list" + counter;
    counter++;
    todoList.appendChild(list);
}


todoList.addEventListener("click", function(e){
    var mylist = document.getElementById(e.target.id);     
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
   list = document.createElement("li");
   list.textContent = tasks[tasks.length - 1];
   list.id = "list" + counter;
   todoList.appendChild(list);
   counter++;
});





