$(document).ready( function(){
  var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var isItXTurn = true;
  var isGameWon = false;
  var isGameDrawn = false;

  if (board[0] !=0 && board[1] != 0 && board[2] !=0 && board[0] == board[1] && board[0] == board[2] && board[1] == board[2]){
    isGameWon = true;
  } else if (board[3] !=0 && board[4] != 0 && board[5] !=0 && board[3] == board[4] &&      board[4] == board[5] && board[5] == board[3]) {
      isGameWon = true;
  } else if (board[6] !=0 && board[7] != 0 && board[8] !=0 && board[6] == board[7] && board[7] == board[8] && board[6] == board[8]){
    isGameWon = true;
  } else if (board[0] !=0 && board[3] != 0 && board[6] !=0 && board[0] == board[3] && board[0] == board[6] && board[3] == board[6]){
    isGameWon = true;
  } else if (board[1] !=0 && board[4] != 0 && board[7] !=0 && board[1] == board[4] && board[1] == board[7] && board[4] == board[7]){
    isGameWon = true;
  } else if (board[2] !=0 && board[5] != 0 && board[8] !=0 && board[2] == board[5] && board[8] == board[2] && board[5] == board[8]){
    isGameWon = true;
  } else if (board[0] !=0 && board[4] != 0 && board[8] !=0 && board[0] == board[4] && board[4] == board[8] && board[8] == board[0]){
    isGameWon = true;
  } else if (board[2] !=0 && board[4] != 0 && board[6] !=0 && board[2] == board[4] && board[4] == board[6] && board[2] == board[6]){
    isGameWon = true;
  // } else if(board.forEach(function(element) {
  //   if (element == 0){
  //   isGameDrawn == false;
  //   } else if (isGameWon == false){
  //     isGameDrawn = true;
  //   }
} else if (!board.includes(0)){
  isGameDrawn = true;
}








}





})
