let good = document.getElementById("good");
let cheap = document.getElementById("cheap");
let fast = document.getElementById("fast");
function changeFast() {
    if (good.checked && cheap.checked && fast.checked) {
        cheap.checked = false;
    }
}
function changeCheap() {
    if (good.checked && cheap.checked && fast.checked) {
        good.checked = false;
    }
}
function changeGood(){
    if (good.checked && cheap.checked && fast.checked) {
        fast.checked = false;
    }
}