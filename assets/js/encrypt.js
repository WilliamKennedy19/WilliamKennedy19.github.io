// Output
const _output = document.getElementById('diffie-hellman-output');

// Buttons
const submit = document.getElementById('submit');


function isPrime(p) {
    for (var i=1; i<p-1; i++) {
        if ((p%i) == 0) {
            return False;
        }
    }

    return True;
};

submit.addEventListener('click', event => {

    // Get inputs
    const a_input = document.getElementById('a_input').value;
    const b_input = document.getElementById('b_input').value;
    const prime = document.getElementById('prime_input').value;
    const g_input = document.getElementById('g_input').value;

    if (Number.isInteger(a_input) && Number.isInteger(b_input) && Number.isInteger(prime) && Number.isInteger(g_input)) {
        _output.innerHTML = 'Success'+b_input;
    } else {
        _output.innerHTML = typeof NaN
    }

    if (!isPrime(prime)) {
        _output.innerHTML = "Please enter a prime number";
    } else {
        _output.innerHTML = 'Is a Prime';
    }

});


