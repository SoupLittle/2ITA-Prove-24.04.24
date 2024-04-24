// Spillernes navn
var player1 = "You"; 
var player2 = "Computer"; 


// Funksjonen for å få random number
function rollDice() {
    return 1 + Math.floor(Math.random() * 6);
}



function rollTheDice() { 
    setTimeout(function () { 
        // alle tærning kastene
        var dice1Player1 = rollDice(); 
        var dice2Player1 = rollDice(); 
        var dice1Player2 = rollDice(); 
        var dice2Player2 = rollDice(); 

        // -kalkulere scoren
        var totalScorePlayer1 = dice1Player1 + dice2Player1;
        var totalScorePlayer2 = dice1Player2 + dice2Player2;

        // Alle tallene på skjermen
        document.getElementById('result1').innerHTML = `${dice1Player1} + ${dice2Player1} = ${totalScorePlayer1}`;
        document.getElementById('result2').innerHTML = `${dice1Player2} + ${dice2Player2} = ${totalScorePlayer2}`;

        // Hvem som vinner
        setTimeout(function() {
        
            if (totalScorePlayer1 === totalScorePlayer2) { 
    
                alert("It's a tie! Try again."); 
            } 
            else if (totalScorePlayer1 < totalScorePlayer2) { 
               
                alert(player2 + " WINS!"); 
            } 
            else { 
                
                alert(player1 + " WON!"); 
            } 
        }, 2000); // Delay etter at terningen er kastet

        setTimeout(function() {
            location.reload(); // Reload siden etter vinneren har blit vist
        }, 5000);

    }, 1000); 
}

// Muligheten til å click på bildet å starte funksjonen

var img = document.getElementById('Image');

img.addEventListener('click', function() {
    rollTheDice()
});

