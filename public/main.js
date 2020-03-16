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

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOneName)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwoName)
