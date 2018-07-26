const cardsContainer = document.querySelector('.container')
let firstGuess
let secondGuess

function resetCards() {
  firstGuess = secondGuess = undefined
  const selectedCards = document.querySelectorAll('.selected')
  selectedCards.forEach(card => card.classList.remove('selected'))
}

function match() {
  const selectedCards = document.querySelectorAll('.selected')
  selectedCards.forEach(card => card.classList.add('match'))
}

cardsContainer.addEventListener('click', event => {
  const card = event.target.closest('.card')

  if (card.matches('.selected') || card.matches('.match')) {
    return
  }

  if (!firstGuess) {
    firstGuess = card.dataset.id
    card.classList.add('selected')
    return
  }

  if (!secondGuess) {
    secondGuess = card.dataset.id
    card.classList.add('selected')
  }

  if (firstGuess === secondGuess) {
    match()
  }

  setTimeout(resetCards, 1500)
})
