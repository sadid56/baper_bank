//! deposit
document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-input');
    const depositeString = depositeInput.value;
    const deposite = parseFloat(depositeString);
    depositeInput.value = '';
    if(isNaN(deposite)){
        alert('Please provide me a number !');
        return;
       }
    const depositeAccount = document.getElementById('deposite-account');
    const depositResultString = depositeAccount.innerText;
    const depositResult = parseFloat(depositResultString)
    const totalDeposit = depositResult + deposite;
    depositeAccount.innerText = totalDeposit;
    

    const correntBalance = document.getElementById('corrent-balance');
    const correntString = correntBalance.innerText;
    const correntAmmount = parseFloat(correntString)
    const totalCorrentBalance = correntAmmount + totalDeposit;
    correntBalance.innerText = totalCorrentBalance;
})

//! withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawinput = document.getElementById('withdraw-input');
    const withdrawInputString = withdrawinput.value;
    const withdrawBalance = parseFloat(withdrawInputString);

    withdrawinput.value = '';
   if(isNaN(withdrawBalance)){
    alert('Please provide me a number !');
    return;
   }
    
    const totalWIthdrawElement = document.getElementById('total-withdraw');
    const totalWIthdrawString = totalWIthdrawElement.innerText;
    const totalWithdraw = parseFloat(totalWIthdrawString);
    
    
    
    
    

    const correntBalance = document.getElementById('corrent-balance');
    const correntString = correntBalance.innerText;
    const correntAmmount = parseFloat(correntString)
    if(correntAmmount < withdrawBalance){
        alert('Are vai oto taka nai tor baper !😑')
        return;
    }
    const withdraw = totalWithdraw + withdrawBalance;
    totalWIthdrawElement.innerText = withdraw;
    
    const totalCorrentBalance = correntAmmount - withdraw;
    correntBalance.innerText = totalCorrentBalance;
    
   
    
})