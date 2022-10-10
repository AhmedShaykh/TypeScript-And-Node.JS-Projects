"use strict";
function getNumber(num) {
    let data = document.getElementById("result");
    data.value += num;
}
function clearResult() {
    let data = document.getElementById("result");
    data.value = "";
}
function getOperator(num) {
    let data = document.getElementById("result");
    data.value += num;
}
function getResult() {
    let data = document.getElementById("result");
    data.value = eval(data.value);
}
