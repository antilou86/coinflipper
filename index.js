
let randomNumberMaker = function() {
    return Math.random();
}

const yesNoResults = document.querySelector('.yesNoResults');
const nameResults = document.querySelector('.morganOrLouResults');
const formNames = document.querySelector('formNames')

const para = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');

nameResults.appendChild(para);
yesNoResults.appendChild(para2);

const nameButton = document.querySelector('.morganOrLou button');
nameButton.addEventListener('click', () => {
    if (randomNumberMaker() < .5){
        para.textContent = 'Lou'
    } else {
        para.textContent = 'Morgan'
    };
})

const yesNoButton = document.querySelector('.yesNo button');
yesNoButton.addEventListener('click', () => {
    if (randomNumberMaker() < .5){
        para2.textContent = 'Yes'
    } else {
        para2.textContent = 'No'
    };
})

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', ()=>{
    para.textContent = ' ';
    para2.textContent = ' ';
})

let nameArray = ["lou", "morgan"]

const formButton = document.querySelector('.nameSubmitButton');
formButton.addEventListener('click', (Event) => {
    Event.preventDefault();
    name = document.querySelector("input[type=text]").value;
    if (name.length < 1) {
        return alert("please enter a name")
    }
    nameArray.push(name)
})
