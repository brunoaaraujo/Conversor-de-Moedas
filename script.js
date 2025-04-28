document.querySelector('#first-coin').addEventListener('change' , function(){
    const imageSelect1 = this.value;
    const imageToDisplay1 =  document.querySelector('#main-currency-image');

    imageToDisplay1.src = imageSelect1;
})

document.querySelector('#second-coin').addEventListener('change', function(){
    const imageSelect2 = this.value;
    const imageToDisplay2 = document.querySelector('#second-currency-image');

    imageToDisplay2.src = imageSelect2;
})
