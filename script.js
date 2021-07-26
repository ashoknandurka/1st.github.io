let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputfield = document.getElementById("inputField");

addToDoButton.addEventListener('click',function(){
var paragraph = document.createElement('p');
console.log(paragraph);
paragraph.innerHTML =inputfield.value;
toDoContainer.appendChild(paragraph);
inputfield.value = "";

paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = "line-through"; 

})
paragraph.addEventListener('dblclick',function(){
    toDoContainer.removeChild(paragraph);
})


})