"use strict";
/*
 console.log(document.querySelector('.message').textContent);
 document.querySelector('.number').textContent='13';
 document.querySelector('.score').textContent='10';
 document.querySelector('.guess').value=23;
 console.log(document.querySelector('.guess').value); */
 const secretNumber= Math.trunc(Math.random()*20)+1;
  let score=20;
 
 document.querySelector('.check').addEventListener('click',function(){
   const guess= Number(document.querySelector('.guess').value);
   console.log(guess,typeof guess);
   //When there is no input
   if(!guess){
    document.querySelector('.message').textContent="⛔No Number!";
   }
   // when player win
   else if(guess===secretNumber){
    document.querySelector('.message').textContent="🎉 Correct Number, You got it!";
    document.querySelector('body').style.backgroundColor='#60b467';
    document.querySelector('.number').style.width='30rem';
    document.querySelector('.number').textContent=secretNumber;
    //When guess is High
   }else if(guess>secretNumber){
      if(score>1){
        document.querySelector('.message').textContent="The Number is Too High!";
        score=score-1;
        document.querySelector('.score').textContent=score;
      } else{
        document.querySelector('.message').textContent="sorry, You are lost the Game!";
        document.querySelector('.score').textContent=0;
      }
     //When guess is  low
   }else if(guess<secretNumber){
    if(score>1){
        document.querySelector('.message').textContent="The Number is Too low!";
        score=score-1;
        document.querySelector('.score').textContent=score;
      } else{
        document.querySelector('.message').textContent="Sorry,You Lost The Game!";
        document.querySelector('.score').textContent=0;
      }
    
   }
 });
   let restorScore=20;
 document.querySelector('.again').addEventListener('click',function(){
   
    document.querySelector('.message').textContent="Start guessing.....";
     document.querySelector('.score').textContent=restorScore;
     document.querySelector('body').style.backgroundColor='#222';
     document.querySelector('.number').style.width='15rem';
   
 });