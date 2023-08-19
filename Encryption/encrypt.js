// File: encrypt.js
//  Developer: William Kennedy
// Description: Functionality for encrypting messages using DHKE, RSA, and other encryption techniques

const _dhInput = document.getElementById('dh_input');


function publicValues(g,p,a) {

    return (g**a)%p;
}

function DiffieHellmanKeyExchange(p, g, a, B) {

    return 

}