# Score Board

This is a javascripted web app that allows us to keep track of the score of two teams up to 21 at which the team will win.
You may increment up to 3 periods and reset the game with the reset button

# Objectives

- Become familiar with DOM element selection
- Work with event listeners
- Add classes via Javascript

# Includes: 

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://www.w3schools.com/css/)
- [JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [FLEXBOX](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [NETLIFY](https://docs.netlify.com/?_ga=2.56383019.1272475466.1587169866-1421079835.1583768648)

# Requirements 

- Implement the design using the given HTML & CSS.
- Assign click events to the update buttons to `update` the corresponding values on the page. The score buttons should adjust the current score by a "hard-coded" value
- Add an if statement to stop each team's score from going below 0.
- Add an if statement to stop each team's score from going above 21
- When a team gets 21 points, disable the buttons and display a message to the user of who won
- Add a `reset` button that resets the scoreboard back to each team having 0 points and re-enables the buttons
- Add more CSS to the winning teams score to indicate who won
- Implement a Quarter/Period Tracker
 
## Mockup

![score board mockup](https://raw.githubusercontent.com/suncoast-devs/handbook/master/curriculum/fundamentals/modules/javascript/_old/assignments/assets/scoreboard.png)
 
## Live Site

[LIVE SITE](https://score-board-austinparvin.netlify.com)

![score board](http://g.recordit.co/MiXdTDUBpO.gif)

## Featured Code

### Incremental Function w/Conditional Win Logic

```JSX
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
 ```
 
