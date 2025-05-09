const convertButton = document.querySelector("#button-converter")
const currencySelect = document.querySelector("#second-coin")

function convertValues() {
    const inputCurrencyValue = document.querySelector("#value-input").value //valor de entrada para conversão
    const currencyValueToConvert = document.querySelector("#coin-symbol1") //Valor a ser convertido
    const currencyValueConverted = document.querySelector("#coin-symbol2") //Valor convertido

    const dolarToday = 5.65
    const euroToday = 6.36
    const libraToday = 7.52

    // Se o select estiver selecionado o valor do dolar, entra aqui
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    // Se o select estiver selecionado o valor do euro, entra aqui
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    // Se o select estiver selecionado o valor do libra, entra aqui
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.querySelector("#text-coin2")
    const currencyImage = document.querySelector("#second-currency-image")

    // Se o select estiver selecionado o valor do dolar, entra aqui
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./img/estados-unidos.svg"
    }    

    // Se o select estiver selecionado o valor do euro, entra aqui
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img/euro.svg"
    } 

    // Se o select estiver selecionado o valor do euro, entra aqui
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./img/libra.svg"
    } 

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)