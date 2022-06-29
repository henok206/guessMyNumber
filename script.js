"use strict";
/*
 console.log(document.querySelector('.message').textContent);
 document.querySelector('.number').textContent='13';
 document.querySelector('.score').textContent='10';
 document.querySelector('.guess').value=23;
 console.log(document.querySelector('.guess').value); */
 let secretNumber= Math.trunc(Math.random()*20)+1;
  let score=20;
  let highScore=0;
       // Display Message function
   const displayMessage=function(message)
   {
    document.querySelector('.message').textContent=message;
   }
          //Display Score function
    const displayScore=function(score)
    {
    document.querySelector('.score').textContent=score;
    }
          // Display Number function
    const displayNum=function(number)
    {
      document.querySelector('.number').textContent=number;
    }
          // display number style
    const displayNumStyle=function(number)
    {
          document.querySelector('.number').style.width=number;
    }
         // display bodyFunction
    const displayBodyFunction=function(body)
    {
        document.querySelector('body').style.backgroundColor=body;
    }
        
       

   
 
   //Event listner and event handler
 document.querySelector('.check').addEventListener('click',function(){
   const guess= Number(document.querySelector('.guess').value);
   console.log(guess,typeof guess);
   //When there is no input
   if(!guess){
   // document.querySelector('.message').textContent="⛔No Number!";
    displayMessage("⛔No Number!");
  }
   // when player win
   else if(guess===secretNumber){
    // document.querySelector('.message').textContent="🎉 Gongragulation , You got it !";
    displayMessage("🎉 Gongragulation , You got it !");
    //document.querySelector('.number').textContent=secretNumber;
     displayNum(secretNumber);
    //document.querySelector('body').style.backgroundColor='#60b467';
    displayBodyFunction('#60b467');
    //document.querySelector('.number').style.width='30rem';
    displayNumStyle('30rem');
    if(score>highScore){
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
    }
   
    //When guess is wrong
   }else if(guess!==secretNumber){
     if(score>1){
     // document.querySelector('.message').textContent=guess>secretNumber?  'Too High,Try again!':'Too low,Try again!';
      displayMessage(guess>secretNumber?  'Too High,Try again!':'Too low,Try again!');
       score=score-1;
      //document.querySelector('.score').textContent=score;
      displayScore(score);
     }else{
    //document.querySelector('.message').textContent="Sorry,You Lost The Game!";
    displayMessage("Sorry,You Lost The Game!");
    //document.querySelector('.score').textContent=0;
    displayScore(0);

  }
}
});
 //when guess is too high
 //else if(guess>secretNumber){
     //if(score>1){
      // document.querySelector('.message').textContent="The numer is too High ";
      //score=score-1;
      //document.querySeelector('.score').textContent=score;
     //}else{
      //document.querySelector('.message').textContent="Sorry,You Lost The Game!";
      //document.querySelector('.score').textContent=0;
     //}
     // When the guess is too low
     //else if(guess<secretNumber){
      //if(score>1){
      // document.querySelector('.message').textContent="The numer is too Low ";
      //score=score-1;
      //document.querySeelector('.score').textContent=score;
     //}else{
      //document.querySelector('.message').textContent="Sorry,You Lost The Game!";
      //document.querySelector('.score').textContent=0;
     //}
 //}
  document.querySelector('.again').addEventListener('click',function(){
   score=20;
   secretNumber= Math.trunc(Math.random()*20)+1;
    document.querySelector('.guess').value='';
    //document.querySelector('.number').textContent='?'
    displayNum('?');
    //document.querySelector('.message').textContent="Start guessing.....";
     displayMessage("Start guessing.....");
     //document.querySelector('.score').textContent=score;
     displayScore(score);
     //document.querySelector('body').style.backgroundColor='#222';
     displayBodyFunction('#222');
     //document.querySelector('.number').style.width='15rem';
     displayNumStyle('15rem');
  });