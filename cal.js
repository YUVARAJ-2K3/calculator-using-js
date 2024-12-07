
var display = document.getElementById("display");
function append(input)
{   
    // let display = document.getElementById("display");
    display.value += input;
    console.log(display.value)
}
function clearDisplay()
{
    display.value = "";
}
function calculate()
{   try{
    display.value = eval(display.value);
    }            
    catch{
        display.value="Error";
    }
}