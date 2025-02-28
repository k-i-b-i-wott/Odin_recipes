const outputValue=document.getElementById("outputValue");


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("convertbtn").addEventListener("click",()=>converter());
});
function converter(){
    let  inputValue =document.getElementById("inputValue").value;
    
    let inputUnit= document.getElementById("inputUnit").value;

    let displayValue=[];
switch(inputUnit){
    case "millimeters":
        let unit="mm"
        displayValue=[
            <p>`${inputValue}` `${unit}` is equal to `${inputValue}*1`</p>    
        ]
         
        break;
    case "centimeters":
        displayValue=inputValue*0.01;
        break;
    case "decimeters":
        displayValue=inputValue*0.001;
        break;
    case "meters":
        displayValue=inputValue*0.0001;
        break;
    case "decameters":
        displayValue=inputValue*0.00001;
        break;
    case "hectometers":
        displayValue=inputValue*0.000001;
        break;
    case "kilometer":
        displayValue=inputValue*0.0000001;
        break;       
}    

outputValue.innerHTML=displayValue;


}

