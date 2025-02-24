let userName = '';

function startCalculator() {
    userName = document.getElementById('userName').value.trim();
    if (!userName) {
        alert('Por favor, digite seu nome!');
        return;
    }

    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('calculatorScreen').style.display = 'block';
    document.getElementById('welcomeMessage').textContent = `Bem-vindo(a) à calculadora, ${userName}!`;
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, digite números válidos!');
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Erro: Divisão por zero!');
                return;
            }
            result = num1 / num2;
            break;
        case '%':
            result = (num1 * num2) / 100;
            break;
    }

    const operationNames = {
        '+': 'soma',
        '-': 'subtração',
        '*': 'multiplicação',
        '/': 'divisão',
        '%': 'porcentagem'
    };

    document.getElementById('result').textContent = 
        `Resultado da ${operationNames[operation]}: ${result}`;
}

function resetCalculator() {
    if (confirm(`${userName}, deseja realmente sair da calculadora?`)) {
        document.getElementById('welcomeScreen').style.display = 'block';
        document.getElementById('calculatorScreen').style.display = 'none';
        document.getElementById('userName').value = '';
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('result').textContent = 'Resultado: ';
        userName = '';
    }
}

//Projeto feito pelo Lucas Gabriell