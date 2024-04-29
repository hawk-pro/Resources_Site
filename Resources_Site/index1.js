
let player={
    name: "Name",
    chips:20000}


    let cards=[];
    let sum=0
    let na=""
    let hasBlackJack= false
    let isAlive="false"
    let message=""
    let messageEl=document.getElementById("message-el");
    let sumEL=document.getElementById("sum-el")
    let cardsEl=document.getElementById("cards-el")
    let playerEl=document.getElementById("player-el")


    player.textContent=player.name +": Rs."+player.chips

    function getRandomCard()
    {
            let randomNumber=Math.floor(Math.random()*13)+1
            if(randomNumber>10)
            {
                return 10;
            }
            else if(randomNumber==1){
                return 11
            }            
            else{
                return randomNumber
            } 
    }
     function startGame()
     {
         na=prompt("Please enter your name");
        playerEl.textContent=na+": RS.0";
        isAlive=true;
        let firstCard=getRandomCard();
        let secondCard=getRandomCard();
        cards=[firstCard,secondCard]
        sum=firstCard +secondCard;
        renderGame()
     }
   
     function renderGame(){
        cardsEl.textContent="Cards: "
        for(let i=0;i<cards.length;i++){
            cardsEl.textContent+=cards[i]+" ";

        }

        sumEL.textContent="Sum: "+ sum;
        if(sum<=20)
        {
            message="Do you want to draw a new card?"
        }
        else if(sum==21)
        {
            message= "You've got Blackjack!"
            hasBlackJack=true;
            playerEl.textContent=na+": $100 ";

        }
        else
        {
            message ="You're out of the game!"
            isAlive=false
        }
        messageEl.textContent=message;

     }
     function newcard(){
        if(isAlive==true && hasBlackJack==false){
            let card=getRandomCard()
            sum+=card;
            console.log(sum)
            cards.push(card);
            renderGame();

        }
     }
    