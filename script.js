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

const container = document.querySelector('.container');
let count = 1;
let scorePC = 0;
let scoreP1 = 0;

window.addEventListener('click', function(e){
    if (scoreP1 < 5 && scorePC < 5){
        const p1 = e.target.innerText;
        if (p1 == 'rock' || p1 == 'paper' || p1 == 'scissors'){
            const pc = computerPlay();
            const div = document.createElement('div');
            const div2 = document.createElement('div');
            let result = game(p1, pc);
            if (result == 'Player wins!'){
                scoreP1++;
            }
            else{
                scorePC++;
            }
            div.textContent = "PC Picks: " + pc +' - Round '+ count + " "+result ;
            div2.textContent = 'P1: ' + scoreP1 + " PC: " + scorePC;
            div.style.cssText = "margin-top: 8px";
            container.appendChild(div);
            container.appendChild(div2);
            count++;
            if (scorePC == 5){
                div.textContent = 'PC Wins Set!';
                container.appendChild(div);
            }
            if (scoreP1 == 5){
                div.textContent = 'P1 Wins Set!';
                container.appendChild(div);
            }
        }
    }
});









