// input tag is in variable
var inputText=document.getElementById("input");
// sub btm
var subBtn = document.getElementById("button");
// To do List
var todoList= document.getElementById("todolist");
// array to store all to do elements, initially empty
var todoArr = []
// When Add Button is clicked 
subBtn.addEventListener("click", addItemToArray) 
// when input is in focus and When Enter is Clicked add items to array to addItemToArray
inputText.addEventListener("keypress",(event)=>{
    
    if(event.key=="Enter"){
        addItemToArray()
    }
})





function addItemToArray(){
   

    // push the value into array
    if (inputText.value!=""){ 
    todoArr.push(inputText.value)
}
    // reset value into "" string 
    inputText.value="";
    display()

}
function display(){
    todoList.innerHTML  = "";
    // structure of li tag is given below
    todoArr.map((curr,i) => {
        var listItem= `<li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})"> &times; </span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>

        </li>`;
// insert it inside ul id to do list
        todoList.innerHTML+=listItem;
    });
}
function deleteItem(index){
    // delete the index in the array  
    todoArr.splice(index,1);
    display();
}
function editItem(index){
    var newValue = prompt("Please Edit")
    todoArr.splice(index,1,newValue)
    display()
}

// since we have to reset the to do list
document.getElementById("reset").addEventListener("click",()=>{
todoArr=[]
display()
})





