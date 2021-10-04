const HTMLElements = {
  container: document.getElementById('container'),
  restartButton: document.getElementById('restart'),
  resetButton: document.getElementById('reset'),

  playerContainer: document.getElementById('player-container'),
  player: document.getElementById('player'),

  squares: document.querySelectorAll('.square'),
  poupout: document.getElementById('poupout'),
  winnerText: document.getElementById('winner-poupout'),

  playerOnePointerText: document.getElementById('playerOne-pointer'),
  playerTwoPointerText: document.getElementById('playerTwo-pointer')
}

let playerOnePointerText = HTMLElements.playerOnePointerText;
let playerTwoPointerText = HTMLElements.playerTwoPointerText;
const playerContainer = HTMLElements.playerContainer;
const restartButton = HTMLElements.restartButton;
const resetButton = HTMLElements.resetButton;
const winnerText = HTMLElements.winnerText;
const container = HTMLElements.container;
const poupout = HTMLElements.poupout;
const squares = HTMLElements.squares;
const player = HTMLElements.player;

/* 
  LETs ==================
*/

let winned = false;
let playerCounter = 1;
let playerOnePointer = localStorage.getItem('playerOnePointer') || 0;
let playerTwoPointer = localStorage.getItem('playerTwoPointer') || 0;

/* 
  TO WIN ==================
*/

const played = {

  notifyMarkup(notification){
    poupout.classList.remove('actived')
    winnerText.textContent = notification;
    poupout.classList.add('actived');

    setTimeout( () => {poupout.classList.remove('actived')}, 700)
  },

  mark(player, square, index){
    if( player === 1)
    {
      square[index].id = 'X';

      if(square[0].id === 'X'  && square[0].id !== "" && square[0].id === square[1].id && square[0].id === square[2].id)
      {
        playerOnePointer++
        localStorage.setItem('playerOnePointer', playerOnePointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }
      if(square[0].id === 'X'  && square[0].id !== "" && square[0].id === square[3].id && square[0].id === square[6].id)
      {
        playerOnePointer++
        localStorage.setItem('playerOnePointer', playerOnePointer)
        played.winner(player)

        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }
      if(square[0].id === 'X'  && square[0].id !== "" && square[0].id === square[4].id && square[0].id === square[8].id)
      {
        playerOnePointer++
        localStorage.setItem('playerOnePointer', playerOnePointer)
        played.winner(player)

        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }


      if(square[1].id === 'X'  && square[1].id !== "" && square[1].id === square[4].id && square[1].id === square[7].id)
      {
        playerOnePointer++
        localStorage.setItem('playerOnePointer', playerOnePointer)
        played.winner(player)

        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }


      if(square[2].id === 'X'  && square[2].id !== "" && square[2].id === square[4].id && square[2].id === square[6].id)
      {
        playerOnePointer++
        localStorage.setItem('playerOnePointer', playerOnePointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }
      if(square[2].id === 'X'  && square[2].id !== "" && square[2].id === square[5].id && square[2].id === square[8].id)
      {
        playerOnePointer++
        localStorage.setItem('playerOnePointer', playerOnePointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }


      if(square[3].id === 'X'  && square[3].id !== "" && square[3].id === square[4].id && square[3].id === square[5].id)
      {
        playerOnePointer++
        localStorage.setItem('playerOnePointer', playerOnePointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }

      if(square[6].id === 'X'  && square[6].id !== "" && square[6].id === square[7].id && square[6].id === square[8].id)
      {
        playerOnePointer++
        localStorage.setItem('playerOnePointer', playerOnePointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }
    }

    if( player === 2)
    {
      square[index].id = 'O';

      if(square[0].id === 'O'  && square[0].id !== "" && square[0].id === square[1].id && square[0].id === square[2].id)
      {
        playerTwoPointer++
        localStorage.setItem('playerTwoPointer', playerTwoPointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }
      if(square[0].id === 'O'  && square[0].id !== "" && square[0].id === square[3].id && square[0].id === square[6].id)
      {
        playerTwoPointer++
        localStorage.setItem('playerTwoPointer', playerTwoPointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }
      if(square[0].id === 'O'  && square[0].id !== "" && square[0].id === square[4].id && square[0].id === square[8].id)
      {
        playerTwoPointer++
        localStorage.setItem('playerTwoPointer', playerTwoPointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }


      if(square[1].id === 'O'  && square[1].id !== "" && square[1].id === square[4].id && square[1].id === square[7].id)
      {
        playerTwoPointer++
        localStorage.setItem('playerTwoPointer', playerTwoPointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }


      if(square[2].id === 'O'  && square[2].id !== "" && square[2].id === square[4].id && square[2].id === square[6].id)
      {
        playerTwoPointer++
        localStorage.setItem('playerTwoPointer', playerTwoPointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }
      if(square[2].id === 'O'  && square[2].id !== "" && square[2].id === square[5].id && square[2].id === square[8].id)
      {
        playerTwoPointer++
        localStorage.setItem('playerTwoPointer', playerTwoPointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }


      if(square[3].id === 'O'  && square[3].id !== "" && square[3].id === square[4].id && square[3].id === square[5].id)
      {
        playerTwoPointer++
        localStorage.setItem('playerTwoPointer', playerTwoPointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }

      if(square[6].id === 'O'  && square[6].id !== "" && square[6].id === square[7].id && square[6].id === square[8].id)
      {
        playerTwoPointer++
        localStorage.setItem('playerTwoPointer', playerTwoPointer)
        played.winner(player)
        
        winned = true
        playerOnePointerText.innerHTML = playerOnePointer;
        playerTwoPointerText.innerHTML = playerTwoPointer;  
      }
    }
  },

  winner(player){
    poupout.classList.remove('actived')
    winnerText.textContent = `Jogador ${player} ganhou!!`;
    poupout.classList.add('actived');

    setTimeout( () => {poupout.classList.remove('actived')}, 3000)
  }
};

/* 
  MODIFY HTML ==================
*/

const DOM = {
  playerChange(player){
    if( player === 'X' )
    {
      playerCounter++;
      DOM.player()
    }

    if( player === 'O' )
    {
      playerCounter--;
      DOM.player()
    }
  },

  player(){
    player.innerHTML = `Player ${playerCounter}`;
  },

  resetHtml(){
    const htmlDefault = 
    `
      <div class="square" id="" data-value="a"></div>
      <div class="square" id="" data-value="b"></div>
      <div class="square" id="" data-value="c"></div>

      <div class="square" id="" data-value="d"></div>
      <div class="square" id="" data-value="e"></div>
      <div class="square" id="" data-value="f"></div>

      <div class="square" id="" data-value="g"></div>
      <div class="square" id="" data-value="h"></div>
      <div class="square" id="" data-value="i"></div>
    `;

    playerOnePointerText.innerHTML = playerOnePointer;
    playerTwoPointerText.innerHTML = playerTwoPointer;

    return htmlDefault;
  }
};

resetButton.addEventListener('click', (  ) => {
  localStorage.setItem('playerOnePointer', 0);
  localStorage.setItem('playerTwoPointer', 0);

  window.location.reload();
})

/* 
  PLAYER SETTINGS ==================
*/

playerOnePointerText.innerHTML = playerOnePointer;
playerTwoPointerText.innerHTML = playerTwoPointer;

/* 
  MARK X/O ==================
*/

squares.forEach( (square, index) => {

  square.addEventListener('click', () => {

   if( squares[index].textContent === 'X' || squares[index].textContent === 'O' ) return;

   if( !winned ){
    if( playerCounter === 1 ){
      squares[index].innerHTML = 'X';
      squares[index].classList.add('x')

      const notify =  `O player ${playerCounter} marcou X na posição ${index + 1} `;
      played.notifyMarkup(notify);
      
      played.mark( playerCounter, squares, index);
      DOM.playerChange('X');
    } else
    {
      squares[index].innerHTML = 'O';
      squares[index].classList.add('o')
      const notify =  `O player ${playerCounter} marcou O na posição ${index + 1} `;
      played.notifyMarkup(notify);
      
      played.mark( playerCounter, squares, index);
      DOM.playerChange('O');
    }
   };

  });
});

/* 
  RESTART HTML ==================
*/

restartButton.addEventListener('click', (  ) => {
  window.location.reload()
});

DOM.player();