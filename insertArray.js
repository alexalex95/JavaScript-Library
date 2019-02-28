window.setTimeout(function(){
	var ans;
	var list=[];
	while(ans!="quit"){
		ans=prompt("What would you like to do?");
		if(ans==="new"){
			var newPush=prompt("Enter a new to do");
			list.push(newPush);
		}
		else if(ans==="list"){
			console.log(list);
		}
		else{prompt("Enter a valid option");}
}
},500);

//This is an updated code in which does the same functionality of the one on top
//but we add a Foreach function and the Splice function to delete an element form the array

var ans;
var list=[];
window.setTimeout(function(){
	while(ans!="quit"){
		ans=prompt("What would you like to do?");
		if(ans==="new"){
			todoNew();
		}
		else if(ans==="list"){
			todoList();
		}
		else if(ans==="delete"){
			todoDelete();
		}
		console.log("Quit app");
}
},500);

function todoList(){
	console.log("**********");
	list.forEach(function(todo,i){			
		console.log(i+": "+todo);		
	});
	console.log("**********");
}

function todoNew(){
	var newPush=prompt("Enter a new to do");
	list.push(newPush);
	console.log("Item added!");
}

function todoDelete(){
	//ask for the index
	var index=prompt("Enter the index of todo to delete");
	//delete that todo
	//Splice needs the index we want to delete plus the number of items
	// we want to delete after the selected index
	list.splice(index,1);
	console.log("Item deleted!");
}
