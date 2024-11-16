const input = document.querySelector('#input-Box');
function appendValue(value) {
    input.value += value;
    console.log(input.value);
}
function cleardisplay() {
    input.value = "";

}
function deletelast() {
    input.value = input.value.slice(0, -1);
}
function calculateResult() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = "errro";
    }
}