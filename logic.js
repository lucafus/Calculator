const screenDisplay = document.querySelector( '.display');
const buttons = document.querySelectorAll('button[id]')
const clearButton = document.querySelector( '#clear')
const equalButton = document.querySelector( '#equal')


let currentNumber = '0';
let currentOperation = null;


buttons.forEach (btn => {
    btn.addEventListener( 'click', function() 
    
    { inputNumber(this.id)
        
    });

});

const inputNumber = number => {

    const screenNumber = screenDisplay.innerHTML ;
    
    if ( screenNumber.length < 16) 
    screenDisplay.innerHTML = parseInt(screenNumber + number).toString();
}



clearButton.addEventListener ( 'click', function() {screenDisplay.innerHTML = "0"; 
});

equalButton.addEventListener('click', function () {
    calculate();
});


///////////////////


const calculate = () => { 
    if (currentOperation !== null) {
        
        const result = performOperation() ;
        screenDisplay.innerHTML = result.toString();
        currentNumber = result.toString();
        currentOperation = '=';
    }

};

const performOperation = () => {

    const operand2 = parseFloat(screenDisplay.innerHTML);
    switch (currentOperation) {

        case 'add':
        return parseFloat(currentNumber) + operand2;

        case 'substract': 
        return parseFloat(currentNumber) - operand2;

        case 'multiply':
            return parseFloat(currentNumber) * operand2;

        case 'divide':
                return parseFloat(currentNumber) / operand2;

                default:
                    return operand2;

    }
}



  