function getNumber(num: Number) {
    let data = <HTMLInputElement>document.getElementById("result");

    data.value += num;
}

function clearResult() {
    let data = <HTMLInputElement>document.getElementById("result");

    data.value = "";
}

function getOperator(num: number) {
    let data = <HTMLInputElement>document.getElementById("result");

    data.value += num;
}

function getResult() {
    let data = <HTMLInputElement>document.getElementById("result");

    data.value = eval(data.value);
}