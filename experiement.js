"use strict"


let btn_num = document.querySelectorAll(".numbers")
// console.log(btn_num);

let sym_btn = document.querySelectorAll(".symbtn")
// console.log(sym_btn);

let inp_value = document.getElementById("cal-method")
// console.log(inp_value);

let equal_btn = document.querySelector(".cal-equal")
// console.log(equal_btn);


var string_dis = ""
var temp_store = ""
var arr = []


btn_num.forEach((numbers) => {
    numbers.addEventListener("click", () => {
        string_dis += numbers.innerHTML
        temp_store += numbers.innerHTML
        inp_value.value += numbers.innerHTML
    })

})

sym_btn.forEach((symbols) => {
    symbols.addEventListener("click", () => {

        if (temp_store.length == 0) {
            arr.push(symbols.innerHTML)
        }
        else {
            arr.push(temp_store, symbols.innerHTML);
        }
        string_dis += symbols.innerHTML
        inp_value.value += symbols.innerHTML
        temp_store = ""
    })
})





var result_str = ""
function numbers() {
    arr.push(temp_store);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '*' || arr[i] == '/' || arr[i] == '%')
            result_str = 0;

        if (arr[i] == '*') {
            result_str += (arr[i - 1]) * (arr[i + 1])
            arr.splice(i - 1, 3, result_str)
            i--;

        }
        else if (arr[i] == '/') {
            result_str += (arr[i - 1]) / (arr[i + 1])
            arr.splice(i - 1, 3, result_str)
            i--

        }
        else if (arr[i] == '%') {
            result_str += (arr[i - 1]) % (arr[i + 1])
            arr.splice(i - 1, 3, result_str)
            i--

        }
        console.log(result_str);
    }


    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '+' || arr[i] == '-')
            result_str = 0

        if (arr[i] == '+') {
            result_str += Number(arr[i - 1]) + Number(arr[i + 1]);
            arr.splice(i - 1, 3, result_str);
            i--;
        }

        else if (arr[i] == '-') {
            result_str += (arr[i - 1]) - (arr[i + 1])
            arr.splice(i - 1, 3, result_str);
            i--;
        }
    }
    console.log(result_str);
    inp_value.value = result_str
    temp_store = "";
    result_str=0
}



//---------------------------------Equal_Btn-----------------


equal_btn.addEventListener("click", function () {
    numbers()
})


///-----------------------------Clear_Btn------------------------


let clear = document.getElementById("clear")
console.log(clear);

clear.addEventListener("click", () => {
    if (confirm("You want to clear"))
        inp_value.value = ""
})



///-------------------------------Delete_Btn-----------------------


var del_te = document.getElementById("del")
console.log(del_te);

del_te.addEventListener("click", () => {
    inp_value.value = inp_value.value.slice(0, -1)
})


















