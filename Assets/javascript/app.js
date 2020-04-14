// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// var randompwd = "ABCDEFGHIJKLNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=[];:.?/0123456789";

// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#display");

//     passwordText.value = password;

// }
// function generatePassword() {
//     var passwrd = '';
//     for (let i = 0; i <= 10; i++) {
//         var character = Math.floor(Math.random() * randompwd.length);
//         passwrd += randompwd.charAt(character);
//     }
//     return passwrd;
// }


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// Program Code
//DOM Elements

const passwordlength = document.getElementById('password-length');
const submitbutton = document.getElementById('submit');
var randompwd = "ABCDEFGHIJKLNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=[];:.?/0123456789";

submitbutton.addEventListener('click', () => {
    const length = passwordlength.value;
    writePassword(length);

    //window.close();
    //console.log(length);
}
);


function writePassword(length) {
    console.log("check1" + length);

    var lengthofpwd = length;
    var password = generatePassword(lengthofpwd);
    console.log("check4" + password);

    var passwordText = document.querySelector("#display");

    passwordText.value = password;

}
function generatePassword(lengthofpwd) {
    var pwdlength = lengthofpwd;
    console.log("check2" + pwdlength);
    var passwrd = '';
    for (let i = 0; i < pwdlength; i++) {
        var character = Math.floor(Math.random() * randompwd.length);
        passwrd += randompwd.charAt(character);
    }
    console.log("check3" + passwrd);
    return passwrd;
}



function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumer() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()_-+=[]<>,./;:';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


