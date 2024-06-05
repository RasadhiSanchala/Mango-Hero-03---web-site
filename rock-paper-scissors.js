     /*const score = {
            wins : 0,
            losses :0,
            ties : 0
         };*/

         /*We can use below one instead of above one*/

         const score = JSON.parse(localStorage.getItem
            ('score')) || { 
               wins: 0, 
               losses: 0, 
               ties: 0 
           };
   
           function updateScoreElements(){
               document.querySelector('.js-score')
                       .innerHTML=`wins :${score.wins} losses:${score.losses} ties:${score.ties}`;
           }
   
           updateScoreElements();
   
           function playGame(playerMove){
   
           const computerMove=pickComputerMove();
           let result='';
   
           if (playerMove==='Scissors'){
           if(computerMove==='Rock'){
               result='You lose !';
           }else if(computerMove==='Paper'){
               result='You Win !';
           }else if(computerMove==='Scissors'){
               result='Tie !';
           }
   
       }else if(playerMove==='Paper'){
           if(computerMove==='Rock'){
               result='You Win !';
           }else if(computerMove==='Paper'){
               result='Tie !';
           }else if(computerMove==='Scissors'){
               result='You lose !';
           }
           
       }else if(playerMove==='Rock'){
           if(computerMove==='Rock'){
               result='Tie !';
           }else if(computerMove==='Paper'){
               result='You lose !';
           }else if(computerMove==='Scissors'){
               result='You Win !';
           }
       }
   
       if(result==='You Win !'){
           score.wins +=1;
       }else if(result==='You lose !'){
           score.losses +=1;
       }else if(result==='Tie !'){
           score.ties +=1;
       }
   
          localStorage.setItem('score',JSON.stringify(score));
   
         updateScoreElements();
   
         document.querySelector('.js-result').innerHTML=result;
         
         document.querySelector('.js-moves').innerHTML=
       `You
       <img src="images/${playerMove}-emoji.png" class="move-icon">
       <img src="images/${computerMove}-emoji.png" class="move-icon">
       Computer`;
   
   }
   
           function pickComputerMove(){
           const randamNumber= Math.random();
           let computerMove='';
   
           if(randamNumber>=0 && randamNumber< 1/3){
               computerMove='Rock';
           }else if(randamNumber>= 1/3 && randamNumber< 2/3){
               computerMove='Paper';
           }else if(randamNumber>= 2/3 && randamNumber<1){
               computerMove='Scissors';
           }
   
           return computerMove;
       }