
///Step 1 add click event andler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step 2 get the email address
    // always remeber to use .value to get text from an input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    // console.log(email);


    // step 3 get the password
    //a. set id on the html element
    //b. ge the element
    //c. get the value from the element

    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;

    // console.log(password);

    // Danger: dont verify email password on the client side.

    //step-4 verify email and password wheather valid user or not

    if (email === 'mail@salimalsazu.com' && password === 'secret') {
        window.location.href = 'bank.html'
    } else {
        alert('invaild user')
    }

})