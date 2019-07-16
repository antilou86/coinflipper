
let randomNumberMaker = function() {
    return Math.random();
}

let yesNoResults = document.querySelector('.yesNoResults');
let nameResults = document.querySelector('.morganOrLouResults');
let para = document.createElement('p');
let para2 = document.createElement('p');
nameResults.appendChild(para);
yesNoResults.appendChild(para2);

let nameButton = document.querySelector('.morganOrLou button')
nameButton.addEventListener('click', () => {
    if (randomNumberMaker() < .5){
        para.textContent = 'Lou'
    } else {
        para.textContent = 'Morgan'
    };
})

let yesNoButton = document.querySelector('.yesNo button')
yesNoButton.addEventListener('click', () => {
    if (randomNumberMaker() < .5){
        para2.textContent = 'Yes'
    } else {
        para2.textContent = 'No'
    };
})


