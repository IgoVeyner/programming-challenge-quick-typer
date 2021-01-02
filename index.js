// the elements you'll use //

const word = document.getElementById('word-display')
const typerInput = document.getElementById('typer-input')
const countdownButton = document.getElementById('countdown-button')
const countdownTimer = document.getElementById('countdown-timer')
const completedWords = document.getElementById('completed-words')
let timer 

// the words you'll use //

const words = [
  "coniferous", "onomatopoiea", "palindrome", "cipher", "irregardless", "colonel", "tea", "cats", "octavius", "albumen", "insouciant", "semaphore", "eudaemonic", "aquamarine", "milieu", "antediluvian", "chrysalis", "quantum", "mechanic", "alleviate", "constant", "javascript", "ruby", "function", "method", "hash", "autochthonous", "array", "zounds", "electric", "boogie", "schadenfreude", "antonym", "synonym", "leviosa", "zombie", "kombucha", "stringent", "flower", "hyacinth", "etruscan", "lavendar", "salient", "evolution", "demigod", "elevated","infringe", "epoch", "houndstooth", "algorithm"
]

// word related functions and variables //

let currentWord = "start"

function newWord() {
  // this generates a random float between zero and one, then multiplies it, rounds it, and gets the word in the array associated with that random number
  currentWord = words[Math.floor(Math.random() * words.length)]
}

// callback functions //

function handleTypingChange(event) {
  // console.log(event.target.value)
  const userInput = event.target.value

  if (userInput === currentWord) {
    addToCompleted(userInput)
    newWord()
    typerInput.value = ""
    word.innerText = currentWord
  } 
}

function handleCountdownClick(event) {
  // console.log(`${event.target} has been clicke-d!`)
  completedWords.innerHTML = ""
  event.target.style.visibility = "hidden"
  typerInput.style.visibility = "visible"
  newWord()
  word.innerText = currentWord

  countdownTimer.innerText = "20"
  timer = setInterval(countdown, 1000)
  typerInput.focus()
}

function addToCompleted(word) {
  const li = document.createElement("li")
  li.innerText = word
  completedWords.appendChild(li)
}

function countdown() {
  if (parseInt(countdownTimer.innerText, 10) > 0) {
    // countdownTimer.innerText = countdownTimer.innerText - 1
    countdownTimer.innerText = parseInt(countdownTimer.innerText, 10) - 1
  }
  else {
    clearInterval(timer)
    countdownButton.style.visibility = "visible"
    typerInput.style.visibility = "hidden"
  } 
}

// set initial styles and add event listeners //
typerInput.style.visibility = "hidden"
// countdownTimer.style.visibility = "hidden"

typerInput.addEventListener("change", handleTypingChange)
countdownButton.addEventListener("click", handleCountdownClick)
