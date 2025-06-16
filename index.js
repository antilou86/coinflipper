const yesNoResults = document.querySelector('.yesNoResults');
const nameResults = document.querySelector('.morganOrLouResults');
const formNames = document.querySelector('.formNames')

const para = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');

para3.className = "formPara3"

nameResults.appendChild(para);
yesNoResults.appendChild(para2);
formNames.appendChild(para3);

const nameButton = document.querySelector('.morganOrLou button');

//sets default names 
let nameArray = ["Roll Again"]

nameButton.addEventListener('click', () => {
    let x = Math.random() * nameArray.length
    para.textContent = nameArray[Math.floor(x)]
})

const yesNoButton = document.querySelector('.yesNo button');
yesNoButton.addEventListener('click', () => {
    if (Math.random() < .5){
        para2.textContent = 'Yes'
    } else {
        para2.textContent = 'No'
    };
})

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', ()=>{
    para.textContent = ' ';
    para2.textContent = ' ';
    para3.textContent = ' ';
    nameArray = ["Roll Again", "daddy", "lorelei frozman", "jessie"
    ];
})

const formButton = document.querySelector('.nameSubmitButton');
formButton.addEventListener('click', (Event) => {
    //prevents reload on button submit.
    Event.preventDefault();
    //targets user input value within the the form field
    thing = document.querySelector("input[type=text]").value;
    //checks for empty string
    if (thing.length < 1) {
        return alert("please enter a thing")
    }
    //checks for duplicate name
    if (nameArray.includes(thing)){
        return alert("you've already entered that thing")
    }
    //checks for whitespace only entry
    if (thing.trim().length < 1) {
        return alert("Please don't just enter empty spaces...")
    }
    //adds name to default array
    nameArray.push(thing)

    //loops through each name and prints it
    for (let i = 0; i < nameArray.length; i++) {
        //if first iteration, does not print with ", "
        if (i == 0) {
            para3.textContent = nameArray[i];
        }
        else {
            para3.textContent = para3.textContent + ", " + nameArray[i];
        }
    }
    //sets the value back to blank
    document.querySelector("input[type=text]").value =" ";
})
