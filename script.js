
let player={
    name : "Abeto",
    balance : 500
}
let arr =[]
let sum = 0
let massage = document.querySelector(".option")
let cardEl = document.querySelector(".card-el")
let sumEl = document.querySelector(".sum-el")
let chipsEl = document.querySelector(".chips-el")

let isLive = false
let hasBlackjack = false
chipsEl.textContent = player.name + ": $" + player.balance
function startGame(){
    let firstCard = getRandomNum()
    let secondCard = getRandomNum()
    console.log(secondCard)
    arr=[firstCard,secondCard]
    sum = firstCard + secondCard 
    renderGame();
}
function getRandomNum(){
    let random = Math.floor(Math.random()*13) + 1
    console.log(random)
    if(random === 1) {return 11}
    else if(random <=10 && random > 1) {return random}
    else {return 10}
}

function renderGame(){
    sumEl.textContent ="Sum: " + sum
    cardEl.textContent =" Cards: "
    arr.forEach(element => {
        cardEl.textContent += element + " "        
    });
    if(sum <21){
        massage.textContent="Do you want to draw a new card?"
        isLive = true
        
    }
    else if(sum === 21){
        massage.textContent="Congrats! You've got a blackjack!"
        isLive = true
        hasBlackjack = true
    }
    else{
        massage.textContent="You're out of game!"
        isLive = false
        
    }
}
function newCard(){
    if(isLive && hasBlackjack ===false){
     let newDraw = getRandomNum()
    sum += newDraw
    arr.push(newDraw)
    renderGame()
    }
    
}