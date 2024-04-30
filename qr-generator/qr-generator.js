const button = document.querySelector('button');
const input = document.querySelector('#qr-text');
const qrImg = document.querySelector('#qr-img');
const imgBox = document.querySelector('.img-box');
const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

button.addEventListener('click', () => {
    if (input.value != '') {
        qrImg.src = url + input.value;
        imgBox.classList.add('contains')
    }
    else {
        input.classList.add('error')
        setTimeout(() => {
            input.classList.remove('error')

        }, 1000)
    }
})




