// CALCULATOR PROGRAM


const calculatorDisplay = document.getElementById("calculatorDisplay"); //Should this be 'let'?

function appendToDisplay(input){//Typing it in
    calculatorDisplay.value += input; 
}

function clearDisplay(){//Reset
    calculatorDisplay.value = "";
}

function calculate(){//Solving
    try{
        calculatorDisplay.value = eval(calculatorDisplay.value);
    }
    catch(error){
        calculatorDisplay.value = "Error";
    }
}

//Can add square root and exponents.
//Can make the math a little more common place.