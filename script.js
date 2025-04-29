document.querySelector('#first-coin').addEventListener('change' , function(){
    const imageSelect1 = this.value;
    const textoSelect = this.options[this.selectedIndex].dataset.texto;

    const imageToDisplay1 =  document.querySelector('#main-currency-image');
    imageToDisplay1.src = imageSelect1;

    const paragraphToUpdate = document.querySelector('#text-coin');
    paragraphToUpdate.textContent = textoSelect;
})



document.querySelector('#second-coin').addEventListener('change', function(){
    const imageSelect2 = this.value;
    const imageToDisplay2 = document.querySelector('#second-currency-image');
    
    const textoSelect2 = this.options[this.selectedIndex].dataset.texto;
    imageToDisplay2.src = imageSelect2;

    const paragraphToUpdate2 = document.querySelector('#text-coin2');
    paragraphToUpdate2.textContent = textoSelect2;
})

