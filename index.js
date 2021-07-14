
let userName;


while (userName === undefined || userName === null || userName.length === 0) {
  userName = prompt("hoe heet je?")
    
}

prompt("Welkom bij Guess the Number " + userName + "!!");


let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = Math.floor(Math.random() * 26);

btn.addEventListener('click',function(){
    let input = document.getElementById('userinputnumber').value;
    if(input == number){
        window.alert( "You guessed right")
    }
    else if (input < number){
        output.innerHTML = "you guessed too low"
    }
    if (input > number){
        output.innerHTML ="you guessed too high!"
    }
})