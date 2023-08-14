
let playGame = () =>{
    const player1 = Math.floor(Math.random()*6)+1;
    const play1dice = `images/dice-${player1}.png`;
    document.getElementById('check1').setAttribute('src', play1dice); 


    const player2 = Math.floor(Math.random()*6)+1;
    const play2dice = `images/dice-${player2}.png`;
    document.getElementById('check2').setAttribute('src', play2dice);

    if(player1 > player2){
        document.querySelector('h1').innerHTML= "player -1 Won :)";
    }
    else if (player1 < player2){
        document.querySelector('h1').innerHTML= "player -2 Won :)";
    }
    else{
        document.querySelector('h1').innerHTML= "Its Draw:)";
    }
}

