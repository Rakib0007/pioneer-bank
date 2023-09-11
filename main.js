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
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    updateSpanText('currentBalance', depositNumber)
    updateSpanText('currentDeposit', depositNumber)

    document.getElementById('depositAmount').value = ""  
})


function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}


// withdraw button event handler