//Counter program

// Another, and better way of writing this is to use const variables to document.getElementByID() 
// then use the variableName.onclick to declare the functions. Less typing and less code. 

let count = 0; //Sets defult zero number

//Decrease Button
document.getElementById("decrease").onclick = function(){
    count--;
    document.getElementById("countID").textContent = count;
    document.getElementById("countID").style.color = "#97171780";
}

//Reset Button
document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("countID").textContent = count;
    document.getElementById("countID").style.color = "#555";
}

//Increase Button
document.getElementById("increase").onclick = function(){
    count++;
    document.getElementById("countID").textContent = count;
    document.getElementById("countID").style.color = "#3335c580";
}