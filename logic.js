

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
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent +=  keyContent;
            }
        }


        if (action === 'decimal') {
            display.textContent = displayedNum + '.';
        }

        if (action === 'clear') {
            console.log('clear key!');
        }

        if (action === 'add' ||
            action === 'divide' ||
            action === 'multiply' ||
            action === 'subtract') {
            key.classList.add('is-depressed');

                
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
            calculator.dataset.previousKeyType = 'operator';
            }

            if (action === 'calculate') {
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayedNum;

                display.textContent = calculate(firstValue, operator, secondValue)
                
            }


            
        }

     

});



