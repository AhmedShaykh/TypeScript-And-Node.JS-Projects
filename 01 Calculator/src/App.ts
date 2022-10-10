function getNumber(num: Number) {
    let data = <HTMLInputElement>document.getElementById("result");

    data.value += num;
}

function clearResult() {
    let data = <HTMLInputElement>document.getElementById("result");

    data.value = "";
}