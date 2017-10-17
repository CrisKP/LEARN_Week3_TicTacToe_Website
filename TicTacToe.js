$(document).ready( function(){
  var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var isItXTurn = true;
  var isGameWon = false;
  var isGameDrawn = false;

  var boxChanger = {
    box0: 0,
    box1: 1,
    box2: 2,
    box3: 3,
    box4: 4,
    box5: 5,
    box6: 6,
    box7: 7,
    box8: 8
  }

  function checkGame(){
    if (board[0] !=0 && board[1] != 0 && board[2] !=0 && board[0] == board[1] && board[0] == board[2] && board[1] == board[2]){
      isGameWon = true;
    } else if (board[3] !=0 && board[4] != 0 && board[5] !=0 && board[3] == board[4] &&    board[4] == board[5] && board[5] == board[3]) {
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
    } else if (!board.includes(0)){
    isGameDrawn = true;
    }
  }

  function gameEnd() {
    if (isGameWon && isItXTurn){
      $("p").text("You, the O player, are the winner!");
    }
    if (isGameWon && !isItXTurn){
      $("p").text("You, the X player, are the winner!");
    }
    if (isGameDrawn){
      $("p").text("The game is a draw");
    }
  }

 $("th").on("click",function() {
   var index;
   if ($(this).text() == ("") && isItXTurn == true) {
     $(this).text("x");
     isItXTurn = false;
     index = $(this).attr("id");
     board[boxChanger[index]] = 1;
     console.log(board);
     console.log(boxChanger[index]);
   } else if ($(this).text() == ("") && isItXTurn == false) {
     $(this).text("o");
     isItXTurn = true;
     index = $(this).attr("id");
     board[boxChanger[index]] = 2;
     console.log(board);
     console.log(boxChanger[index]);
   }
   checkGame();
   gameEnd();



 });




 });
