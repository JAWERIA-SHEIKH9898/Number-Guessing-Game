const msg1 = document.getElementById("message1") as HTMLDivElement;
const msg2 = document.getElementById("message2") as HTMLDivElement;
const msg3 = document.getElementById("message3") as HTMLDivElement;

const answer:number = Math.floor(Math.random()* 10) + 1;

let no_of_gusses:number = 0;
const guessed_nums:number[] = [];

function play():void{
    const guessInput = document.getElementById("guess") as HTMLInputElement;
    const user_guess:number = Number(guessInput.value);

    if(user_guess <1 || user_guess > 10){
        alert("Please enter a number between 1 amd 10");
    }else{
        guessed_nums.push(user_guess);
        no_of_gusses += 1;

        if(user_guess < answer){
            msg1.textContent = "Your guess id to low";
            msg2.textContent = "No. of guesses: " + no_of_gusses;
            msg3.textContent = "Guessed numbers are: " + guessed_nums.join(",");
        } else if (user_guess > answer){
            msg1.textContent = "Your guess id to high";
            msg2.textContent = "No. of guesses: " + no_of_gusses;
            msg3.textContent = "Guessed numbers are: " + guessed_nums.join(","); 
        } else {
            msg1.textContent = "Yippie You Win!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in " + no_of_gusses + "guesses";
            (document.getElementById("my_btn") as HTMLButtonElement).disabled = true;
        }
    }

}