function computerPlay() {
    let max = 4;
    let min = 1;
    selection = Math.floor(Math.random()*(max - min )) + min
    if (selection == 1){
        return 'rock';
    }
    else if (selection == 2){
        return 'paper';
    }
    else{
        return 'scissors'
    }
}


// function userPlay() {
//     let selection = window.prompt('What is your selection?');
//     return selection;
// }

let pc = computerPlay();
console.log(pc);
let p1 = userPlay();


function game(p1, pc){
    if (p1 == 'rock' && pc == 'scissors'){
        return 'Player wins!';
    }
    else if (p1 == 'paper' && pc == 'rock'){
        return 'Player wins!';
    }
    else if (p1 == 'scissors' && pc == 'paper'){
        return 'Player wins!';
    }
    else if (p1 == pc){
        return 'Tie!';
    }
    else{
        return 'PC wins!'
    }
}

console.log(game(p1, pc));



