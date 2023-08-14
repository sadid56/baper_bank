document.getElementById('submit-btn').addEventListener('click', function(){
    //input field
    const inputField = document.getElementById('user-input');
    const input = inputField.value;
    // password field
    const passField = document.getElementById('user-password');
    const pass = passField.value;
     
    //! Evabe kokhono kora thik na but ekhon dekhar jonno kora hosse!
    if(input === 'sadidhasan56@gmail.com' && pass === 'sadid9756'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Vai age email r password thik moto de! 😑')
    }
})