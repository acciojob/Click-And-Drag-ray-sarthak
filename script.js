// Your code here.
const container=document.getElementsByClassName("items")[0];
const items=document.querySelectorAll(".item");
items.forEach((item)=>{
	item.setAttribute("draggable","true")
	
})
items.forEach((item)=>{
	item.addEventListener("dragend",(e)=>{
		let target=e.target;
		console.log(target);
	})
})

