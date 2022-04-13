// TODO: Declare any global variables we need
let numFlips=0
let numHeads=0
let numTails=0
let percentHeads=0
let percentTails=0
let image=document.getElementById('penny-image')
let flip=document.getElementById('flip')
let clear=document.getElementById('clear')
let text=document.querySelector('.message-container')
let scoreboardHeads=document.querySelector('#heads')
let scoreboardTails=document.querySelector('#tails')
let scoreboardPerHeads=document.querySelector('#heads-percent')
let scoreboardPerTails=document.querySelector('#tails-percent')

//event listeners
flip.addEventListener('click', function () {
    let result =Math.round(Math.random() * 1)
    console.log(result)
    if (result==0){                 //rolled heads
        numHeads++
        numFlips++
        percentHeads=Math.round(numHeads/numFlips*100)
        //update picture and text
        text.textContent='You Flipped Heads!'
        image.src="assets/images/penny-heads.jpg"
        //update scoreboard
        scoreboardHeads.textContent=numHeads
        scoreboardPerHeads.textContent=percentHeads+"%"
        //check if tails has been rolled
        if (numTails>0){
            percentTails=Math.round(numTails/numFlips*100)
            scoreboardPerTails.textContent=percentTails+"%"
        }
    }
    else if (result==1) {           //rolled tails
        numTails++
        numFlips++
        percentTails=Math.round(numTails/numFlips*100)
        //update picture and text
        text.textContent='You Flipped Tails!'
        image.src="assets/images/penny-tails.jpg"
        //update scoreboard
        scoreboardTails.textContent=numTails
        scoreboardPerTails.textContent=percentTails+"%"
        //check if heads has been rolled
        if (numHeads>0){
            percentHeads=Math.round(numHeads/numFlips*100)
            scoreboardPerHeads.textContent=percentHeads+"%"
        }
    }

})

clear.addEventListener('click', function () {
    //reset variables
    numFlips=0
    numHeads=0
    numTails=0
    percentHeads=0
    percentTails=0
    //reset text and image
    text.textContent="Let's Get Rolling!"
    image.src="assets/images/penny-heads.jpg"
    //reset scoreboard
    scoreboardHeads.textContent=numHeads
    scoreboardPerHeads.textContent=percentHeads+"%"
    scoreboardTails.textContent=numTails
    scoreboardPerTails.textContent=percentTails +"%"   
})
document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})