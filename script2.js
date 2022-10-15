var x = ['paper', 'rock', 'scissor']
function getRandomInt(max) {
     return Math.floor(Math.random() * max);
}
function computerPlay(inputValues){
    console.log(x[getRandomInt(inputValues)])
}
computerPlay(x.length);


var winner=['Player', 'Computer'];
var computer=0;
var player=0;
function playRound(playerselection, computerselection){
    //if player selection is paper and computer selection is rock
    //  then Paper win
    // if player paper  and computer rock
    if (playerselection == x[0] && computerselection == x[1]){
        player++;
        return winner[0];
    }
    // if player paper and computer paper
    else if (playerselection == x[0] && computerselection == x[0]){
        
        return 'Both player and Computer choose '+x[0];

    }
    // if player paper and computer scissors
    else if (playerselection == x[0] && computerselection == x[2]){
        computer++;
        return winner[1];

    }
    //  if player rock and computer paper
    else if (playerselection == x[1] && computerselection == x[0]){
       
        computer++;
        return winner[1];
    }
    // if player rock and computer rock
    else if (playerselection == x[1] && computerselection == x[1]){
        
        return 'Both player and Computer choose '+x[1];
    }
    // if player rock and computer scissors
    else if (playerselection == x[1] && computerselection == x[2]){
        player++;
        return winner[0];
    }
    // if player scissors and computer paper
    else if (playerselection == x[2] && computerselection == x[0]){
        player++;
        return winner[0];
    }
    // if player scissors and computer rock
    else if (playerselection == x[2] && computerselection == x[1]){
        computer++;
        return winner[1];
    }
    // if player scissors and computer scissors
    else (playerselection == x[2] && computerselection == x[2])
        return 'Both player and Computer choose '+x[2];

}
var PlayerInput2;
// var PlayerInput2=prompt('Type one Rock, Scissor, or Paper!');
function game(){
        for (let i=0; i<5; i++){
        var PlayerInput2=prompt('Type one Rock, Scissor, or Paper!').toLowerCase();
        console.log(playRound(PlayerInput2,x[getRandomInt(x.length)]));
    }

    if ( computer < player ){
                    console.log(winner[0]+' wins');
            }
            else if (computer > player){
                console.log(winner[1]+' wins')
            }
            else {
                console.log('No one winner')
            }

    console.log('computer = '+ computer);
    console.log('player = '+player);
    }
    game();



