// Rock, Paper, Scissor Game

// Game Rules
// 1) Rock and Paper = Paper Wins
// 2) Rock and Scissor = Rock Wins
// 3) Paper and Scissor = Scissor Wins

// Steps
// * 1) Ask users to play the game or quit, if they press start, then step 2 or quit
// * 2) Take User and Computer Input
// * 3) Show them what they choose and who wins as per the Game Rules
// * 4) Again ask them do they like to play again


/* Required input */
const items = ['Rock','Paper','Scissor'];
let userInput , computerInput = 0;
let winner = " ";
let gamePlay = true;

//1) Ask users to play the game or quit, if they press start, then step 2 or quit
/* for this we use while loop because we are not want to count number (for loop)*/
while(gamePlay){
    const play = confirm("Do you want to play this  game with computer's input");
    if(!play){
        gamePaly = false;
        break; /* exit user from this while loop */
    }




// * 2) Take User and Computer Input
userInput = prompt("Enter a number to select: (1) Rock ,(2) Paper, (3) Scissor"); /* this is user input */
userInput = Number(userInput);

/* check user input is valid or not */
while(userInput<1 || userInput > 3 || isNaN(userInput)){/* use while loop because user may be enter so many times wrong input */
    alert("Error: Please enter valid number between 1 to 3");
    /* if user give right input then take it and show it */
    userInput = prompt("Enter a number to select: (1) Rock ,(2) Paper, (3) Scissor");
}
/* Get input from computer */
computerInput = Math.floor(Math.random()*3 + 1);/* by get random num from computer using math.random() 
                    ,give limit by multiply 3, add 1 give number from 1 to 3, get interger value use math.floor()*/

// * 3) Show them what they choose and who wins as per the Game Rules
/* Game start */
winner = function(){
    if(items[userInput-1] === items[computerInput -1]){
        return "It's tie";/* by return exit the function*/
    }
    if(items[userInput-1] !== items[computerInput -1]){
        if(items[userInput - 1] === 'Rock' && items[computerInput - 1]=== 'Paper')
        {
            return"computer wins";/* exit the function */
        }
        else if(items[userInput - 1]==='Paper' && items[computerInput -1]==='Rock')
        {
            return"You wins";
        }
        if(items[userInput -1] === 'Rock' && items[computerInput -1] === 'Scissor'){
            return"You wins";
        }else if(items[userInput -1] ==='Scissor' && items[computerInput -1]==='Rock'){
            return"computer wins";
        }if(items[userInput-1]==='Paper' && items[computerInput -1] === 'Scissor'){
            return"computer wins";
        }else if(items[userInput -1]==='Scissor' && items[computerInput -1]==='Paper'){
            return"You wins";
        }
    }
};                    


/* Resul */
alert(`Result :User Selected ${items[userInput - 1]} and Computer Seleced ${items[computerInput - 1]}. So ${winner()}`);
}