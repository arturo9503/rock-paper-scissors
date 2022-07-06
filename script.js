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

window.addEventListener('click', function(e){
    const p1 = e.target.innerText;
    if (p1 == 'rock' || p1 == 'paper' || p1 == 'scissors'){
        const pc = computerPlay();
        console.log(game(p1, pc));
    }
});









