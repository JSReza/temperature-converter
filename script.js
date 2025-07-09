let fahrenheit = document.getElementById("fahrenheit")
let celcius = document.getElementById("celcius")
const buttonC = document.getElementById("submit-c")
const buttonF = document.getElementById("submit-f")

function fahrenheitToCelsius(value) {
    return Math.round((value - 32) * 5 / 9);
}

function celsiusToFahrenheit(value) {
    return Math.round((value * 9 / 5) + 32);
}

buttonC.addEventListener("click", function(e){
    e.preventDefault()
    let input = parseInt(fahrenheit.value)
    let output = fahrenheitToCelsius(input)
    document.getElementById("output-c").textContent = `${input} degrees fahrenheit is ${output} degrees celcius`
})

buttonF.addEventListener("click", function(e){
    e.preventDefault()
    let input = parseInt(celcius.value)
    let output = celsiusToFahrenheit(input)
    document.getElementById("output-f").textContent = `${input} degrees celcius is ${output} degrees fahrenheit`
})