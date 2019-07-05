let score = 0;
let time = 60;
let isPlaying;
let random
// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];
function getRandom() { 
    random = Math.floor(Math.random() * 25);
    return random
 }
function init() { 
    getRandom()
    currentWord.innerHTML = words[random];
    wordInput.addEventListener('input', ()=>{
        if (wordInput.value == words[random]) {
            wordInput.value = '';
            getRandom();
            currentWord.innerHTML = words[random];
            score++;
            scoreDisplay.innerHTML = score;
        }
    })
 }

init()