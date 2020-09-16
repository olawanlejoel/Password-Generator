const topContainer = document.querySelector('.top-container');
const bottomBtn = document.querySelector('.bottom-btn');
const submitBtn = document.querySelector('.submit-btn');
const homeBtn = document.querySelector('.home-btn');
const questionModal = document.querySelector('.question-modal');
const answerModal = document.querySelector('.answer-modal');

questionModal.style.display = 'none';
answerModal.style.display = 'none';
homeBtn.style.display = 'none';

bottomBtn.addEventListener('click', () => {
    topContainer.style.display = 'none';
    questionModal.style.display = 'block';
    bottomBtn.style.display = 'none';
    homeBtn.style.display = 'block';
})

submitBtn.addEventListener('click', () => {
    topContainer.style.display = 'none';
    questionModal.style.display = 'none';
    bottomBtn.style.display = 'none';
    answerModal.style.display = 'block';
})

homeBtn.addEventListener('click', () => {
    location.reload();
})


//Communicating with the DOM

var answerEl = document.getElementById("myInput");
var lengthEl = document.getElementById("length");
var numberEl = document.getElementById("number");
var lowerEl = document.getElementById("lower");
var upperEl = document.getElementById("upper");
var symbolEl = document.getElementById("symbol");
// var copyEl = document.getElementById("copy");
var generateEl = document.getElementById("generate");


const randomFunc = {
    upper: getRandomUpperCase,
    lower: getRandomLowerCase,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//generate event
generateEl.addEventListener('click', () => {
    //const length = parseInt(lengthEl.value);
    const length = +lengthEl.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    answerEl.value = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

//Generate Password Function
function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = "";

    const typesCount = upper + lower + number + symbol;

    //console.log(typesCount);

    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);


    return finalPassword;
}


// Generating random values

function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(getRandomSymbol());

let me = document.getElementById("length").value;

var btn = document.getElementById("generate");

generate.addEventListener('click', () => {
    console.log(me);
})



// xjnjdjd

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied to Clipboard");
}