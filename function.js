const answer = Math.floor(Math.random() * 10 + 1);
 let guesses = 0;

 document.getElementById("submitButton").onclick = function(){

    let guess = document.getElementById("guessField").value;
    guesses+=1; //this being create start so it will show how many tries the user guess and it will start from one tries. 

    if (guess == answer) {
        alert(`You've got it!! ${answer} is the  correct number, it took you ${guesses} tries to guess it!`);
        window.location.reload(); //to reload page and restart the game, when u guess right
    }
    else if(guess < answer){
        alert("Too small!");
    }
    else{
        alert("Too large!");
    }
 }