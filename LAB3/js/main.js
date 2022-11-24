// alert("Hello js!");
var num = 10;//global
let name = "Kao";//scope
const arr = [10, 20, "Hi"];
let obj = { name: "Dang", age: 20 };
const objmix = {
    data: [
        { name: "Dum", gpa: 3.51 },
        { name: "Dong", age: 18, gpa: 3.12 }
    ]
};

console.log(num);
console.log(arr[2]);
console.log(objmix.data[1].age);

function add(a, b) {
    return a + b;
}

let total = add(3, 5);

document.getElementById("div1").innerHTML = name;

$(function () {
    // alert("Hello jQuery...");

    $("#btn1").click(function () {
        $("#div1").text("BRU");
    });

    $("#btn2").bind("click",()=>{
        $(".in1").val("BRU");
    });

    $("#btn3").click(()=>{
        $(".in1:even").toggleClass("red");
    });

    $("#div_form").load("./pages/form.html");

});//jQuery Handle