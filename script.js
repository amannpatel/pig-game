'use strict';

// Selecting Elements.
const score0Ele = document.getElementById('score--0');
const score1Ele = document.querySelector('#score--1');
const current0Ele = document.getElementById('current--0');
const current1Ele = document.getElementById('current--1');

const diceEle = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEle.classList.remove('hidden');
    diceEle.src = `images/dice-${dice}.png`;
    // 3. Check for rolled 1
    if (dice !== 1) {
        // Add dice to the current score.
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        //switch to next player
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
})
