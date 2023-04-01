const answer = Math.floor(Math.random() * 10 + 1);
 let guesses = 0;

 document.getElementById("submitButton").onclick = function(){

    let guess = document.getElementById("guessField").value;
    guesses+=1;

    if (guess == answer) {
        alert(`${answer} is the number, it took you ${guesses} guesses!`);
        window.location.reload(); //to reload page and restart the game, when u guess right
    }
    else if(guess < answer){
        alert("Too small!");
    }
    else{
        alert("Too large!");
    }
 }