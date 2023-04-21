// javascript

const previousWord = document.getElementById("previous-word")
const newWord = document.getElementById("new-word")
const checkBtn = document.getElementById("check-btn")
const resultEl = document.getElementById("result")
let sameLettersCount = 0
let crossedLettersCount = 0
let sameLetters = ""
let crossedLetters = ""
let previousWordArr = []
let newWordArr = []

checkBtn.addEventListener("click", handleCheckClick)

function handleCheckClick(){
    if(previousWord.value.length > 0 && newWord.value.length > 0){
        for(let i = 0; i < previousWord.value.length; i++) {
            previousWordArr.push(previousWord.value[i])
        }
    
        for(let i = 0; i < newWord.value.length; i++) {
            newWordArr.push(newWord.value[i])
        }
        
        for(let i = previousWordArr.length -1; i >= 0 ; i--) {
            for(let j = 0; j < newWordArr.length; j++){
                if(previousWordArr[i] === newWordArr[j]){
                    sameLettersCount++
                    sameLetters += `${previousWordArr[i]} `
                    previousWordArr.splice(i, 1)
                    newWordArr.splice(j, 1)
                }
            }
        }
        
        crossedLettersCount = (previousWord.value.length + newWord.value.length) - sameLettersCount*2
        for(letter of previousWordArr) {
            crossedLetters += `${letter} `
        }
        
        for(letter of newWordArr) {
            crossedLetters += `${letter} `
        }
      
        resultEl.innerHTML = `
                    <div class="words">
                        <p class="words-style">${previousWord.value}</p>
                        <p class="words-style">${newWord.value}</p>
                    </div>
                        <p class="same-letters">Same letters: ${sameLettersCount} (${sameLetters})</p>
                        <p class="crossed-letters">Crossed letters: ${crossedLettersCount} (${crossedLetters})</p>
        `
        
        previousWord.value = newWord.value
        previousWord.disabled = true
        newWord.value = ""
        sameLettersCount = 0
        crossedLettersCount = 0
        sameLetters = ""
        crossedLetters = ""
        previousWordArr = []
        newWordArr = []
    }
    else{
        resultEl.innerHTML = `<p>Please, add the two words!</p>`
    }
    
}



