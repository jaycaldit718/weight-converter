var input = document.querySelector("#input");

var gramsDisplay = document.querySelector("#grams");
var kilogramsDisplay = document.querySelector("#kilogramResult");


input.addEventListener("change", function () {
    var weight = input.value;
    var grams = weight * 453.592;
    document.querySelector("#gramResult").textContent = grams;
    var kilograms = weight * 0.45359237;
    document.querySelector("#kilogramResult").textContent = kilograms;
    var ounces = weight * 16;
    document.querySelector("#ounceResult").textContent = ounces;


})
