let passwordBox = document.querySelector('#password');
const generate = document.querySelector('button');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
const number = '0123456789';
const symbol = '~!@#$%^&()_+|?><,./;\-=';

const allChars = upperCase + lowerCase + number + symbol;
function createPassword() {
    password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;

}
generate.addEventListener('click' , createPassword);
document.querySelector('#copy').addEventListener('click', ()=> {
    passwordBox.select();
    document.execCommand('copy');
});