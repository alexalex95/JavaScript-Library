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
}
},500);