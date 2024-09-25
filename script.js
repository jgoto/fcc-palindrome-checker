const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result-text");

/* Ensure user enters a value for the text input 
when the submit button is clicked */

checkBtn.addEventListener("click", () => {
    if(textInput.value===""){
        alert("Please input a value");
    }
    else{
        const input = textInput.value.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
        const isPalindrome = evaluatePalindrome(input.split(''));
        isPalindrome?result.innerText = textInput.value + " is a palindrome" : result.innerText = textInput.value + " is not a palindrome";
        resetApplication();
    }
});

function evaluatePalindrome(array){
    let isEqual = true;
    console.log("checking to see if this is a palindrome");
    for(let i = 0; i < (array.length / 2); i++){
        console.log("checking " + i + " " + array[i] + array[array.length-i-1]);
        if(array[i] !== array[array.length-i-1])
        {
            return false;
        }
    }
    return isEqual;
}

function resetApplication(){
    textInput.value ="";
}

// module.exports = evaluatePalindrome