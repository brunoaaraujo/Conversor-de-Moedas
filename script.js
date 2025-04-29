document.querySelector('#first-coin').addEventListener('change' , function(){
    const imageSelect1 = this.value;
    const imageToDisplay1 =  document.querySelector('#main-currency-image');
    const textoSelect = this.options[this.selectedIndex].dataset.texto;
    const paragraphToUpdate = document.querySelector('#text-coin');
    const textoSelect3 = this.options[this.selectedIndex].dataset.valor;
    const paragraphToUpdate3 = document.querySelector('#coin-symbol1');
    
    
    imageToDisplay1.src = imageSelect1;
    paragraphToUpdate.textContent = textoSelect;
    paragraphToUpdate3.textContent = textoSelect3;
})

document.querySelector('#second-coin').addEventListener('change', function(){
    const imageSelect2 = this.value;
    const imageToDisplay2 = document.querySelector('#second-currency-image');
    const textoSelect2 = this.options[this.selectedIndex].dataset.texto;
    const paragraphToUpdate2 = document.querySelector('#text-coin2');
    const textoSelect4 = this.options[this.selectedIndex].dataset.valor;
    const paragraphToUpdate4 = document.querySelector('#coin-symbol2');
    
    
    imageToDisplay2.src = imageSelect2;
    paragraphToUpdate2.textContent = textoSelect2;
    paragraphToUpdate4.textContent = textoSelect4;
})


document.querySelector('#value-input').addEventListener('input', function(){
    const inputValue = this.value;
    const textoSelect5 = document.querySelector('#coin-value');

    textoSelect5.textContent = inputValue;
})

document.querySelector('#button-converter').addEventListener('click', function() {
    const conversionRate = parseFloat(document.querySelector('#second-coin option:checked').dataset.conversionRate);
    const inputDisplay = document.querySelector('#coin-value');
    const convertedDisplay = document.querySelector('#coin-value2');

    if (!isNaN(inputValue)) {
        inputDisplay.textContent = `${inputValue}`;
        const convertedValue = inputValue * conversionRate;
        convertedDisplay.textContent = `${convertedValue.toFixed(2)}`;
    } else {
        inputDisplay.textContent = 'Por favor, digite um valor válido.';
        convertedDisplay.textContent = '';
    }
});

document.querySelector('#button-converter').addEventListener('click', function() {
    const inputValue = parseFloat(document.querySelector('#value-input').value);
    const conversionRate = parseFloat(document.querySelector('#second-coin option:checked').dataset.conversionRate);
    
    const inputDisplay = document.querySelector('#coin-value');
    const convertedDisplay = document.querySelector('#coin-value2');

    if (!isNaN(inputValue)) {
        const convertedValue = inputValue * conversionRate;
        inputDisplay.textContent = `${inputValue}`;
        convertedDisplay.textContent = `${convertedValue.toFixed(2)}`;
    } else {
        inputDisplay.textContent = 'Por favor, digite um valor válido.';
        convertedDisplay.textContent = '';
    }
});


