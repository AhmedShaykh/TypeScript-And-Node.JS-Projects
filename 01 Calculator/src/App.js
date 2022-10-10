"use strict";
function getNumber(num) {
    let data = document.getElementById("result");
    data.value += num;
}
function clearResult() {
    let data = document.getElementById("result");
    data.value = "";
}
