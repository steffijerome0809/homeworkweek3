
// Program Code
//DOM Elements

const passwordlength = document.getElementById('password-length');
const submitbutton = document.getElementById('submit');
const uppercasechar = document.getElementById('uppercase');
const lowercasechar = document.getElementById('lowercase');
const numbersinput = document.getElementById('numbers');
const symbolsinput = document.getElementById('symbols');
const generatebutton = document.getElementById('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumer,
    symbol: getRandomSymbol

};
// generatebutton

generatebutton.addEventListener("click", function () {

    passwordlength.value = " ";
    lowercasechar.checked = false;
    uppercasechar.checked = false;
    numbersinput.checked = false;
    symbolsinput.checked = false;

});

//  Event Listener

submitbutton.addEventListener('click', () => {

    const length = +passwordlength.value;
    const islower = lowercasechar.checked;
    const isupper = uppercasechar.checked;
    const isnumber = numbersinput.checked;
    const issymbol = symbolsinput.checked;

    var password = generaterandompassword(islower, isupper, isnumber, issymbol, length);
    var passwordText = document.querySelector("#display");
    passwordText.value = password;


}
);

//Writing the function for generaterandompassword
//1. Initialize pwd var
//2. Taking only checked ones
//3. loop over the function for the length
//4. adding the pwd to pwd var and return


function generaterandompassword(lower, upper, number, symbol, length) {

    //const finalpassword = " ";
    if (length >= 8 && length <= 128) {

        console.log(length);


        let generaterandompassword = '';
        const numberofcounts = lower + upper + number + symbol;

        //console.log("number of counts :" + numberofcounts);

        const arraycount = [{ lower }, { upper }, { number }, { symbol }].filter
            (

                item => Object.values(item)[0]   //filter function is used
            );

        //console.log("arraycount :", arraycount);


        // write a code when no options are checked and pwd shd not be generated

        if (numberofcounts === 0) {
            return '';
        }
        for (let i = 0; i < length; i += numberofcounts) {
            arraycount.forEach(type => {
                const functionname = Object.keys(type)[0];

                // console.log('functionname:', functionname);

                generaterandompassword += randomFunc[functionname]();

            });
        }
        const finalpassword = generaterandompassword.slice(0, length);
        return finalpassword;

    }
    else return '';

}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumer() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()_-+=[]<>,./;:';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


