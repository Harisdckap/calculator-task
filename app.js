

let cal=document.getElementById("cal-method");

function display(x){
     cal.value = cal.value +x;   
}

function Clear(){
     cal.value ="";
}

function Del(){
    cal.value=cal.value.slice(0,-1)
}

function solve (){
    var x=document.getElementById("cal-method").value;
    var y=eval(x);
    document.getElementById("cal-method").value = y;
}


// function display(x){
// document.getElementById("cal-method").value +=x;
// }

