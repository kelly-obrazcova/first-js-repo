var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");



while(input !== "quit") {

	if (input === "list") {
		listToDos();
	}
	else if(input === "new") {
		addToDo();
	} 
	else if (input === "delete"){
		deleteToDo();
	}
var input = prompt("What would you like to do?");
}
console.log("Okay, you quit the app");



function listToDos() {
	console.log("********");
	todos.forEach(function(todo, todoIndex){
		console.log(todoIndex + ": " + todo);
		});
	console.log("********");
}

function addToDo(){
	var newToDo = prompt("Enter new to do");
	todos.push(newToDo);
	console.log("Added To Do");
}

function deleteToDo(){
	var crossedOff = prompt("Enter index of todo to delete");
		todos.splice(crossedOff, 1);
		console.log("Deleted To Do");
}