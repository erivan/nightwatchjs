$(document).ready(function() {
   var $newTodo = $('#newTodo');
   var $newTodoText = $('#newTodoText');
   var $todoList = $('#todoList');
   $newTodo.on('click',function(){
   	$todoList.append('<li>'+$newTodoText.val()+'</li>');  
   	
   	cleanInput($newTodoText);
   });
});

function cleanInput(input){
	input.val('');
}