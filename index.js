const previousWord = document.getElementById("previous-word")
const newWord = document.getElementById("new-word")
const checkBtn = document.getElementById("check-btn")
const resultEl = document.getElementById("result")
let sameLettersArr = []
let crossedLettersArr = []
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

        sameLettersArr = previousWordArr.filter((letter) => newWordArr.includes(letter))
        crossedLettersArr = previousWordArr.filter((letter) => !newWordArr.includes(letter))
    
        resultEl.innerHTML = `
                    <div class="words">
                        <p class="words-style">${previousWord.value}</p>
                        <p class="words-style">${newWord.value}</p>
                    </div>
                        <p class="same-letters">Same letters: ${sameLettersArr.length} (${sameLettersArr})</p>
                        <p class="crossed-letters">Crossed letters: ${crossedLettersArr.length} (${crossedLettersArr})</p>
        `
        
        previousWord.value = newWord.value
        previousWord.disabled = true
        newWord.value = ""
        sameLettersArr = []
        crossedLettersArr = []
        previousWordArr = []
        newWordArr = []
    }
    else{
        resultEl.innerHTML = `<p>Oh, Lord of Words, please, add the two words!</p>`
    } 
}



