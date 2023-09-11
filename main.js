// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function() {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

// deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function() {

    const depositNumber = getInputNumber('depositAmount')

    updateSpanText('currentBalance', depositNumber)
    updateSpanText('currentDeposit', depositNumber)

    document.getElementById('depositAmount').value = ""  
})


// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function() {

    const withdrawNumber = getInputNumber('withdrawAmount')

    
})

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}