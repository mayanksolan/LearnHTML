window.setTimeout(function () {
    var todos = [];
    var input = "";
    while (input != "quit") {
        input = prompt("what would you like to do?");
        if (input === "list") {
            listTodos();
        }
        else if (input === "new") {
            addTodos();
        }
        else if(input === "delete") {
            deleteTodos();
        }
    } 
    function listTodos() {
        console.log("**********");
        todos.forEach(function(lis, i) {
            console.log(i + ": " + lis);
        });
        console.log("**********");
    }
    function addTodos() {
        var add = prompt("enter the todo to be added");
        todos.push(add);
        console.log("Added todo");
    }
    function deleteTodos() {
        var ind = prompt("Enter the index for which element needs to be deleted");
        if(ind<todos.length) {
            todos.splice(ind,1);
            console.log("Deleted todo");
        }
    }
}, 500);

