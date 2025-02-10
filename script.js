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
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}

function percent() {
    let display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}

function square() {
    let display = document.getElementById('display');
    display.value = Math.pow(parseFloat(display.value), 2);
}

function squareRoot() {
    let display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}

function fraction() {
    let display = document.getElementById('display');
    display.value = 1 / parseFloat(display.value);
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    document.getElementById('display').value = memory;
}

function memoryAdd() {
    memory += parseFloat(document.getElementById('display').value);
}

function memorySubtract() {
    memory -= parseFloat(document.getElementById('display').value);
}

function memoryStore() {
    memory = parseFloat(document.getElementById('display').value);
}