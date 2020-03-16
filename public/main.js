const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

const updateTeamOneName = () => {
  const newTeamName = document.querySelector('.team-1-input').value
  document.querySelector('.team-1-name').textContent = newTeamName
}

const updateTeamTwoName = () => {
  const newTeamName = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = newTeamName
}

const addTeamOne = () => {
  const currentScore = document.querySelector('.team-1-score').textContent
  const finalScore = parseInt(currentScore) + 1
  document.querySelector('.team-1-score').textContent = finalScore
  if (finalScore === 21) {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => (button.disabled = true))
    document.querySelector('.reset').disabled = false
    document.querySelector('.team-1-end-game-message').textContent = 'Winner'
    document.querySelector('.team-2-end-game-message').textContent = 'Loser'

    document.querySelector('.team-1-score').classList.add('winner')
    document.querySelector('.team-2-score').classList.add('loser')
  }
}

const addTeamTwo = () => {
  const currentScore = document.querySelector('.team-2-score').textContent
  const finalScore = parseInt(currentScore) + 1
  document.querySelector('.team-2-score').textContent = finalScore
  if (finalScore === 21) {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => (button.disabled = true))
    document.querySelector('.reset').disabled = false
    document.querySelector('.team-2-end-game-message').textContent = 'Winner'
    document.querySelector('.team-1-end-game-message').textContent = 'Loser'
    document.querySelector('.team-1-score').classList.add('loser')
    document.querySelector('.team-2-score').classList.add('winner')
  }
}

const subTeamOne = () => {
  const currentScore = parseInt(
    document.querySelector('.team-1-score').textContent
  )
  if (currentScore !== 0) {
    const finalScore = currentScore - 1
    document.querySelector('.team-1-score').textContent = finalScore
  }
}

const subTeamTwo = () => {
  const currentScore = parseInt(
    document.querySelector('.team-2-score').textContent
  )
  if (currentScore !== 0) {
    const finalScore = currentScore - 1
    document.querySelector('.team-2-score').textContent = finalScore
  }
}

const addPeriod = () => {
  const currentPeriod = parseInt(document.querySelector('.period').textContent)
  if (currentPeriod !== 3) {
    const finalScore = currentPeriod + 1
    document.querySelector('.period').textContent = finalScore
  }
}

const subPeriod = () => {
  const currentPeriod = parseInt(document.querySelector('.period').textContent)
  if (currentPeriod !== 1) {
    const finalScore = currentPeriod - 1
    document.querySelector('.period').textContent = finalScore
  }
}

const reset = () => {
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-2-score').textContent = 0
  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => (button.disabled = false))
  document.querySelector('.team-2-end-game-message').textContent = ''
  document.querySelector('.team-1-end-game-message').textContent = ''
  document.querySelector('.team-1-score').classList.remove('loser')
  document.querySelector('.team-2-score').classList.remove('winner')
  document.querySelector('.team-1-score').classList.remove('loser')
  document.querySelector('.team-2-score').classList.remove('winner')
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOneName)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwoName)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addTeamOne)

document.querySelector('.period-add-1').addEventListener('click', addPeriod)

document.querySelector('.period-sub-1').addEventListener('click', subPeriod)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addTeamTwo)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subTeamOne)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subTeamTwo)

document.querySelector('.reset').addEventListener('click', reset)
