let memory = 0; // Armazena o valor da memória

function appendCharacter(char) {
    let display = document.getElementById('display');
    if (display.value === '0' || display.value === 'Erro') {
        display.value = char;
    } else {
        display.value += char;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function clearEntry() {
    document.getElementById('display').value = '0';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1) || '0';
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        // Avalia a expressão primeiro
        let result = eval(display.value);
        
        // Verifica se o resultado é infinito ou NaN
        if (!isFinite(result)) {
            throw new Error('Divisão por zero');
        }
        
        // Verifica se o resultado é um número válido
        if (isNaN(result)) {
            throw new Error('Operação inválida');
        }
        
        display.value = result;
    } catch (error) {
        display.value = 'Erro';
    }
}

function percent() {
    let display = document.getElementById('display');
    try {
        let value = parseFloat(display.value);
        if (isNaN(value)) {
            throw new Error('Valor inválido');
        }
        display.value = value / 100;
    } catch (error) {
        display.value = 'Erro';
    }
}

function square() {
    let display = document.getElementById('display');
    try {
        let value = parseFloat(display.value);
        if (isNaN(value)) {
            throw new Error('Valor inválido');
        }
        let result = Math.pow(value, 2);
        if (!isFinite(result)) {
            throw new Error('Resultado muito grande');
        }
        display.value = result;
    } catch (error) {
        display.value = 'Erro';
    }
}

function squareRoot() {
    let display = document.getElementById('display');
    try {
        let value = parseFloat(display.value);
        if (isNaN(value)) {
            throw new Error('Valor inválido');
        }
        if (value < 0) {
            throw new Error('Raiz de número negativo');
        }
        display.value = Math.sqrt(value);
    } catch (error) {
        display.value = 'Erro';
    }
}

function fraction() {
    let display = document.getElementById('display');
    try {
        let value = parseFloat(display.value);
        if (isNaN(value)) {
            throw new Error('Valor inválido');
        }
        if (value === 0) {
            throw new Error('Divisão por zero');
        }
        display.value = 1 / value;
    } catch (error) {
        display.value = 'Erro';
    }
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    document.getElementById('display').value = memory;
}

function memoryAdd() {
    try {
        let value = parseFloat(document.getElementById('display').value);
        if (isNaN(value)) {
            throw new Error('Valor inválido');
        }
        memory += value;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function memorySubtract() {
    try {
        let value = parseFloat(document.getElementById('display').value);
        if (isNaN(value)) {
            throw new Error('Valor inválido');
        }
        memory -= value;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}

function memoryStore() {
    try {
        let value = parseFloat(document.getElementById('display').value);
        if (isNaN(value)) {
            throw new Error('Valor inválido');
        }
        memory = value;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}