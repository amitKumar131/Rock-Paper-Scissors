const game  = () => {
 let playerScore = 0;
 let computerScore = 0;

 const startGame = () =>{
     const intro = document.querySelector('.intro');
     const match = document.querySelector('.match');
     const play = document.querySelector(".intro button");

     play.addEventListener('click', () =>{
        intro.classList.add('fadeOut');
        match.classList.remove('fadeOut');

             const playerOptions = document.querySelectorAll('.options button');
             const pScore = document.querySelector('.player-score p');
             const cScore = document.querySelector('.computer-score p');

             const playerHand = document.querySelector('.player-hand');
             const computerHand = document.querySelector('.computer-hand');

        playerOptions.forEach(choose => {
            choose.addEventListener('click', () =>{


                const options = ['rock','paper','scissors'];
                const num = Math.floor(Math.random() *3 );
                const computerChoose =options[num];

               
                const winner = document.querySelector('.winner');


                const playerChoose = choose.textContent;

                computerHand.src =`./assets/${computerChoose}.png`;
                playerHand.src =`./assets/${playerChoose}.png`;

                if (playerChoose === computerChoose){
                    winner.textContent ='It is a tie';
                    return;
                }
                if(playerChoose === 'rock'){
                    if(computerChoose === 'scissors'){
                        playerScore++;
                        winner.textContent ='Player wins';
                    }
                    if(computerChoose ==='paper'){
                        computerScore++;
                        winner.textContent ='Computer wins';
                    }
                    
                }
                if(playerChoose === 'paper'){
                    if(computerChoose === 'rock'){
                        playerScore++;
                        winner.textContent ='Player wins';
                    }
                    if(computerChoose === 'scissors'){
                        computerScore++;
                        winner.textContent ='Computer wins';
                    }
                    
                }
                if(playerChoose === 'scissors'){
                    if(computerChoose === 'paper'){
                        playerScore++;
                        winner.textContent ='Player wins';
                    }
                    if(computerChoose === 'rock'){
                        computerScore++;
                        winner.textContent ='Computer wins';
                    }
                    
                }
                
                pScore.textContent = playerScore;
                cScore.textContent = computerScore;

             });
            
        });
     
     });
     
 };
 startGame();
};
game();