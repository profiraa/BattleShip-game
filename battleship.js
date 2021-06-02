var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false){
    guess = prompt("Enter a number from 0 to 6. Ready? Aim, fire!");
    if (guess < 0 || guess > 6){
        alert("Please enter a valid number.");
    }
    else {
        guesses = guesses + 1;

        if(guess == location1 || guess == location2 || guess == location3){
            alert("You hit me!");
            hits= hits + 1;
            if (hits == 3){
                isSunk = true;
                alert ("You sank my battleship!");
            }
        }
        else{
            alert("Miss me!")
        }
    }
}
var stats = "You took " + guesses + " guesses to sink the battle ship, which means your shooting accuracy is " + (3/guesses);
alert (stats);