const emailForm = document.getElementById('form');
const emailInput = document.getElementById('email');
const resultMessage = document.getElementById('error');
const formContainer = document.getElementById('container');
const succesMsg = document.getElementById('thanks-box');
const dismiss = document.getElementById('dismiss');


emailForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const email = emailInput.value.trim();
    if (validateEmail(email)) {
        resultMessage.innerText = '';
        succesMsg.classList.add('active');
        formContainer.classList.add('active');
    } else {
        resultMessage.innerText = 'Please enter a valid email!';
    }
});

dismiss.addEventListener("click", function(){
    succesMsg.classList.remove('active');
    formContainer.classList.remove('active');
    esultMessage.innerText = '';

})

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}