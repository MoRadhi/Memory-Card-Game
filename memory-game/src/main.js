import confetti from 'canvas-confetti';

const cards = document.querySelectorAll(".panels li")
const resetBtn = document.querySelector("#reset-btn")

let hasFlippedCard = false
let lockBoard = false
let firstCard = null
let secondCard = null
let matchedCount = 0

const flipCard = (card) => {
    //Stop the function if
    if (lockBoard === true) {
        console.log("lockboard is true")
        return
    }
    if (firstCard === card) {
        console.log("First Card Clicked Twice")
        return
    }

    card.classList.add("flip")

    //Game logic
    if (hasFlippedCard === false) {
        hasFlippedCard = true
        firstCard = card
        console.log("First Card Chosen")
        return;
    } else {
        secondCard = card
        console.log("Comparing Cards")
        checkForMatch()
    }
}

const checkForMatch = () => {
    const name1 = firstCard.dataset.name
    const name2 = secondCard.dataset.name
    console.log(name1, name2)
    
    name1 === name2 ? disableCards() : unflipCards()
}

const disableCards = () => {
    firstCard.removeEventListener("click", handleCardsClicked)
    secondCard.removeEventListener("click", handleCardsClicked)
    
    matchedCount += 1
    if (matchedCount === 8) {
        confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
    resetBtn.style.display = "block"
    }
    
    resetBoard()
}

const unflipCards = () => {
    lockBoard = true
    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        resetBoard()
    },800)
}

const resetBoard = () => {
    hasFlippedCard = false
    lockBoard = false
    firstCard = null
    secondCard = null
}

// This is a named function. JavaScript can find this in memory by its name
//Written this instead of looping over the cards and adding a click listener on each
//Since it'll be easier to remove the event listeners when choosing the same cards
function handleCardsClicked(event) {
    const clickedCard = event.currentTarget // 'event.currentTarget' is the <li> that was clicked
    flipCard(clickedCard)
}
cards.forEach(card => {
    card.addEventListener("click", handleCardsClicked)
})

const shuffle = () => {
    const max = 16
    
    cards.forEach(card => {
        const randInt = Math.floor(Math.random() * (max + 1))
        card.style.order = randInt
    })
}

const restartGame = () => {
    matchedCount = 0
    cards.forEach(card => {
        card.classList.remove("flip")
        card.addEventListener("click", handleCardsClicked)
    })
    shuffle()
    resetBtn.style.display = "none"
}

resetBtn.addEventListener("click", () => {
    restartGame()
})

shuffle()