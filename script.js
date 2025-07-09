let fahrenheit = document.getElementById("fahrenheit")
let celsius = document.getElementById("celsius")
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
    document.getElementById("output-c").textContent = `${input} degrees fahrenheit is ${output} degrees celsius`
})

buttonF.addEventListener("click", function(e){
    e.preventDefault()
    let input = parseInt(celsius.value)
    let output = celsiusToFahrenheit(input)
    document.getElementById("output-f").textContent = `${input} degrees celsius is ${output} degrees fahrenheit`
})
