
//Communicating with the DOM

var answerEl = document.getElementById("answer");
var lengthEl = document.getElementById("length");
var numberEl = document.getElementById("number");
var lowerEl = document.getElementById("lower");
var upperEl = document.getElementById("upper");
var symbolEl = document.getElementById("symbol");
var copyEl = document.getElementById("copy");
var generateEl = document.getElementById("generate");


const randomFunc = {
	upper : getRandomUpperCase,
	lower : getRandomLowerCase,
	number : getRandomNumber,
	symbol : getRandomSymbol
};

//generate event
generateEl.addEventListener('click', () =>{
	//const length = parseInt(lengthEl.value);
	const length = +lengthEl.value;
	const hasUpper = upperEl.checked;
	const hasLower = lowerEl.checked;
	const hasNumber = numberEl.checked;
	const hasSymbol = symbolEl.checked;

answerEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

//Generate Password Function
function generatePassword(upper, lower, number, symbol, length){
	let generatedPassword = "";

	const typesCount = upper + lower + number + symbol;

	//console.log(typesCount);

	const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	if(typesCount === 0) {
		return '';
	}
	
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);

	
	return finalPassword;
}


// Generating random values

function getRandomUpperCase(){
	return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomLowerCase(){
	return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomNumber(){
	return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol(){
	var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
	return symbol[Math.floor(Math.random()*symbol.length)];
}

console.log(getRandomSymbol());