

const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".buttons");
const display = calculator.querySelector(".display");



const calculate =(n1,operator, n2) => { 

    let result = ''

    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    }

    else if (operator === 'subtract') {

        result = parseFloat(n1) - parseFloat(n2)
    }

    else if (operator === 'divide') {

        result = parseFloat(n1) / parseFloat(n2) 
    }

    else if (operator === 'multiply') {

        result = parseFloat(n1) * parseFloat(n2)
    }

    return result
}



keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        

        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'));

        
        if (!action) {
            if (
                displayedNum === '0' || 
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            
            ) {
                display.textContent = keyContent;
            } else {
                display.textContent =  displayedNum + keyContent;
            }

            calculator.dataset.previousKeyType = 'number'
        }


        if (action === 'decimal') {
            
           if (!displayedNum.includes('.')) {
           display.textContent = displayedNum + '.'
        } else if (
            
            previousKeyType === 'operator' ||
            previousKeyType === 'calculate') {
                
                display.textContent = '0.'
            }

        calculator.dataset.previousKeyType = 'decimal'

    }
       
        if (action === 'clear') {
            console.log('clear key!');

            calculator.dataset.previousKeyType = 'clear'
        }

        if (action === 'add' ||
            action === 'divide' ||
            action === 'multiply' ||
            action === 'subtract') {

        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum

if (firstValue && 
    operator &&
    previousKeyType !== 'operator' &&
    previousKeyType !== 'calculate'
    ) {
        
        const calcValue = calculate(firstValue, operator, secondValue)
        display.textContent = calcValue 
        calculator.dataset.firstValue = calcValue } else {
            calculator.dataset.firstValue = displayedNum
}


            key.classList.add('is-depressed');

            calculator.dataset.operator = action
            calculator.dataset.previousKeyType = 'operator';
            }

            if (action === 'calculate') {
                let firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                let secondValue = displayedNum;

            if (firstValue) {

                 if (previousKeyType === 'calculate') {
                    
                    secondValue = calculator.dataset.modValue 
                    firstValue = displayedNum
                 }

                display.textContent = calculate(firstValue, operator, secondValue)
                
            }

            calculator.dataset.modValue = secondValue
            calculator.dataset.previousKeyType = 'calculate'
  
        }
    
    }


});


 
