

const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".buttons")
const display = document.querySelector(".display")


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {

        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent 
        const displayedNum = display.textContent

        if (action === 'decimal') { display.textContent = displayedNum + '.'} 

        if (!action) {if (displayedNum === '0')  {display.textContent = keyContent}
        
        else {display.textContent = displayedNum + keyContent}

        if (action === 'add' ||
        action === 'divide' ||
        action === 'multiply' ||
        action === 'substract'  
         ) {
        key.classList.add('is-depressed')

        const previousKeyType = calculator.dataset.previousKeyType

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent}

                else {display.textContent = displayedNum + keyContent}
            }
        
        calculator.dataset.previousKeyType = 'operator'

        }
    }
    }


})


keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
   
const key = e.target
const action = key.dataset.action



if (action === 'add' ||
action === 'divide' ||
action === 'multiply' ||
action === 'substract'  
 ) {
    console.log('operator key!')
  } 
  

if (!action) {
    console.log('number key!')
  }


if (action === 'clear') { console.log('clear key!')}

if (action === 'calculate')  {console.log('calculate key!')}

if (action === 'decimal') {console.log('decimal key!')}


 } 
})


