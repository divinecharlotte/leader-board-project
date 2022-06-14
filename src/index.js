import './style.css';
import Score from './score.js';

const newScore = new Score();
const addNewScore = document.querySelector('.add-new-score');
addNewScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = addNewScore.name.value;
  const scoreNum = addNewScore.score.value;
  newScore.addScore({ name, scoreNum });
  addNewScore.name.value = '';
  addNewScore.score.value = '';
});
window.addEventListener('load', newScore.getScore);