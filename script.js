// Função para atualizar a imagem e o texto da moeda selecionada
function updateCoinDisplay(selectElement, imageElement, textElement, symbolElement) {
    const imageSelect = selectElement.value; // Valor da moeda selecionada
    const textoSelect = selectElement.options[selectElement.selectedIndex].dataset.texto; // Texto da moeda
    const textoSelectValor = selectElement.options[selectElement.selectedIndex].dataset.valor; // Valor da moeda

    imageElement.src = imageSelect; // Atualiza a imagem
    textElement.textContent = textoSelect; // Atualiza o texto
    symbolElement.textContent = textoSelectValor; // Atualiza o símbolo
}

// Função para converter o valor inserido
function convertCurrency() {
    const inputValue = parseFloat(document.querySelector('#value-input').value); // Valor de entrada
    const conversionRate = parseFloat(document.querySelector('#second-coin option:checked').dataset.conversionRate); // Taxa de conversão

    const inputDisplay = document.querySelector('#coin-value'); // Elemento que mostra o valor de entrada
    const convertedDisplay = document.querySelector('#coin-value2'); // Elemento que mostra o valor convertido

    if (!isNaN(inputValue)) {
        const convertedValue = inputValue * conversionRate; // Calcula o valor convertido
        inputDisplay.textContent = `${inputValue}`; // Atualiza o valor de entrada
        convertedDisplay.textContent = `${convertedValue.toFixed(2)}`; // Atualiza o valor convertido
    } else {
        inputDisplay.textContent = 'Por favor, digite um valor válido.'; // Mensagem de erro
        convertedDisplay.textContent = ''; // Limpa o valor convertido
    }
}

// Adiciona os ouvintes de eventos
document.querySelector('#first-coin').addEventListener('change', function() {
    updateCoinDisplay(this, document.querySelector('#main-currency-image'), document.querySelector('#text-coin'), document.querySelector('#coin-symbol1'));
});

document.querySelector('#second-coin').addEventListener('change', function() {
    updateCoinDisplay(this, document.querySelector('#second-currency-image'), document.querySelector('#text-coin2'), document.querySelector('#coin-symbol2'));
});

document.querySelector('#value-input').addEventListener('input', function() {
    const inputValue = this.value;
    document.querySelector('#coin-value').textContent = inputValue; // Atualiza o valor mostrado
});

document.querySelector('#button-converter').addEventListener('click', convertCurrency);


